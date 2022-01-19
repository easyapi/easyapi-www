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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css '}
    ],
    script: []
  },
  css: [
    '@/assets/scss/index.scss',
    '@/assets/scss/element-variables.scss'
  ],
  plugins: [
    '@/plugins/axios',
    {src: '@/plugins/element-ui', ssr: true},
  ],
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
    transpile: [/^element-ui/],
    extend(config, ctx) {
    },
    maxChunkSize: 300000, // 单个包最大尺寸
    extractCSS: true // 单独提取CSS
  },
  server: {
    port: 3000
  },
  env: {
    baseUrl: 'https://api.easyapi.com',
    accountUrl: 'https://account-api.easyapi.com'
  }
}
