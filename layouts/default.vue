<script setup lang="ts">
import { onMounted, ref } from 'vue'

const screenWidth = ref(null)

onMounted(() => {
  this.screenWidth = document.body.clientWidth
  window.onresize = () => {
    // 屏幕尺寸变化就重新赋值
    return (() => {
      this.screenWidth = document.body.clientWidth
    })()
  }
})
</script>

<template>
  <div>
    <Header :screen-width="screenWidth" />
    <slot />
    <Footer :screen-width="screenWidth" />
  </div>
</template>
