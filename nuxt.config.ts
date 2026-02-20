// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/showcase/',
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Jules GAY--DONAT | Expert Digital & Creative Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jules GAY--DONAT, concepteur expert à Vannes. Création de sites web haute performance, design UX/UI et intégrations Stripe sur-mesure.',
        },
        // OpenGraph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jules.tytarif.com' },
        { property: 'og:title', content: 'Jules GAY--DONAT | Expert Digital & Creative Developer' },
        {
          property: 'og:description',
          content:
            'Design d\'identités numériques et développement d\'interfaces haute fidélité.',
        },
        {
          property: 'og:image',
          content: 'https://jules.tytarif.com/og-image.jpg',
        },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jules GAY--DONAT | Expert Digital & Creative Developer' },
        {
          name: 'twitter:description',
          content: 'Concepteur d\'expériences numériques sur-mesure.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg?v=2' },
        { rel: 'canonical', href: 'https://jules.tytarif.com' },
      ],
      style: [
        {
          children: `
            #server-side-loader {
              position: fixed; inset: 0; z-index: 99999;
              background: white; display: flex; flex-direction: column;
              align-items: center; justify-content: center;
              font-family: sans-serif; transition: opacity 0.6s ease-out;
            }
            .l-c { text-align: center; }
            .l-t { font-weight: 900; font-size: 24px; letter-spacing: -0.05em; text-transform: uppercase; margin-bottom: 20px; color: black; }
            .l-t span { opacity: 0.4; font-weight: 300; }
            .l-b { width: 150px; height: 2px; background: rgba(0,0,0,0.05); position: relative; overflow: hidden; border-radius: 2px; margin: 0 auto; }
            .l-p { position: absolute; inset: 0; background: black; width: 100%; transform: scaleX(0); transform-origin: left; animation: lp 2s infinite ease-in-out; }
            @keyframes lp {
              0% { transform: scaleX(0); transform-origin: left; }
              50% { transform: scaleX(1); transform-origin: left; }
              51% { transform: transform-origin: right; }
              100% { transform: scaleX(0); transform-origin: right; }
            }
            #__nuxt { opacity: 0; transition: opacity 0.8s ease-in; }
            .loaded #__nuxt { opacity: 1; }
          `,
        },
      ],
      script: [
        {
          children: `
            (function() {
              const userAgent = window.navigator.userAgent.toLowerCase();
              const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
              if (isBot) { document.documentElement.classList.add('loaded'); return; }
              const loader = document.createElement('div');
              loader.id = 'server-side-loader';
              loader.innerHTML = '<div class="l-c"><div class="l-t">Jules <span>GAY--DONAT</span></div><div class="l-b"><div class="l-p"></div></div></div>';
              document.documentElement.appendChild(loader);
            })();
          `,
          type: 'text/javascript',
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jules GAY--DONAT",
            "url": "https://jules.tytarif.com",
            "jobTitle": "Creative Developer",
            "description": "Concepteur d'expériences numériques expert en Nuxt et design.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vannes",
              "addressCountry": "FR"
            },
            "sameAs": [
              "mailto:jules.gaydonat@gmail.com",
              "https://github.com/jules-gd-dev/",
              "https://fr.linkedin.com/in/jules-gay-donat-a44a37372",
              "https://www.instagram.com/jul.esgd"
            ]
          })
        }
      ],
    },
  },
  vite: {
    server: {
      allowedHosts: ['jules.tytarif.com'],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      'Playfair Display': [400, 700],
      'Inter': [400, 700, 900],
      'Anton': [400],
      'Libre Baskerville': [400],
      'Courier Prime': [400],
      'Roboto Mono': [400],
    },
  },
});
