<template lang='pug'>
.board-module
    svg(viewBox='0 0 2400 2399')
        defs
            pattern#c0(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="573" width="573" :xlink:href='imgPath + "c0.svg"')
            pattern#c1(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="654" width="762" :xlink:href='imgPath + "c1.svg"')
            pattern#c2(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="654" width="762" :xlink:href='imgPath + "c2.svg"')
            pattern#c3(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="762" width="654" :xlink:href='imgPath + "c3.svg"')
            pattern#c4(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="762" width="654" :xlink:href='imgPath + "c4.svg"')
            pattern#c5(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="654" width="762" :xlink:href='imgPath + "c5.svg"')
            pattern#c6(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="654" width="762" :xlink:href='imgPath + "c6.svg"')
            pattern#c7(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="762" width="654" :xlink:href='imgPath + "c7.svg"')
            pattern#c8(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="762" width="654" :xlink:href='imgPath + "c8.svg"')
            pattern#p1(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p1.svg"')
            pattern#p2(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p2.svg"')
            pattern#p3(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p3.svg"')
            pattern#p4(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p4.svg"')
            pattern#p6(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p6.svg"')
            pattern#p7(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p7.svg"')
            pattern#p8(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p8.svg"')
            pattern#p9(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p9.svg"')
            pattern#p11(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p11.svg"')
            pattern#p12(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p12.svg"')
            pattern#p13(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p13.svg"')
            pattern#p14(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p14.svg"')
            pattern#p16(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p16.svg"')
            pattern#p17(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p17.svg"')
            pattern#p18(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p18.svg"')
            pattern#p19(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p19.svg"')
            pattern#p21(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p21.svg"')
            pattern#p22(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p22.svg"')
            pattern#p23(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p23.svg"')
            pattern#p24(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p24.svg"')
            pattern#p26(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p26.svg"')
            pattern#p27(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p27.svg"')
            pattern#p28(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p28.svg"')
            pattern#p29(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "p29.svg"')
            pattern#p31(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p31.svg"')
            pattern#p32(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p32.svg"')
            pattern#p33(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p33.svg"')
            pattern#p34(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p34.svg"')
            pattern#p36(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p36.svg"')
            pattern#p37(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p37.svg"')
            pattern#p38(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p38.svg"')
            pattern#p39(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "p39.svg"')
            pattern#p5(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="930" width="190" :xlink:href='imgPath + "p5.svg"')
            pattern#p15(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="930" :xlink:href='imgPath + "p15.svg"')
            pattern#p25(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="930" width="190" :xlink:href='imgPath + "p25.svg"')
            pattern#p35(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="930" :xlink:href='imgPath + "p35.svg"')
            pattern#p10(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="343" width="343" :xlink:href='imgPath + "p10.svg"')
            pattern#p20(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="343" width="343" :xlink:href='imgPath + "p20.svg"')
            pattern#p30(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="343" width="343" :xlink:href='imgPath + "p30.svg"')
            pattern#p40(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="343" width="343" :xlink:href='imgPath + "p40.svg"')
            pattern#own1(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "own1.svg"')
            pattern#own2(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "own2.svg"')
            pattern#own3(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "own3.svg"')
            pattern#own4(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "own4.svg"')
            pattern#own5(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "own5.svg"')
            pattern#own6(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="345" width="190" :xlink:href='imgPath + "own6.svg"')
            pattern#own7(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "own7.svg"')
            pattern#own8(x='0' y='0' width='1' height='1')
                image(preserveAspectRatio height="190" width="345" :xlink:href='imgPath + "own8.svg"')
        g#top
            path#P1.own(d='M534,345H344V0h190V345z')
            path#P2.own(d='M724,345H534V0h190V345z')
            path#P3.own(d='M914.3,345h-190V0h190V345z')
            path#P4.own(d='M1104.6,345h-190V0h190V345z')
            path#P5.own(d='M1200,914L1200,914c32.4,0,64.5,5.4,95,16.2V0h-190v930.2C1135.5,919.4,1167.6,914,1200,914z')
            path#P6.own(d='M1485.1,345h-190V0h190V345z')
            path#P7.own(d='M1675.4,345h-190V0h190V345z')
            path#P8.own(d='M1865.7,345h-190V0h190V345z')
            path#P9.own(d='M2056,345h-190V0h190V345z')
            path#P1(d='M534,345H344V0h190V345z')
            path#P2(d='M724,345H534V0h190V345z')
            path#P3(d='M914.3,345h-190V0h190V345z')
            path#P4(d='M1104.6,345h-190V0h190V345z')
            path#P5(d='M1200,914L1200,914c32.4,0,64.5,5.4,95,16.2V0h-190v930.2C1135.5,919.4,1167.6,914,1200,914z')
            path#P6(d='M1485.1,345h-190V0h190V345z')
            path#P7(d='M1675.4,345h-190V0h190V345z')
            path#P8(d='M1865.7,345h-190V0h190V345z')
            path#P9(d='M2056,345h-190V0h190V345z')
        g#right
            path#P11.own(d='M2055,534V344h345v190H2055z')
            path#P12.own(d='M2055,724V534h345v190H2055z')
            path#P13.own(d='M2055,914.3v-190h345v190H2055z')
            path#P14.own(d='M2055,1104.6v-190h345v190H2055z')
            path#P15.own(d='M1469.8,1105c10.7,30.5,16.2,62.6,16.2,95l0,0c0,32.4-5.4,64.5-16.2,95H2400v-190H1469.8z')
            path#P16.own(d='M2055,1485.1v-190h345v190H2055z')
            path#P17.own(d='M2055,1675.4v-190h345v190H2055z')
            path#P18.own(d='M2055,1865.7v-190h345v190H2055z')
            path#P19.own(d='M2055,2056v-190h345v190H2055z')
            path#P11(d='M2055,534V344h345v190H2055z')
            path#P12(d='M2055,724V534h345v190H2055z')
            path#P13(d='M2055,914.3v-190h345v190H2055z')
            path#P14(d='M2055,1104.6v-190h345v190H2055z')
            path#P15(d='M1469.8,1105c10.7,30.5,16.2,62.6,16.2,95l0,0c0,32.4-5.4,64.5-16.2,95H2400v-190H1469.8z')
            path#P16(d='M2055,1485.1v-190h345v190H2055z')
            path#P17(d='M2055,1675.4v-190h345v190H2055z')
            path#P18(d='M2055,1865.7v-190h345v190H2055z')
            path#P19(d='M2055,2056v-190h345v190H2055z')
        g#bottom
            path#P21.own(d='M1866,2055h190v345h-190V2055z')
            path#P22.own(d='M1676,2055h190v345h-190V2055z')
            path#P23.own(d='M1485.7,2055h190v345h-190V2055z')
            path#P24.own(d='M1295.4,2055h190v345h-190V2055z')
            path#P25.own(d='M1200,1486L1200,1486c-32.4,0-64.5-5.4-95-16.2V2400h190v-930.2C1264.5,1480.6,1232.4,1486,1200,1486z')
            path#P26.own(d='M914.9,2055h190v345h-190V2055z')
            path#P27.own(d='M724.6,2055h190v345h-190V2055z')
            path#P28.own(d='M534.3,2055h190v345h-190V2055z')
            path#P29.own(d='M344,2055h190v345H344V2055z')
            path#P21(d='M1866,2055h190v345h-190V2055z')
            path#P22(d='M1676,2055h190v345h-190V2055z')
            path#P23(d='M1485.7,2055h190v345h-190V2055z')
            path#P24(d='M1295.4,2055h190v345h-190V2055z')
            path#P25(d='M1200,1486L1200,1486c-32.4,0-64.5-5.4-95-16.2V2400h190v-930.2C1264.5,1480.6,1232.4,1486,1200,1486z')
            path#P26(d='M914.9,2055h190v345h-190V2055z')
            path#P27(d='M724.6,2055h190v345h-190V2055z')
            path#P28(d='M534.3,2055h190v345h-190V2055z')
            path#P29(d='M344,2055h190v345H344V2055z')
        g#left
            path#P31.own(d='M0,2056v-190h345v190H0z')
            path#P32.own(d='M0,1865.7v-190h345v190H0z')
            path#P33.own(d='M0,1675.4v-190h345v190H0z')
            path#P34.own(d='M0,1485.1v-190h345v190H0z')
            path#P35.own(d='M914,1200L914,1200c0-32.4,5.4-64.5,16.2-95H0v190h930.2C919.4,1264.5,914,1232.4,914,1200z')
            path#P36.own(d='M0,1104.6v-190h345v190H0z')
            path#P37.own(d='M0,914.3v-190h345v190H0z')
            path#P38.own(d='M0,724V534h345v190H0z')
            path#P39.own(d='M0,534V344h345v190H0z')
            path#P31(d='M0,2056v-190h345v190H0z')
            path#P32(d='M0,1865.7v-190h345v190H0z')
            path#P33(d='M0,1675.4v-190h345v190H0z')
            path#P34(d='M0,1485.1v-190h345v190H0z')
            path#P35(d='M914,1200L914,1200c0-32.4,5.4-64.5,16.2-95H0v190h930.2C919.4,1264.5,914,1232.4,914,1200z')
            path#P36(d='M0,1104.6v-190h345v190H0z')
            path#P37(d='M0,914.3v-190h345v190H0z')
            path#P38(d='M0,724V534h345v190H0z')
            path#P39(d='M0,534V344h345v190H0z')
        g#center
            path#C1(d='M1105,930.2V344.9H345l652.8,652.8C1028,967.5,1064.7,944.4,1105,930.2z')
            path#C2(d='M1402.2,997.8L2055,345h-760v585.2C1335.3,944.4,1372,967.5,1402.2,997.8z')
            path#C3(d='M1402.2,997.8c30.3,30.2,53.4,66.9,67.6,107.2H2055V345L1402.2,997.8z')
            path#C4(d='M1469.8,1295c-14.2,40.3-37.3,77-67.6,107.2L2055,2055v-760H1469.8z')
            path#C5(d='M1402.2,1402.2c-30.2,30.3-66.9,53.4-107.2,67.6V2055h760L1402.2,1402.2z')
            path#C6(d='M997.7,1402.2L345,2055h760v-585.2C1064.6,1455.6,1028,1432.5,997.7,1402.2z')
            path#C7(d='M930.2,1295H345v760l652.7-652.8C967.5,1372,944.4,1335.3,930.2,1295z')
            path#C8(d='M997.8,997.7L345,344.9v760h585.2C944.4,1064.6,967.5,1028,997.8,997.7z')
            path#C0(d='M1200,914L1200,914c-158,0-286,128-286,286l0,0c0,158,128,286,286,286l0,0c158,0,286-128,286-286l0,0C1486,1042.1,1358,914,1200,914z')
        g#corner
            path#P40(d='M345,345H0V0h345V345z')
            path#P10(d='M2400,345h-345V0h345V345z')
            path#P20(d='M2055,2400v-345h345v345H2055z')
            path#P30(d='M0,2400v-345h345v345H0z')

</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['theme']),
        imgPath() { return this.theme === 'v1' ? 'img/svg-v1/' : 'img/svg/' }
    },
}
</script>

<style lang='sass' scoped>
.board-module
    outline: 0.45rem solid lighten($cnw-primary, 2.25%)
    border: 0.15rem solid $cnw-black
    border-radius: 0.001rem
    background-color: $cnw-black
    box-shadow: -0.8rem 0.8rem 0.2rem rgb(27 19 57 / 18%), -1.5rem 1.5em 3rem rgb(27 19 57 / 18%)
    width: 100%
    height: 100%
    z-index: 0
    svg
        overflow: visible
        z-index: 10
        path
            fill: #fafafa
            stroke-width: 15px
            stroke: $cnw-black
            transition: all ease 0.35s
            transform-origin: 50% 0%
            z-index: 20
            // &:hover
            //     opacity: 0.75 !important
        #P10
            fill: url(#p10)
        #P20
            fill: url(#p20)
        #P30
            fill: url(#p30)
        #P40
            fill: url(#p40)
        #C0
            fill: url(#c0)
        #C1
            fill: url(#c1)
        #C2
            fill: url(#c2)
        #C3
            fill: url(#c3)
        #C4
            fill: url(#c4)
        #C5
            fill: url(#c5)
        #C6
            fill: url(#c6)
        #C7
            fill: url(#c7)
        #C8
            fill: url(#c8)
        #P1
            fill: url(#p1)
            &.own
                fill: url(#own1)
        #P2
            fill: url(#p2)
        #P3
            fill: url(#p3)
            &.own
                fill: url(#own1)
        #P4
            fill: url(#p4)
            &.own
                fill: url(#own1)
        #P5
            fill: url(#p5)
        #P6
            fill: url(#p6)
            &.own
                fill: url(#own2)
        #P7
            fill: url(#p7)
            &.own
                fill: url(#own2)
        #P8
            fill: url(#p8)
            &.own
                fill: url(#own2)
        #P9
            fill: url(#p9)
            &.own
                fill: url(#own2)
        #P11
            fill: url(#p11)
            &.own
                fill: url(#own3)
        #P12
            fill: url(#p12)
            &.own
                fill: url(#own3)
        #P13
            fill: url(#p13)
            &.own
                fill: url(#own3)
        #P14
            fill: url(#p14)
            &.own
                fill: url(#own3)
        #P15
            fill: url(#p15)
        #P16
            fill: url(#p16)
            &.own
                fill: url(#own4)
        #P17
            fill: url(#p17)
            &.own
                fill: url(#own4)
        #P18
            fill: url(#p18)
            &.own
                fill: url(#own4)
        #P19
            fill: url(#p19)
            &.own
                fill: url(#own4)
        #P21
            fill: url(#p21)
            &.own
                fill: url(#own5)
        #P22
            fill: url(#p22)
            &.own
                fill: url(#own5)
        #P23
            fill: url(#p23)
            &.own
                fill: url(#own5)
        #P24
            fill: url(#p24)
            &.own
                fill: url(#own5)
        #P25
            fill: url(#p25)
        #P26
            fill: url(#p26)
            &.own
                fill: url(#own6)
        #P27
            fill: url(#p27)
            &.own
                fill: url(#own6)
        #P28
            fill: url(#p28)
            &.own
                fill: url(#own6)
        #P29
            fill: url(#p29)
            &.own
                fill: url(#own6)
        #P31
            fill: url(#p31)
            &.own
                fill: url(#own7)
        #P32
            fill: url(#p32)
            &.own
                fill: url(#own7)
        #P33
            fill: url(#p33)
            &.own
                fill: url(#own7)
        #P34
            fill: url(#p34)
            &.own
                fill: url(#own7)
        #P35
            fill: url(#p35)
        #P36
            fill: url(#p36)
            &.own
                fill: url(#own8)
        #P37
            fill: url(#p37)
            &.own
                fill: url(#own8)
        #P38
            fill: url(#p38)
            &.own
                fill: url(#own8)
        #P39
            fill: url(#p39)
            &.own
                fill: url(#own8)

// theme
#app.v1
    .board-module
        outline: 0.6rem solid $cnw-primary-v1
        background-color: $cnw-primary-v1
        border: 0
        border-radius: 0
        svg
            path
                stroke: $cnw-primary-v1
</style>
