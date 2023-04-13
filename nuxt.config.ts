// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
    SALT: process.env.SALT,
  },
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/datepicker.min.js",
        },
      ],
    },
  },
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
});
