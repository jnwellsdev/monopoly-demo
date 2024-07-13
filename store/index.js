import demoData from '@/assets/data/index.json'

export const state = () => ({
    demoData,
    view: '',
    currentUser: 1,
    piecesAvailable: [],
    currentPiece: {},
    pieceIds: [],
    claimed: [],
    currentWin: '',
    won: [],
    userHistory: {},
    mobile: Boolean,
    prize: false,
    video: false,
    num: 0,
    play: '',
    modal: false,
    response: {},
    gameCode: '',
    freeze: false,
    theme: ''
    })
    export const strict = false
    export const getters = {
        demoUser: state => state.demoData.users.find(i => i.id == state.currentUser),
        demoHistory: state => state.demoData.userHistory,
        demoPieces: state => state.demoData.piecesAvailable,
        demoBoard: state => state.demoData.board,
    }
    export const mutations = {
        handleMobile(state, val) {
            // watch media query
            const mq = window.matchMedia(`(max-width: ${val}px)`)
            const mqMatch = (e) => state.mobile = e.matches
            mqMatch(mq)
            mq.addEventListener('change', mqMatch)
        },
        handleHeight(state) {
            // watch document height
            console.log('height?')
            const resize = () => state.height = {height: `${document.body.clientHeight}px`}
            window.addEventListener('resize', resize)
            resize()
        },
        handleTheme(state) {
            const urlParams = new URLSearchParams(window.location.search)
            const theme = urlParams.get('theme')
            theme && (state.theme = `v${theme}`)
        },
        handleModal(state, val) {
            state.modal = !state.modal
            state.view = val
        },
        handleFreeze(state, { val, time }) {
            state.freeze = val
            setTimeout(() => state.freeze = !val, time)
        },
        handleView(state, val) {
            state.view = val
        },
        handlePlay(state, val) {
            state.play = val
            setTimeout(() => state.play = '', 100)
        },
        handleReset(state) {
            state.prize = false
            state.video = false
            state.currentWin = ''
        },
        handleResponse(state, val) {
            state.response = val
            state.view = 'response'
        },
        updateGameCode(state, val) {
            state.gameCode = val
        },
        updateHistory(state, val) {
            state.userHistory = val
        },
        setCurrent(state) {
            state.currentPiece = demoData.userHistory[0].property
        },
        setUpPieces(state) {
            state.piecesAvailable = demoData.piecesAvailable.sort(() => Math.random() - 0.5)
            // state.pieceIds = [...new Set(Array(5).fill().map(() => state.piecesAvailable.map(p => p.id).splice(Math.floor(Math.random() * state.piecesAvailable.map(p => p.id).length), 1)[0]))].sort(() => Math.random() - 0.5)
            state.pieceIds = [19, 14, 9, 12, 11] // demo
        },
        handlePieces(state, val) {
            let checker = (arr, target) => target.every(v => arr.includes(v))
            let first = state.piecesAvailable.map(p => p.id).filter(p => !state.claimed.includes(p) && !state.pieceIds.includes(p))
            val === 'start' && (state.claimed = [], state.pieceIds = state.pieceIds.slice(1))
            val === 'add' && state.pieceIds.length < 5 && ((state.pieceIds = [first[first.length - 1], ...state.pieceIds]))
            val === 'remove' && (state.claimed = [state.pieceIds[0], ...state.claimed], state.pieceIds = state.pieceIds.slice(1))
            state.demoData.pieceSets.forEach((set, i) => {
                if(checker(state.claimed, set[`set${i + 1}`]) && !state.won.includes(i + 1)) {
                    console.log(`set${i + 1}`)
                    state.won = [...state.won, i + 1]
                    state.currentWin = i + 1
                    this.commit('handlePrize')
                }
                
            })
        },
        handlePrize(state, val) {
            val === 'ended' ? 
            (state.video = !state.video) :
            (state.prize = !state.prize, state.video = !state.video)
            // setTimeout(() => state.video = !state.video, 5000)
        },
        handleDemoCode(state) {
            state.view = 'response'
            !state.gameCode ?
            (state.response = {status: 'INVALID CODE', message: 'The code is not valid.', action: 'Submit a new code'}) :
            (state.response = {status: 'NEW PIECE COLLECTED!', message: "Congratulations!<br>You've got a new game piece ready<br>to be collected!", action: 'Submit another code', action2: 'Claim your piece'}, 
            state.pieceIds.length < 5 && this.commit('handlePieces', 'add'),
            console.log(state.pieceIds.length),
            state.prize = false,
            state.video = false
            )
        }
    }
    export const actions = {
        resetUser({ commit }) {
            // Get the pieces available to be redeemed
            axios.get(`/player-piece/available`)
                .then(res => {
                    commit('setUpPieces', res.data)
                }).catch(err => console.log(err))
        },
        checkCode({ commit, state }) {
            state.response = {}
            axios.get(`/game-piece/check/${state.gameCode}`)
                .then(res => {
                    commit('handleResponse', res.data)
                    this.dispatch('resetUser')
                }).catch(err => console.log(err))
        },
        claimPiece({ commit, state }) {
            axios.post(`/player-piece/claim/`, state.piecesAvailable[0])
                .then(res => {
                    console.log(res.data);
                    commit('handleResponse', res.data)
                    this.dispatch('resetUser')
                }).catch(err => console.log(err))
        },
        getHistory({ commit }) {
            axios.get(`/player-property/`)
                .then(res => {
                    console.log(res.data);
                    commit('updateHistory', res.data)
                }).catch(err => console.log(err))
        }
    }