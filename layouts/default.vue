<template>
  <div>
    <Header :screenWidth="screenWidth" />
    <nuxt />
    <Footer :screenWidth="screenWidth" />
  </div>
</template>
<script>
import Header from '../components/Header/index.vue'
import Footer from '../components/Footer/index.vue'

export default {
  components: {
    Header,
    Footer
  },
  data(){
    return{
      screenWidth: null,
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    window.onresize = () => {
      //屏幕尺寸变化就重新赋值
      return (() => {
        this.screenWidth = document.body.clientWidth
      })()
    }
  }
}
</script>
<style></style>
