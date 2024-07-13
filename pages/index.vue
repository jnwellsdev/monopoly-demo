<template lang="pug">
#app
  MainScreen
</template>
<script>
import Vue from 'vue'
import VueSnip from 'vue-snip'
import moment from 'moment'
Vue.use(VueSnip)
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(value).format('l LT')
  }
})
export default {}
</script>
<style style='scss'>
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap');
@import url('https://use.typekit.net/wkk8qrx.css');
@import '../assets/sass/_global.scss';
/* @import '~/bootstrap/scss/bootstrap'; */
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  /* font-size: 10px; */
  /* background: black; */
}

body {
  /* background: black; */
  overflow-x: hidden;
}

#__layout {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
}

#app {
  user-select: none;
  position: relative;
  /* height: 780px;
  max-width: 1280px;
  margin: 0 auto; */
}
</style>