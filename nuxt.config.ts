// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // $production: {
  //   routeRules: {
  //     '/**': {
  //       isr:true
  //     }
  //   }
  // },
  // $development:{

  // // },
  modules : [
  '@nuxthub/core',
  'nuxt-primevue', "@nuxthub/core"],
  
  primevue:{
    usePrimeVue:true,
    cssLayerOrder: 'reset,primevue',
    components : {
      prefix : 'Prime',
      exclude: [],
    }
  },
  css: ['primevue/resources/themes/aura-dark-indigo/theme.css'],
  vite:{
    vue:{
      customElement: true
    },
    vueJsx:{
      mergeProps: true
    }
  },
});