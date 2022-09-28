<template lang='pug'>
p {{ msg }}
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

</style>