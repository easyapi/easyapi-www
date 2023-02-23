<template>
  <div>
    <Header :screenWidth="screenWidth" />
    <slot />
    <Footer :screenWidth="screenWidth" />
  </div>
</template>
<script>

export default {
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
