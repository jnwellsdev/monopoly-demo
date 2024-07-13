<template lang='pug'>
.main-screen(:class='{ freeze }')
    include ./../assets/svg/index
    transition(appear name='fade')
        Modal(v-if='modal')
    header(v-if='mobile')
        Logo
    section
        Side
        Board
    footer
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { animations } from '@/assets/gsap'
export default {
    mixins: [animations],
    mounted() {
        this.$store.commit('handleMobile', '980')
        this.$store.commit('setUpPieces')
        this.playBoard([])
        // this.$store.dispatch('resetUser')
    },
    computed: { ...mapGetters({}), ...mapState(['mobile', 'modal', 'play', 'freeze', 'pieces', 'prize', 'video']) },
    methods: {},
    watch: {
        play(play) {
            if (play === 'flip') {
                this.playFlip()
            }
        },
        prize() {
            this.$nextTick(() => {
                if (this.prize && this.video) {
                    this.playVideo()
                }
            })
        }
    }
}
</script>

<style lang='sass'>
html, body // the battle continues ?
    height: 100% !important
    background-color: $cnw-secondary !important
#app
    background: $cnw-secondary
    color: $cnw-white
    position: relative
    display: block
    height: calc(100% - 32px)
    user-select: none
    .content
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        height: 100%
.main-screen
    display: grid
    justify-content: center
    align-items: center
    height: calc(100% - 4rem)
    margin: 4rem 0 0 0
    padding: 0.25rem 6vw 2.5rem 6vw
    section
        display: flex
        max-width: 1280px
    > footer
        padding: 0 0 4rem 0

// theme
html.v1, body.v1
    background-color: #4226a8 !important
.alert.v1
    background-color: #6138f5
#app.v1
    background: $cnw-secondary-v1
    color: $cnw-white-v1
</style>
