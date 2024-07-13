<template lang='pug'>
.side-module
    .logo(v-if='!mobile')
        img(src='img/app/logo-v1.png', v-if='theme === "v1"')
        img(src='img/app/logo.png', v-else)
    .user
        .top
            h1 {{ user.name }}
        .left
            p {{ user.role }}
        .right
            button(@click='handleModal("history")') History
    .pieces
        .top
            h1.num {{ pieceIds.length }}
            p new pieces available
        .left
            button(@click='handleModal("claim")') Claim your pieces
        .right
            button(@click='handleModal("redeem")') Redeem a code
    .instructions
        h1 instructions
        p(v-snip="{ lines: 4 }") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut sem. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Elit ut aliquam purus sit amet luctus. Ut sem nulla pharetra diam sit amet nisl suscipit.
        a(href='#') complete rules
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: { ...mapGetters({ user: 'demoUser', piecesAvailable: 'demoPieces' }), ...mapState(['mobile', 'theme', 'pieces', 'pieceIds']) },
    methods: {
        handleModal(val) {
            this.$store.commit('handleModal', val)
        },
        availablePieces() {
            this.$store.dispatch('getAvailablePieces')
        }
    }
}
</script>

<style lang='sass' scoped>
.side-module
    width: 65%
    margin-right: 2rem
    display: flex
    flex-flow: column
    > div
        height: auto
        background: $cnw-primary
        outline: 0.45rem solid lighten($cnw-primary, 1.25%)
        box-shadow: $cnw-shdw
        margin-bottom: 2rem
        padding: 0.5rem 2rem
        display: flex
        &:last-child
            height: 100%
            margin-bottom: 0
        button
            background: $cnw-black
            color: $cnw-white
            &:hover
                border: 3px solid lighten($cnw-primary, 12%)
                background: lighten($cnw-black, 2.25%)
        &.logo
            background: #cc002c
            outline-color: lighten($cnw-primary, 2%)
            border-radius: 0.001rem 0.001rem 0 0
            justify-content: center
            padding: 0 2.25rem
            img
                width: 100%
                margin: -0.25rem 0 0 0
        &.user
            flex-flow: row wrap
            h1
                margin: 0
            p
                margin: -0.25rem 0 0 0
            .top
                width: 100%
                text-align: left
                align-items: flex-end
            .left
                text-align: left
                align-items: flex-end
                width: 50%
            .right
                width: 50%
                display: flex
                justify-content: flex-end
                align-items: flex-start
                button
                    width: 68%
                    max-width: 100%
                    margin: -2.75rem 0 0 0
        &.pieces
            flex-flow: row wrap
            justify-content: space-between
            h1
                margin: 1.5rem 0 1rem 0
            p
                margin: 1rem 0 0 0
            button
                width: 100%
                max-width: 100%
                margin: 0
            .top
                width: 100%
                text-align: left
                margin: -0.25rem 0 0.5rem 0
                display: flex
                flex-flow: row nowrap
                justify-content: space-between
                align-items: center
                p
                    width: 100%
                    margin: 0 0 -0.5rem 0
                    font-size: 1.8rem
                    letter-spacing: 0rem
                    text-transform: uppercase
                    text-align: right
                    line-height: 1
                h1
                    width: 20%
                    height: 20%
                    background: lighten($cnw-primary, 10%)
                    color: $cnw-white
                    font-size: 2.9rem
                    text-align: center
                    margin: 0
                    border-radius: 8px
                    min-height: 60px
            .left
                width: 50%
                margin: 0.5rem 0 0 0
                text-align: left
                justify-content: flex-start
            .right
                width: 45%
                margin: 0.5rem 0 0 0
                display: flex
                justify-content: flex-end

        &.instructions
            border-radius: 0 0 0.001rem 0.001rem
            text-align: left
            flex-flow: column
            h1
                margin: 0.75rem 0 0.25rem -0.25rem
            p
                margin: 0.5rem 0 0.5rem -0.25rem
                line-height: 1.15em
                height: auto
                max-height: calc(1.2em * 4)
            a
                font-family: 'XfinityBrownWeb Regular Web', sans-serif
                font-size: 1rem
                color: $cnw-white
                margin: 0 0 0 -0.25rem
                text-decoration: underline
// theme
#app.v1
    .side-module > div
        background: $cnw-primary-v1
        outline: 0.6rem solid $cnw-primary-v1
        button
            background: $cnw-white-v1
            color: $cnw-secondary-v1
            border-color: $cnw-primary-v1
            &:hover
                border: 3px solid $cnw-secondary-v1
                background: white
        &.logo
            background: $cnw-primary-v1
            outline-color: $cnw-primary-v1
            border-radius: 35px 0 0 0
            justify-content: center
            padding: 0 2.25rem
        &.pieces
            .top h1
                background: $cnw-white-v1
                color: $cnw-primary-v1
        &.instructions
            border-radius: 0 0 35px 0

@media (min-width: 980px) and (max-width: 1440px)
    .side-module > div
        padding: 0.5rem 1.5rem
        h1
            font-size: 2.3vw
        p
            font-size: 1.65vw
        &.pieces .top p
            font-size: 2.2vw
        &.user
            .top
                margin: 0
            .left p
                font-size: 1.35vw

@media (min-width: 980px) and (max-width: 1280px)
    .side-module > div
        padding: 0.5rem 0.75rem
        button
            font-size: 1.6vw
        &.pieces
            padding: 0.25rem 0.75rem 0.5rem 0.75rem
            .top
                margin: -0.25rem 0 0 0
                h1
                    font-size: 3.5vw
                    min-width: 4.25vw
                    min-height: 4.25vw
                p
                    text-align: center
        &.instructions
            h1
                margin: 0 0 0.25rem -0.25rem
            p
                margin: 0 0 0.5rem -0.25rem
                line-height: 1.75vw
            a
                font-size: 1.5vw
        &.user .right button
            margin: -3.75vw 0 0 0

@media (max-width: 980px)
    .side-module > div
        padding: 0.5rem 2rem
        &.pieces .top p
            letter-spacing: -0.01rem

@media (max-width: 720px)
    .side-module > div
        padding: 0.5rem 1.5rem
        &.logo
            padding: 0.5rem 0.75rem
        &.user
            .left
                width: 100%
            .right
                width: 100%
                button
                    width: 100%
                    margin: 1rem 0 0 0
        &.pieces
            .top
                h1
                    min-width: 54px
                    min-height: 54px
                    line-height: 1.375
                    margin: 0.25rem 0.25rem 0 0
                p
                    font-size: 1.55rem
                    letter-spacing: -0.01rem
                    text-align: center
            .left, .right
                width: 100%
                margin: 0.5rem 0
                
@media (max-width: 550px)
    .side-module > div
        padding: 0.5rem 1rem
</style>