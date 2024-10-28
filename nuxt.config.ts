import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const lifecycle = process.env.npm_lifecycle_event

// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          src: 'https://map.qq.com/api/js?v=2.exp&key=RGWBZ-4LICB-C3VU3-NH2T5-PWBHJ-W7FWQ',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],

  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
  },

  hooks: {
    'pages:extend': function (routes) {
      routes.push({
        path: '/home',
        name: 'home',
        file: '~/pages/index.vue',
      })
    },
  },

  css: [
    '~/assets/scss/element.scss',
    '~/assets/scss/banner.scss',
    '~/assets/scss/base.scss',
    '~/assets/scss/function.scss',
  ],
  components: true,

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')],
      }),
    ],
    build: {
      chunkSizeWarningLimit: 4096,
      rollupOptions: {
        output: {},
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables.scss";',
        },
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      serviceUrl: process.env.NUXT_PUBLIC_SERVICE_URL,
    },
  },
})
