// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],

  css: ['~/assets/css/main.css'],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  ui: {
    theme: {
      colors: [
        'tertiary',
      ]
    }
  }
})