<template lang='pug'>
.main-screen
    header
    section
        p {{ msg }}
    footer
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { animations } from '../assets/gsap'

export default {
    mixins: [animations],
    computed: { ...mapGetters({}), ...mapState(['msg']) },
    watch: {
        play(val) {
            if (val) { }
        }
    }
}
</script>

<style lang='sass' scoped>
.main-screen
    @include full-center
    display: grid
    grid-template-rows: 1fr 2fr 1fr
    overflow: hidden
    header, section, footer
        @include flex-center
        z-index: 10
        width: 100vw
        height: 100%
</style>