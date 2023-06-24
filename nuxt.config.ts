// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  ssr: true,
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  }
})
