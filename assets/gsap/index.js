import gsap from 'gsap'
import { mapState, mapGetters } from 'vuex'
const properties = [
	'#P1', '#P2', '#P3', '#P4', '#P6', '#P7',
	'#P8', '#P9', '#P10', '#P11', '#P12',
	'#P13', '#P14', '#P16', '#P17', '#P18',
	'#P19', '#P20', '#P21', '#P22', '#P23',
	'#P24', '#P26', '#P27', '#P28', '#P29',
	'#P30', '#P31', '#P32', '#P33', '#P34',
	'#P36', '#P37', '#P38', '#P39', '#P40', '.own'
]

export const animations =  {
mounted() { },
computed: { ...mapGetters({piecesAvailable: 'demoPieces'}), ...mapState(['modal', 'mobile', 'pieces', 'prize', 'pieceIds']) },
methods: {
	setFlip() {
            // get matching property coordinates
            // const ids = Object.keys(this.piecesAvailable).map(key => `#P${this.piecesAvailable[key].id}`)
            // const property = document.querySelector(ids[0])
            // const coords = property.getBoundingClientRect()
            // let ids = [...this.piecesAvailable.forEach(piece => `P${piece.id}`)]
            // console.log(coords)
	},

	playFlip() {
		const piece = '.piece:first-child'
		const front = '.piece:first-child .front'
		const back = '.piece:first-child .back'
		const piece2 = '.piece:nth-child(2)'
		const tl = gsap.timeline({onComplete: () => {
			// DEMO: remove from dom
			// let firstcard = document.querySelector('.piece:first-child')
			// firstcard.parentNode.removeChild(firstcard)
			!this.pieceIds.length && !this.prize && (this.$store.commit('handleModal'), setTimeout(() => this.playButton2(), 500))
		}})
		// set flip
		gsap.set(back, {rotationY: -180})
		gsap.set(piece, {transformPerspective: 1000, transformStyle: 'preserve3d'})
		// 
		tl.to(front, {rotationY: 180, duration: 1, ease: "power2.inOut"})
		  .to(back, {rotationY: 0, duration: 1, ease: "power2.inOut"}, '<')
		  .to(piece, {z:100, duration: 0.35, ease: "power2.inOut"}, '<')
		  .to(piece, {z:0, duration: 0.65, ease: "power2.inOut"}, '< 1.35')
		  // fly out
		  .to(piece, {x: this.mobile ? '0' : '-265%', y: this.mobile ? '100%' : '0', scale: 0.25, opacity: 0}, '< 1')
		  // TODO: update board
		  .add(() => this.playProperty(`#P${this.pieceIds[0]}:not(.own)`), '> -0.5')
		  // update number
		  .add(() => this.playNumber('remove'))
		  // reorder cards
		  .to(piece2, {margin: 0, height: '100%'})
		},
    playProperty(val) {
		const tl = gsap.timeline()
		tl.to(val, {opacity: 0, duration: 0.25, ease: "power2.inOut"})
	},
	playNumber(val) {
		let el = '.num'
		const tl = gsap.timeline()
		tl.to(el, {color: 'transparent', duration: 0.2, onComplete: () => this.$store.commit('handlePieces', val)})
		  .to(el, {color: '#f1f8ff', duration: 0.2})
	},

	playButton() {
		let el = '.pieces .left button'
		const tl = gsap.timeline({repeat: 4, onComplete: () => gsap.set(el, {clearProps: 'all'})})
		tl.to(el, {borderColor: '#b1d2fb', background: '#133a91', duration: 0.35})
		  .to(el, {borderColor: '#3a8beb', background: '#0c3081', duration: 0.35})
	},
	playButton2() {
		let el = '.pieces .right button'
		const tl = gsap.timeline({repeat: 4, onComplete: () => {gsap.set(el, {clearProps: 'all'}), this.modal === false && this.$store.commit('handleModal', 'redeem')}})
		tl.to(el, {borderColor: '#b1d2fb', background: '#133a91', duration: 0.35})
		  .to(el, {borderColor: '#3a8beb', background: '#0c3081', duration: 0.35})
	},

	setBoard() {
		gsap.set(properties, {opacity: 0})
		gsap.set(['.board-module', '.side-module'], {opacity: 0, y: 15})
	},

	playBoard() {
		this.playNumber('start')
		this.setBoard()
		const tl = gsap.timeline()
		tl.to(['.board-module', '.side-module'], {opacity: 1, y: 0, duration: 0.75}, '0.5')
		  .to(properties, { scale: 1, opacity: 1, duration: 0.0005, stagger: 0.035, ease: 'elastic.out(1,0.3)' }, '< 0.25')
          .add(() => this.playNumber('add'), '< 2.5>')
          .add(() => this.playButton(), '> 0.25')
          .add(() => this.modal === false && this.$store.commit('handleModal', 'claim'), '> 3.5')

	},
	playVideo() {
		let vid = document.querySelector('video#video')
		setTimeout(() => vid.play(), 500)
		vid.addEventListener('ended', () => this.$store.commit('handlePrize', 'ended'))
	}
		}

}