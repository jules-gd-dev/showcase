<template>
  <div class="selection:bg-amber-500 selection:text-black">
    <main>
      <section
        class="min-h-[100svh] flex flex-col justify-center relative overflow-hidden bg-white pt-20"
      >
        <!-- Background decorative text -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none"
        >
          <div class="text-[30vw] font-black leading-none uppercase text-black">
            Story
          </div>
        </div>

        <div
          class="container mx-auto px-6 relative z-10 w-full md:-translate-y-16"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div class="lg:col-span-7 space-y-12 text-left">
              <div class="space-y-4">
                <span
                  class="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-600 block anim-fade-up"
                  >Personal Story</span
                >
                <h1
                  class="text-7xl md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase anim-reveal-index"
                >
                  Young <br />
                  <span class="italic font-light opacity-20 text-black"
                    >Vision.</span
                  >
                </h1>
              </div>

              <div class="space-y-8 anim-fade-up" style="animation-delay: 0.4s">
                <p class="text-2xl md:text-4xl font-light leading-tight">
                  Passionné par le code et le design, j'ai aujourd'hui
                  <span
                    class="font-bold text-black border-b-2 border-amber-500/30"
                    >15 ans</span
                  >.
                </p>
                <p
                  class="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl"
                >
                  Je me concentre sur la création d'interfaces fluides et
                  d'architectures web modernes. Mon approche est simple :
                  transformer des concepts complexes en expériences numériques
                  claires, rapides et esthétiques.
                </p>

                <div class="flex flex-wrap gap-8 items-center pt-8">
                  <a
                    href="/"
                    class="text-xs font-bold uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity flex items-center gap-2"
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
                    Retour à l'accueil
                  </a>
                  <a
                    href="/contact"
                    class="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
                  >
                    Me contacter
                    <div
                      class="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-500"
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="lg:col-span-5 anim-fade-up"
              style="animation-delay: 0.6s"
            >
              <div class="space-y-12">
                <div
                  class="bg-[#F9F9F9] p-8 md:p-12 rounded-[40px] border border-black/[0.03] shadow-sm"
                >
                  <h3
                    class="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-8"
                  >
                    Stack & Expertise
                  </h3>
                  <ul
                    class="space-y-5 text-sm font-bold uppercase tracking-[0.2em] text-black"
                  >
                    <li class="flex items-center gap-4">
                      <span class="w-2 h-2 bg-amber-500 rounded-full"></span>
                      Nuxt.js / Vue.js
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="w-2 h-2 bg-black rounded-full"></span>
                      Tailwind CSS
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="w-2 h-2 bg-black rounded-full"></span>
                      TypeScript
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="w-2 h-2 bg-black rounded-full"></span> Stripe
                      API
                    </li>
                    <li class="flex items-center gap-4">
                      <span class="w-2 h-2 bg-black rounded-full"></span> UI /
                      UX Design
                    </li>
                  </ul>
                </div>
                <div
                  class="px-8 text-gray-400 text-sm leading-relaxed border-l-2 border-amber-500/20 py-2"
                >
                  Je développe des solutions concrètes pour démontrer mon
                  savoir-faire technique et créatif.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

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
</style>
