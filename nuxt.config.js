export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DorivaTech',
    meta: [
      { charset: 'utf-8' },
      { hid: 'author', name: 'author', content: 'DorivaTech, Dorivaldo Valentim' },
      { hid: 'keywords', name: 'keywords', content: 'dorivatech' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DorivaTech',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'DorivaTech',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'DorivaTech',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.APP_URL
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.APP_URL}/favicon.ico`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.APP_URL}/favicon.ico`,
      },
      {
        property: 'og:locale',
        content: 'pt_AO'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-animejs'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-AO'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    app: {
      name: process.env.APP_NAME
    }
  }
}
