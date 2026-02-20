<template>
  <div class="bg-white text-black font-sans min-h-screen relative selection:bg-black selection:text-white overflow-x-hidden">
    <!-- NOISE TEXTURE -->
    <div class="noise-overlay"></div>

    <!-- NAVIGATION (Header) -->
    <nav v-if="!hideGlobalUI" class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md h-20 flex items-center border-b border-black/[0.03]">
      <div class="container mx-auto px-6 flex justify-center items-center relative h-full">
        <NuxtLink to="/" class="font-bold text-sm md:text-xl tracking-tighter whitespace-nowrap uppercase hover:opacity-60 transition-opacity text-black">
          Jules <span class="font-light opacity-40 tracking-[0.2em] ml-1">GAY--DONAT</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- CONTENT -->
    <div :class="{ 'pt-20': !hideGlobalUI }">
      <NuxtPage />
    </div>

    <!-- FOOTER -->
    <footer v-if="!hideGlobalUI" class="py-20 text-center space-y-12 bg-white border-t border-black/[0.03]">
      <div class="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
        <NuxtLink to="/about" class="hover:text-amber-600 transition-colors text-black">À propos</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-amber-600 transition-colors text-black">Contact</NuxtLink>
        <a href="https://github.com/jules-gd-dev/" target="_blank" class="hover:text-amber-600 transition-colors text-black">GitHub</a>
        <a href="https://fr.linkedin.com/in/jules-gay-donat-a44a37372" target="_blank" class="hover:text-amber-600 transition-colors text-black">LinkedIn</a>
        <a href="https://www.instagram.com/jul.esgd" target="_blank" class="hover:text-amber-600 transition-colors text-black">Instagram</a>
        <a href="mailto:jules.gaydonat@gmail.com" class="hover:text-amber-600 transition-colors text-black">Email</a>
      </div>
      <div class="container mx-auto px-6 h-px bg-black/[0.03] max-w-xs"></div>
      <div class="space-y-4 text-center">
        <div class="font-bold text-lg tracking-tighter uppercase opacity-20 italic text-black">Jules GAY--DONAT</div>
        <p class="opacity-20 text-[9px] font-bold uppercase tracking-[0.4em] text-black">© 2026 — Crafted with precision</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from '#app';

const route = useRoute();

const hideGlobalUI = computed(() => {
  return route.meta.hideHeader === true;
});

onMounted(() => {
  // Nuxt est prêt, on lève le rideau
  if (process.client) {
    const loader = document.getElementById('server-side-loader');
    
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = '0';
        document.documentElement.classList.add('loaded');
        setTimeout(() => {
          loader.remove();
        }, 600);
      }
    }, 1000);
  }
});
</script>

<style>
.noise-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 100; opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
</style>
