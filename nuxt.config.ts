// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // extends:['@nuxthub/core'],
  devtools: { enabled: false },
  modules : [
    '@nuxthub/core',
    'nuxt-primevue',
    // './server/modules/employee/module.ts',
    // './server/modules/libs/db.ts',
  ],
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
  hub: {
    database:true,
  },
  nitro: {
    experimental:{
      openAPI: true,
      // tasks : true
    }
  },
});