<script setup lang="ts">
import { useHead } from 'unhead'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - EasyAPI发票控制台` : 'EasyAPI发票控制台'
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
