import webpack from 'webpack'

export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'nspyg starter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.6' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // css: [],
  styleResources: {
    sass: ['./assets/sass/index.sass'],
},

  plugins: [],

  // Auto import
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/style-resources',
  ],
  build: {
    postcss: {
        preset: {
            autoprefixer: {
                grid: true,
            },
        },
    },
    extend(config) {
        config.module.rules.push({
            test: /\.ya?ml$/,
            type: "json",
            use: "yaml-loader",
        }, {
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            loader: "file-loader",
            options: {
                name: "[path][name].[ext]",
                esModule: false,
            },
        });
    },
},
    router: {
        base: process.env.NODE_ENV === 'production' ? '/' : '/',
    },
    generate: {
        dir: 'dist',
    },
    server: {
        host: '0.0.0.0', // default: localhost
    },
}
