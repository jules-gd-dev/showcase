// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "fr" },
      title: "Jules Case — Creative Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Création de sites web haute performance & sur-mesure.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  vite: {
    server: {
      allowedHosts: ["lo-app.tytarif.com"],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Playfair Display": [400, 700],
      Inter: [400, 700, 900],
      Anton: [400],
      "Libre Baskerville": [400],
      "Courier Prime": [400],
      "Roboto Mono": [400],
    },
  },
});
