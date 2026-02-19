<template>
  <div>
    <main>
      <!-- REFINED HERO (More weight & Drama) -->
      <section
        class="min-h-[90svh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-white"
      >
        <!-- Subtle decorative element -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0.02)_0%,_transparent_60%)] pointer-events-none"
        ></div>

        <div class="relative z-10 space-y-16 md:space-y-24 mt-20">
          <div class="space-y-6">
            <span
              class="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 block anim-fade-up"
              >Independent Developer</span
            >
            <h1
              class="text-[15vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter uppercase anim-reveal"
            >
              Creative<br /><span
                class="italic font-light opacity-20 text-black"
                >Developer</span
              >
            </h1>
          </div>

          <div
            class="flex flex-col items-center space-y-10 anim-fade-up"
            style="animation-delay: 0.4s"
          >
            <p
              class="text-lg md:text-2xl font-light opacity-50 max-w-xl leading-relaxed"
            >
              Conception d'identités numériques et
              <br class="hidden md:block" />
              développement d'interfaces haute fidélité.
            </p>

            <div class="flex flex-wrap justify-center gap-4 md:gap-8 pt-4">
              <div
                v-for="skill in ['Nuxt', 'Tailwind', 'Stripe', 'UX Design']"
                :key="skill"
                class="text-[9px] font-bold uppercase tracking-widest border border-black/5 py-2 px-5 rounded-full opacity-40"
              >
                {{ skill }}
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll visual indicator -->
        <div
          class="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 anim-fade-up"
          style="animation-delay: 1s"
        >
          <div
            class="w-px h-16 bg-gradient-to-b from-black to-transparent"
          ></div>
        </div>
      </section>

      <!-- PROJECTS -->
      <section id="work" class="py-32 bg-[#FBFBFB]">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-40">
            <div
              v-for="(site, i) in sites"
              :key="site.id"
              class="group cursor-pointer"
              :class="i % 2 !== 0 ? 'lg:translate-y-40' : ''"
              @click="navigateTo(site.url)"
            >
              <div
                class="relative overflow-hidden rounded-[40px] bg-white shadow-sm group-hover:shadow-2xl transition-all duration-1000 border border-black/[0.03]"
              >
                <div class="aspect-[16/10] overflow-hidden">
                  <img
                    :src="site.imageUrl"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    :alt="site.title"
                  />
                </div>
                <div
                  class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <span
                    class="px-8 py-3 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-widest shadow-xl"
                    >Explorer la démo</span
                  >
                </div>
              </div>

              <div class="mt-12 space-y-4 px-4 text-left">
                <div class="flex items-center gap-4">
                  <span
                    class="text-[10px] font-bold uppercase tracking-widest opacity-20"
                    >{{ site.category }}</span
                  >
                  <div class="h-px w-8 bg-black/10"></div>
                </div>
                <h3 class="text-4xl md:text-6xl font-bold tracking-tighter">
                  {{ site.title }}
                </h3>
                <p class="text-lg opacity-40 leading-relaxed max-w-md">
                  {{ site.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FLOATING CTA CARD -->
      <section class="py-24 md:py-48 bg-white">
        <div class="container mx-auto px-4 md:px-6">
          <div
            class="bg-black text-white rounded-[40px] md:rounded-[80px] p-10 md:p-32 relative overflow-hidden flex flex-col items-center text-center"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"
            ></div>

            <div class="relative z-10 space-y-10 md:space-y-16 w-full">
              <div class="space-y-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/60 block font-sans"
                  >Ready to start?</span
                >
                <h2
                  class="text-4xl md:text-[7vw] font-bold tracking-tighter leading-none uppercase italic"
                >
                  Un projet <br />
                  <span class="opacity-30">en tête ?</span>
                </h2>
              </div>

              <div class="h-px w-16 md:w-24 bg-white/20 mx-auto"></div>

              <div class="space-y-8">
                <a
                  href="mailto:jules.gaydonat@gmail.com"
                  class="group block px-4"
                >
                  <span
                    class="text-[5.5vw] sm:text-2xl md:text-5xl font-bold tracking-tighter block transition-all duration-500 group-hover:text-amber-500 whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    jules.gaydonat@gmail.com
                  </span>
                </a>
                <a
                  href="mailto:jules.gaydonat@gmail.com"
                  class="inline-block text-[10px] font-bold uppercase tracking-widest py-4 px-10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-xl"
                >
                  Me contacter
                </a>
              </div>
            </div>

            <div
              class="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full opacity-30 text-[8px] md:text-[9px] font-bold uppercase tracking-widest border-t border-white/10 pt-10 md:pt-12"
            >
              <p>Vannes, France</p>
              <p>Available for 2026</p>
              <p>Full-remote compatible</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navigateTo = (url) => {
  window.location.href = url;
};

const sites = ref([
  {
    id: "bakery",
    title: "Le Pain Doré",
    description: "L'excellence boulangère en ligne.",
    url: "/sites/bakery",
    category: "E-commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000",
  },
  {
    id: "wine-seller",
    title: "Le Cepage Noble",
    description: "Prestige et héritage viticole.",
    url: "/sites/wine-seller",
    category: "Vitrine Luxe",
    imageUrl:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000",
  },
  {
    id: "sports-club",
    title: "Energie Vitale",
    description: "Performance brute et discipline.",
    url: "/sites/sports-club",
    category: "High-Impact",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
  },
  {
    id: "florist",
    title: "Aux Bouquets du Bonheur",
    description: "Poésie florale minimaliste.",
    url: "/sites/florist",
    category: "Art floral",
    imageUrl:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000",
  },
  {
    id: "cafe",
    title: "Le Grain Torréfié",
    description: "L'art de la pause urbaine.",
    url: "/sites/cafe",
    category: "Éditorial",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
  },
  {
    id: "association",
    title: "Entraide & Avenir",
    description: "L'humain au cœur du lien social.",
    url: "/sites/association",
    category: "Solidaire",
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000",
  },
]);
</script>

<style scoped>
.anim-reveal {
  opacity: 0;
  transform: translate3d(0, 40px, 0);
  animation: reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes reveal {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.anim-fade-up {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  animation: reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
}
</style>
