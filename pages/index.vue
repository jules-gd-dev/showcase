<template>
  <div class="relative">
    <main>
      <!-- HERO -->
      <section class="min-h-[90svh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-white">
        <div class="relative z-10 space-y-16 md:space-y-24 mt-10">
          <div class="space-y-6">
            <span class="hero-sub text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 block">Independent Developer — Jules Gay-Donat</span>
            <h1 class="hero-title text-[15vw] md:text-[13vw] font-black leading-[0.75] tracking-tighter uppercase select-none text-black">
              Creative<br><span class="italic font-light opacity-20 text-black">Developer</span>
            </h1>
          </div>

          <div class="hero-desc flex flex-col items-center space-y-10">
            <p class="text-lg md:text-2xl font-light opacity-50 max-w-xl leading-relaxed text-black">
              Jules, <span class="font-bold text-black opacity-100">concepteur expert</span>, transforme vos <span class="font-bold text-black opacity-100">expériences numériques</span> en interfaces haute fidélité.
            </p>
            
            <div class="flex flex-wrap justify-center gap-3 md:gap-6">
              <div v-for="skill in ['Nuxt', 'Tailwind', 'Stripe', 'GSAP']" :key="skill" class="text-[9px] font-bold uppercase tracking-widest border border-black/10 py-2 px-5 rounded-full opacity-40">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>

        <div class="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
          <div class="w-px h-20 bg-gradient-to-b from-black to-transparent"></div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="work" class="py-32 bg-[#FBFBFB] relative z-10">
        <div class="container mx-auto px-6">
          <h2 class="text-sm font-bold uppercase tracking-[0.4em] opacity-20 mb-20 text-center">Portfolio & Travaux de Démo</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-40 md:gap-y-64">
            <div v-for="(site, i) in sites" :key="site.id" 
                 class="project-card group relative" 
                 :class="i % 2 !== 0 ? 'lg:translate-y-32' : ''">
              
              <NuxtLink :to="site.url" :title="`Voir la démonstration : ${site.title}`" class="block space-y-10">
                <div class="relative overflow-hidden rounded-[40px] bg-white shadow-2xl transition-all duration-700 group-hover:shadow-3xl border border-black/[0.03]">
                  <div class="aspect-[16/10] overflow-hidden">
                    <img :src="site.imageUrl" class="project-img w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" :alt="`Aperçu du site ${site.title}`" width="1000" height="625" loading="lazy">
                  </div>
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none text-white font-bold uppercase text-[10px] tracking-widest">
                    Explorer la démo
                  </div>
                </div>
                <div class="space-y-4 px-4 text-left">
                  <div class="flex items-center gap-4">
                    <span class="text-[10px] font-bold uppercase tracking-widest opacity-30">{{ site.category }}</span>
                    <div class="h-px w-8 bg-black/10 group-hover:w-16 group-hover:bg-black transition-all duration-500"></div>
                  </div>
                  <h3 class="text-4xl md:text-7xl font-bold tracking-tighter text-black">{{ site.title }}</h3>
                  <p class="text-lg md:text-xl opacity-40 leading-relaxed max-w-md font-light text-black">{{ site.description }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 md:py-48 bg-white relative z-10 text-center flex flex-col items-center">
        <div class="container mx-auto px-4 md:px-6">
          <div class="bg-black text-white rounded-[40px] md:rounded-[80px] p-10 md:p-32 relative overflow-hidden flex flex-col items-center">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
            <div class="relative z-10 space-y-10 md:space-y-16 w-full flex flex-col items-center">
              <div class="space-y-4">
                <span class="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/60 block font-sans">Ready to start?</span>
                <h2 class="text-4xl md:text-[7vw] font-bold tracking-tighter leading-none uppercase italic text-white text-center">Un projet <br> <span class="opacity-30 text-white">en tête ?</span></h2>
              </div>
              <div class="h-px w-16 md:w-24 bg-white/20 mx-auto"></div>
              <div class="space-y-8 flex flex-col items-center">
                <a href="mailto:jules.gaydonat@gmail.com" title="Envoyer un email à Jules Gay-Donat" class="group block px-4">
                  <span class="text-[5.5vw] sm:text-2xl md:text-5xl font-bold tracking-tighter block transition-all duration-500 group-hover:text-amber-500 whitespace-nowrap overflow-hidden text-ellipsis text-white">jules.gaydonat@gmail.com</span>
                </a>
                <a href="mailto:jules.gaydonat@gmail.com" title="Prendre contact maintenant" class="inline-block text-[10px] font-bold uppercase tracking-widest py-4 px-10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-xl text-white">Me contacter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

useSeoMeta({
  title: 'Jules Gay-Donat — Portfolio & Showcase Créatif',
  ogTitle: 'Jules Gay-Donat — Creative Developer',
  description: 'Découvrez mes créations web : design UX/UI, développement Nuxt et solutions e-commerce Stripe innovantes.',
  ogDescription: 'Expertise en création de sites web haute performance.',
  ogImage: 'https://lo-app.tytarif.com/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// Microdonnées JSON-LD
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jules Gay-Donat",
        "jobTitle": "Concepteur d'expériences numériques",
        "url": "https://lo-app.tytarif.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vannes",
          "addressCountry": "FR"
        },
        "sameAs": [
          "https://www.linkedin.com/in/votre-profil",
          "https://github.com/votre-profil"
        ]
      })
    }
  ]
})

const sites = [
  { id: 'bakery', title: 'Le Pain Doré', description: "L'excellence boulangère en ligne.", url: '/sites/bakery', category: 'E-commerce', imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000' },
  { id: 'wine-seller', title: 'Le Cepage Noble', description: "Prestige et héritage viticole.", url: '/sites/wine-seller', category: 'Luxe', imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000' },
  { id: 'sports-club', title: 'Energie Vitale', description: "Performance brute et discipline.", url: '/sites/sports-club', category: 'Fitness', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000' },
  { id: 'florist', title: 'Aux Bouquets du Bonheur', description: "Poésie florale minimaliste.", url: '/sites/florist', category: 'Art floral', imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000' },
  { id: 'cafe', title: 'Le Grain Torréfié', description: "L'art de la pause urbaine.", url: '/sites/cafe', category: 'Éditorial', imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000' },
  { id: 'association', title: 'Entraide & Avenir', description: "L'humain au cœur du lien social.", url: '/sites/association', category: 'Social', imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000' },
];

onMounted(async () => {
  if (process.client) {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1.5, ease: "power4.out" });
    
    gsap.utils.toArray('.project-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%" },
        y: 40, opacity: 0, duration: 1, ease: "power2.out"
      });
    });
  }
});
</script>

<style scoped>
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
</style>
