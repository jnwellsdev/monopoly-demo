<template lang="pug">
.modal-module(@click='handleClose')
    .wrap
        .close(@click='handleModal')
            svg
                use(xlink:href="#close-icon")
        .modal.redeem(v-if='view === "redeem"')
            header
                h2 Enter the Game Code
            section
                form
                    input(v-model='gameCode', placeholder="enter any value")
            footer
                button(@click='handleCode').primary Submit your code
        .modal.claim(v-if='view === "claim"')
            header
                h2(v-if='!prize && pieceIds.length > 0') You Have {{ pieceIds.length }} New {{ pieceIds.length > 1 ? "Pieces" : "Piece" }}
                h2(v-if='!prize && pieceIds.length === 0') You Have No New Pieces
                h2(v-if='prize') You Won!<br>You Completed Set {{ currentWin === 1 ? 'One' : currentWin === 2 ? 'Two' : currentWin === 3 ? 'Three' : currentWin === 4 ? 'Four' : currentWin === 5 ? 'Five' : currentWin === 6 ? 'Six' : currentWin === 7 ? 'Seven' : currentWin === 8 ? 'Eight' : '' }}!
            section
                .pieces(v-if='!prize')
                    .piece(v-for='piece in pieceIds', :key='piece')
                        img.back(:src='`img/app/card-front-p${piece}.png`')
                        img.front(src='img/app/card-back-v1.png', v-if='theme === "v1"')
                        img.front(src='img/app/card-back.png', v-else)
                .win(v-if='prize')
                    transition(name='fade')
                        video#video(playsinline paused muted v-if='video')
                            source(src='img/app/prize-gif.mp4', type='video/mp4')
                        img(:src='`img/app/prize-info-${currentWin}.png`', v-if='!video')
            footer
                button(v-if='!prize', @click='claimPiece').primary Claim your new piece
                button(v-if='prize && pieceIds.length === 0', @click='handleModal').primary Close
                button(v-if='prize && pieceIds.length > 0', @click='handleView("claim")').primary Claim your new piece

        .modal.history(v-if='view === "history"')
            header
                h2 Player History
            section
                table
                    thead
                        th PROPERTY
                        th DATE COLLECTED
                    tbody.overflow-y-auto(v-if='userHistory')
                        tr(v-for='record in userHistory', :key='record.id')
                            td {{ record.property.label }}
                            td {{ record.updated_at | formatDate }}
                    tbody.overflow-y-auto(v-else)
                        tr(v-for='n in 5', :key='n')
                            td 
                            td 
            footer
                button(@click='handleModal').primary Cancel
        .modal.response(v-if='view === "response"')
            header
                h2 {{ response.status }}
            section
                h3(v-html="response.message")
            footer
                button(v-if='response.action && pieceIds.length < 5' @click='handleView("redeem")').secondary {{ response.action }}
                button(v-if='response.action2' @click='handleView("claim")').primary {{ response.action2 }}

</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    mounted() {
        // this.view === 'history' &&
        //     this.$store.dispatch('getHistory')
    },
    computed: {
        ...mapGetters({
            userHistory: 'demoHistory',
            piecesAvailable: 'demoPieces',
        }),
        ...mapState(['view', 'response', 'theme', 'pieceIds', 'prize', 'video', 'currentWin']),
        gameCode: {
            get() {
                return this.$store.state.gameCode
            },
            set(val) {
                this.$store.commit('updateGameCode', val)
            },
        },
    },
    methods: {
        handleCode() {
            this.$store.commit('handleDemoCode')
            // this.$store.dispatch('checkCode')
        },
        updateGameCode(e) {
            this.$store.commit('updateGameCode', e.target.val)
        },
        claimPiece() {
            this.$store.commit('handlePlay', 'flip')
            this.$store.commit('handleFreeze', { val: true, time: 3500 })
            // this.$store.dispatch('claimPiece') // 405 ?
        },
        handleModal(val) {
            this.$store.commit('handleModal', val)
            this.$store.commit('handleReset')
        },
        handleView(val) {
            this.$store.commit('handleView', val)
            this.prize && this.$store.commit('handleReset')

        },
        handleClose(e) {
            // fix to enable background click
            e.target.className === 'wrap' && this.$store.commit('handleModal')
            e.target.className !== 'primary' && this.$store.commit('handleFreeze', { val: true, time: 100 })
            this.$store.commit('handleReset')

        },
    },
}
</script>

<style lang="sass" scoped>
.modal-module
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 99
    background: rgb(18 22 46 / 60%)
    backdrop-filter: saturate(60%) brightness(60%)
    .wrap
        display: flex
        flex-flow: column
        height: 90vh
        min-height: 550px
        justify-content: center
        align-items: center
        .close
            width: 60%
            max-width: 720px
            display: flex
            position: relative
            top: 45px
            left: 2px
            z-index: 101
            svg
                width: 40px
                height: 40px
                margin-left: auto
                fill: $cnw-secondary
                cursor: pointer
        .modal
            width: 60%
            max-width: 720px
            background-color: $cnw-white
            border-radius: 8px
            box-shadow: $cnw-shdw-modal
            display: flex
            flex-flow: column
            z-index: 100
            color: $cnw-black
            header
                display: flex
                justify-content: center
                align-items: flex-start
                width: 100%
                height: 90px
                padding: 0.65rem 0
                z-index: 1
                h1
                    width: 100%
                    padding-left: 42px
                    font-size: 2.75rem
                h2
                    font-size: 2rem
                    line-height: 1.1
            section
                display: flex
                justify-content: center
                align-items: center
                min-height: 125px
                padding: 0 0.65rem
                line-height: 1.15
            footer
                display: flex
                justify-content: center
                align-items: center
                height: 125px
                padding: 1.3rem 0 0.65rem 0
                button
                    width: 35%
                    @media (max-width: 1280px)
                        width: 40%
                    @media (max-width: 980px)
                        width: 46%
                    @media (max-width: 550px)
                        width: 80%
            &.claim
                .pieces
                    position: relative
                    height: 350px
                    width: 216px
                    transform: translate(calc(50% - 108px), 0)
                    .piece
                        height: 100%
                        width: 100%
                        position: absolute
                        transition: margin 0.35s ease, height 0.35s ease
                        z-index: 100
                        img
                            height: 100%
                            position: absolute
                            backface-visibility: hidden
                            &:last-child
                                box-shadow: $cnw-shdw-modal
                        @for $i from 2 through 6
                            &:nth-child(#{$i})
                                z-index: calc(99 - #{$i})
                                margin-top: 4%
                                height: 94%
                                @if $i % 2 == 0
                                    margin-left: calc(calc(#{$i} + 1) * 1rem)
                                @else
                                    margin-left: calc(calc(#{$i} - 1) * -1rem)
                .win
                    position: relative
                    height: 350px
                    width: 100%
                    display: flex
                    flex-flow: column
                    justify-content: center
                    video
                        object-fit: cover
                        position: absolute
                        top: 0
                        left: 0
                        height: 100%
                        width: 60%
                        margin: 0 20%
            &.redeem
                form
                    width: 100%
                    input
                        width: 50%
                        height: 4rem
                        border-radius: 8px
                        border: 2px solid
                        background-color: lighten($cnw-white, 1%)
                        padding: 0 1rem
                        text-align: center
                        font-size: 1.75rem
                        &::placeholder
                            color: $cnw-primary
                            font-size: 1.75rem
                            opacity: 0.2
            &.history
                section
                    table
                        @include x-font
                        display: flex
                        flex-flow: column
                        width: 90%
                        height: 100%
                        border: 2px solid
                        border-radius: 8px
                        thead
                            @include x-font-bold
                            display: flex
                            background: $cnw-black
                            color: $cnw-white
                            height: 3.5rem
                            font-size: 1.15rem
                            letter-spacing: 0.05rem
                            th
                                display: flex
                                flex: 1
                                align-items: center
                                padding: 0 1rem 0 1.5rem
                        tbody
                            display: flex
                            flex-flow: column
                            font-size: 1.05rem
                            height: 100%
                            tr
                                display: flex
                                flex: 1
                                border-top: 2px solid
                            td
                                display: flex
                                flex: 1
                                min-height: 2.25rem
                                align-items: center
                                padding: 0.25rem 1rem 0 1.5rem
                                &:first-child
                                    border-right: 2px solid
            &.response
                section
                    flex-flow: column
// theme
#app.v1
    .modal-module
        svg
            fill: $cnw-black-v1
            cursor: pointer
        .modal
            background-color: $cnw-white-v1
            color: $cnw-black-v1
            &.history section table thead
                background: $cnw-black-v1
                color: $cnw-white-v1
</style>
