<template>
  <div
    class="bg-white text-black font-sans min-h-screen selection:bg-black selection:text-white relative overflow-x-hidden"
  >
    <!-- UNIFIED NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md h-20 flex items-center border-b border-black/[0.03]"
    >
      <div
        class="container mx-auto px-6 flex justify-center items-center relative h-full"
      >
        <a
          href="/"
          class="font-bold text-sm md:text-xl tracking-tighter whitespace-nowrap uppercase hover:opacity-60 transition-opacity"
        >
          Jules
          <span class="font-light opacity-40 tracking-[0.2em] ml-1"
            >Gay-Donat</span
          >
        </a>
      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <div class="relative pt-24 md:pt-32">
      <slot />
    </div>

    <!-- UNIFIED FOOTER -->
    <footer
      class="py-20 text-center space-y-12 bg-white border-t border-black/[0.03]"
    >
      <div
        class="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em]"
      >
        <a href="/about" class="hover:text-amber-600 transition-colors"
          >À propos</a
        >
        <a href="/contact" class="hover:text-amber-600 transition-colors"
          >Contact</a
        >
        <a
          href="mailto:jules.gaydonat@gmail.com"
          class="hover:text-amber-600 transition-colors"
          >Email</a
        >
      </div>
      <div class="container mx-auto px-6 h-px bg-black/[0.03] max-w-xs"></div>
      <div class="space-y-4">
        <div
          class="font-bold text-lg tracking-tighter uppercase opacity-20 italic"
        >
          Jules Gay-Donat
        </div>
        <p class="opacity-20 text-[9px] font-bold uppercase tracking-[0.4em]">
          &copy; 2026 — Crafted with precision
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
