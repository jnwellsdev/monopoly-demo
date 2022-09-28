import gsap from 'gsap'

export const animations = {

    mounted() {
        this.setExample()
    },
    
    methods: {
        setExample() {
            console.log(`GSAP V${gsap.version}`)
        },

        playExample() {
            const tl = gsap.timeline()
            tl.to([''], {})
        }
    }

} 