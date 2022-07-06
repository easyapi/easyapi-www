<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header/index.vue'
import Footer from '../components/Footer/index.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    if ($nuxt.$route.path === '/') {
      if (Cookies.get('authenticationToken')) {
        window.location.href = 'https://team.easyapi.com/'
      }
    }
  }
}
</script>
<style></style>
