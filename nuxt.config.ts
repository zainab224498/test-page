export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  plugins: [
    '~/plugins/bootstrap.client.ts' 
  ],
  build: {
    transpile: ['bootstrap']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true 
        }
      }
    }
  },

  compatibilityDate: '2025-02-01'
})