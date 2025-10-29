import colors from 'vuetify/es5/util/colors'
export default {

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - iRai',
        title: 'ระบบสมัครสหกิจ',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Sarabun"
            }


        ]
    },
      buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
    css: ['@/assets/css/main.css'],
    vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          background: colors.grey.lighten4,
          primary: '#58A144',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
}