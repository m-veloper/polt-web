export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Nuxt js UI Kit",
    title: "POLT | Pet-Owner-License-Test",
    htmlAttrs: {
      lang: "kr"
    },
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      { hid: 'gtm-script1', src: 'https://www.googletagmanager.com/gtag/js?id=G-8RDSXVYHQK', defer: true },
      {
        hid: 'gtm-script2',
        innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RDSXVYHQK');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "google-site-verification", content: "bhftwUN-sNJPCoVdDuFhLq-YPUCLkweKu3FVrdMwrXc"}
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000
  },
  // loading: '~/components/Loading.vue',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~plugins/ga.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    // '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
