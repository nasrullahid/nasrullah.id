import { resolve } from 'path'

export default {
  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseURL: process.env.BASE_URL
  },
  loading: '~/components/Loading.vue',
  head: {
    title: 'Nasrullah.id',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/stroke-gap-icons.css" },
      { rel: "stylesheet", href: "/css/icofont.css" },
      { rel: "stylesheet", href: "/css/flaticon.css" },
      { rel: "stylesheet", href: "/css/Interest.css" },
      // { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      // { rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/css/lightslider.css" },
      // { rel: "stylesheet", href: "/css/jquery.mCustomScrollbar.css" },
      { rel: "stylesheet", href: "/css/preset.css" },
      { rel: "stylesheet", href: "/css/ignore_for_wp.css" },
      { rel: "stylesheet", href: "/css/theme.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/light.css" },
      { rel: 'favicon', href: '/images/favicon.png' }
    ]
  },
  router: {
    linkExactActiveClass: 'text-primary'
  },
  css: [],
  plugins: [],
  modules: ['@nuxtjs/axios'],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}