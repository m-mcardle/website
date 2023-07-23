// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-icon'
  ],
  css: [
    '~/assets/fonts/inter.css',
    '~/assets/css/global.css',
  ],
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
})
