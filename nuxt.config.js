export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 3000,
    host: "0.0.0.0",
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Storipod Admin",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "“Transforming data into actionable insights.”",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/v-select.js", ssr: false },
    { src: "@/plugins/mavon-editor", ssr: false },
    { src: "~/plugins/apexcharts", ssr: false },
    '~/plugins/bootstrap-vue.client',
    '~/plugins/api-service.js',
    { src: '~/plugins/persistedState.client.js' },
    { src: '~/plugins/toastr.js', mode: 'client' },
    '~/plugins/axios.js'
    // { src: '@/plugins/vuex-persist', client: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/composition-api/module",
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // vendor: ["vue-apexchart"],
  },
  axios: {
    baseURL: 'https://api.develop.admin.storipod.app',
    // baseURL: 'https://ec29-197-210-84-25.ngrok-free.app/api/v1/',
    headers: {
      common: {
        // "X-API-KEY":"1fzkwjvxf6vp7Wp1OQ6kCzEX2QRWscpp",
        // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwODYzNzQ3LCJpYXQiOjE3MTA4MDM3NDcsImp0aSI6ImUwYjZkZjM5MDFiMDRhN2RiMDk4YmI1MjQ4NzU2NTkyIiwidXNlcl9pZCI6MzZ9.OxKWBrEr9B4sRZ-wmL5c4wA5YECEUAun4CUlbdG_Ca8`
      }
    }
  },
  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
};
