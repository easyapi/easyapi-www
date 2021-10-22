module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '{{escape description }}'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: []
  },
  css: [
    '@/assets/scss/index.scss'
  ],
  plugins: ['@/plugins/axios'],
  /*
  ** Customize the progress bar color
  */
  modules: [
    '@nuxtjs/axios'
  ],
  loading: {
    color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
    },
    maxChunkSize: 300000, // 单个包最大尺寸
    extractCSS: true // 单独提取CSS
  },
  server: {
    port: 3000
  }
}