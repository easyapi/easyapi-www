import svgIcon from '@/components/SvgIcon.vue'
import 'virtual:svg-icons-register'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('svg-icon', svgIcon)
})
