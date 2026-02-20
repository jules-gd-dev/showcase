<template>
  <div class="selection:bg-amber-500 selection:text-black">
    <main>
      <!-- IMMERSIVE CONTACT HERO -->
      <section
        class="min-h-[100svh] flex flex-col justify-center relative overflow-hidden bg-white pt-20"
      >
        <!-- Background decorative text -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none"
        >
          <div class="text-[30vw] font-black leading-none uppercase">
            Contact
          </div>
        </div>

        <div
          class="container mx-auto px-6 relative z-10 w-full md:-translate-y-16"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div class="lg:col-span-7 space-y-12 text-center md:text-left">
              <div class="space-y-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-600 block anim-fade-up"
                  >Get in touch</span
                >
                <h1
                  class="text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase anim-reveal-index"
                >
                  Let's <br />
                  <span class="italic font-light opacity-20 text-black"
                    >Talk.</span
                  >
                </h1>
              </div>

              <p
                class="text-xl md:text-3xl font-light leading-relaxed opacity-60 max-w-xl anim-fade-up"
                style="animation-delay: 0.4s"
              >
                Une idée ? Un projet ? Ou simplement envie de discuter technique
                ? Je suis à votre écoute.
              </p>

              <div class="pt-8 anim-fade-up" style="animation-delay: 0.6s">
                <NuxtLink
                  to="/"
                  class="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
                >
                  <div
                    class="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:-translate-x-2 transition-transform duration-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </div>
                  Retour à l'accueil
                </NuxtLink>
              </div>
            </div>

            <div
              class="lg:col-span-5 anim-fade-up"
              style="animation-delay: 0.8s"
            >
              <div
                class="bg-black text-white p-10 md:p-16 rounded-[40px] md:rounded-[60px] shadow-2xl relative overflow-hidden group"
              >
                <!-- Internal Glow -->
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none"
                ></div>

                <div class="relative z-10 space-y-12">
                  <div class="space-y-8">
                    <div>
                      <span
                        class="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 block mb-4"
                        >Direct Email</span
                      >
                      <a
                        href="mailto:jules.gaydonat@gmail.com"
                        class="text-xl md:text-2xl font-bold tracking-tight hover:text-amber-500 transition-colors break-all"
                      >
                        jules.gaydonat@gmail.com
                      </a>
                    </div>

                    <div class="h-px w-full bg-white/10"></div>

                    <div>
                      <span
                        class="text-[10px] font-bold uppercase tracking-widest text-amber-500/60 block mb-4"
                        >Location</span
                      >
                      <p class="text-xl md:text-2xl font-bold tracking-tight">
                        Vannes, FR
                      </p>
                      <p class="text-sm opacity-40 mt-1 font-medium italic">
                        Full-remote available
                      </p>
                    </div>
                  </div>

                  <div class="pt-4">
                    <div class="flex flex-wrap gap-6">
                      <a
                        href="https://github.com/jules-gd-dev/"
                        target="_blank"
                        class="text-xs font-bold uppercase tracking-widest hover:text-amber-500 transition-colors"
                        >GitHub</a
                      >
                      <a
                        href="https://fr.linkedin.com/in/jules-gay-donat-a44a37372"
                        target="_blank"
                        class="text-xs font-bold uppercase tracking-widest hover:text-amber-500 transition-colors"
                        >LinkedIn</a
                      >
                      <a
                        href="https://www.instagram.com/jul.esgd"
                        target="_blank"
                        class="text-xs font-bold uppercase tracking-widest hover:text-amber-500 transition-colors"
                        >Instagram</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.anim-reveal-index {
  animation: revealIndex 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes revealIndex {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-fade-up {
  opacity: 0;
  animation: fadeUpIndex 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUpIndex {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
