<template lang='pug'>
.logo-module
    .card.logo
        img(src='img/app/logo-v1.png', v-if='theme === "v1"')
        img(src='img/app/logo.png', v-else)
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    computed: { ...mapGetters({}), ...mapState(['theme']) }
}
</script>

<style lang='sass' scoped>
.logo-module
    div
        height: auto
        background: #cc002c
        outline: 0.6rem solid lighten($cnw-primary, 2%)
        box-shadow: $cnw-shdw
        margin-bottom: 2rem
        display: flex
        &.logo
            border-radius: 0.001rem 0.001rem 0 0
            justify-content: center
            img
                width: 84%
                margin: -0.25rem 0 0 0
</style>