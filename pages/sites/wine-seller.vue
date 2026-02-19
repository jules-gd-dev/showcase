<template>
  <div
    class="bg-[#0F0F0F] text-[#E5E5E5] font-sans min-h-screen selection:bg-[#D4AF37] selection:text-black"
  >
    <!-- NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center relative"
      >
        <div class="flex-1">
          <a
            href="/"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-[#D4AF37] transition-colors flex items-center gap-2"
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
            <span class="hidden sm:inline">Galerie</span>
          </a>
        </div>
        <div
          class="absolute left-1/2 -translate-x-1/2 font-serif text-lg md:text-4xl font-bold tracking-tighter text-[#D4AF37] whitespace-nowrap px-2"
        >
          LE CÉPAGE NOBLE
        </div>
        <div class="flex-1 flex justify-end gap-10">
          <button
            @click="scrollTo('contact')"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/40 px-3 md:px-6 py-2 rounded hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        class="relative h-[100svh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
      >
        <div class="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2000"
            class="w-full h-full object-cover opacity-40 scale-105"
            alt="Vignoble"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0F0F0F]"
          ></div>
        </div>
        <div class="relative z-10 text-center px-6 space-y-6 pt-12 md:pt-0">
          <h1
            class="font-serif text-5xl md:text-[10rem] font-bold leading-none tracking-tighter text-white anim-reveal"
          >
            L'Âme du <br /><span class="text-[#D4AF37] italic">Terroir</span>
          </h1>
          <p
            class="text-lg md:text-2xl font-light max-w-2xl mx-auto opacity-70 tracking-wide anim-fade-in"
          >
            Une sélection rigoureuse de vins d'exception, issus des plus grands
            domaines et de vignerons passionnés.
          </p>
        </div>
        <div
          class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
        >
          <span class="text-[9px] uppercase tracking-[0.5em]">Explorer</span>
          <div
            class="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"
          ></div>
        </div>
      </section>

      <!-- The Cellar Experience -->
      <section id="cellar" class="py-32 md:py-56 bg-[#0F0F0F]">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div class="space-y-12">
              <span
                class="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold"
                >L'Art de la Sélection</span
              >
              <h2
                class="font-serif text-5xl md:text-7xl font-bold leading-tight text-white"
              >
                Plus qu'une cave, <br />une collection.
              </h2>
              <p class="text-xl text-gray-400 leading-relaxed font-light">
                Depuis 1985, Le Cépage Noble déniche des flacons rares et des
                pépites oubliées. Notre métier est une quête perpétuelle de
                l'équilibre parfait entre tradition et audace.
              </p>

              <div class="grid grid-cols-2 gap-12 pt-8">
                <div class="space-y-2">
                  <span class="text-3xl font-serif text-[#D4AF37] block"
                    >1200+</span
                  >
                  <span class="text-[10px] uppercase tracking-widest opacity-50"
                    >Références</span
                  >
                </div>
                <div class="space-y-2">
                  <span class="text-3xl font-serif text-[#D4AF37] block"
                    >25</span
                  >
                  <span class="text-[10px] uppercase tracking-widest opacity-50"
                    >Régions</span
                  >
                </div>
              </div>
            </div>

            <div class="relative">
              <div
                class="aspect-[4/5] bg-[#1A1A1A] rounded-lg overflow-hidden border border-white/10 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000"
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                  alt="Bouteilles"
                />
              </div>
              <div
                class="absolute -top-10 -right-10 w-64 h-64 bg-[#D4AF37] p-1 flex items-center justify-center rounded-sm hidden md:flex"
              >
                <div
                  class="w-full h-full border border-black/10 flex flex-col items-center justify-center text-black text-center p-6"
                >
                  <span class="font-serif text-2xl font-bold italic mb-2"
                    >Grand Cru</span
                  >
                  <p class="text-[10px] uppercase font-bold tracking-widest">
                    Dégustation privée sur rendez-vous
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Regions -->
      <section class="py-32 bg-[#141414] border-y border-white/5">
        <div class="container mx-auto px-6">
          <div class="flex flex-wrap gap-20 justify-center">
            <div
              v-for="region in regions"
              :key="region"
              class="group cursor-default text-center"
            >
              <span
                class="font-serif text-4xl md:text-6xl text-white/20 group-hover:text-[#D4AF37] transition-all duration-500 italic block"
                >{{ region }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Contact & Visit -->
      <section
        id="contact"
        class="bg-black border-t border-white/5 relative overflow-hidden"
      >
        <div class="flex flex-col lg:flex-row min-h-[600px]">
          <!-- Left Column: Text -->
          <div
            class="w-full lg:w-1/2 py-32 md:py-48 px-6 md:px-16 flex flex-col justify-center bg-black"
          >
            <div class="max-w-xl mx-auto lg:ml-auto lg:mr-0 space-y-20">
              <div class="space-y-8">
                <h2
                  class="font-serif text-6xl md:text-8xl font-bold text-white tracking-tighter"
                >
                  Nous Rendre <br /><span class="text-[#D4AF37]">Visite.</span>
                </h2>
                <p
                  class="text-xl md:text-2xl font-light text-gray-400 leading-relaxed"
                >
                  Venez partager une émotion liquide au cœur de notre cave
                  historique.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                <div class="space-y-4">
                  <h4
                    class="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold"
                  >
                    Lieu
                  </h4>
                  <p class="text-xl">
                    15 Avenue des Grands Vins,<br />33000 Bordeaux
                  </p>
                </div>
                <div class="space-y-4">
                  <h4
                    class="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold"
                  >
                    Horaires
                  </h4>
                  <p class="text-xl leading-snug">
                    Lun - Sam : 10h — 20h<br />Dégustations : Jeu - Sam
                  </p>
                </div>
                <div class="space-y-6 md:col-span-2">
                  <h4
                    class="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold"
                  >
                    Contact
                  </h4>
                  <div class="space-y-1">
                    <p class="text-2xl font-bold">01 23 45 67 89</p>
                    <p class="text-lg opacity-60">jules.gaydonat@gmail.com</p>
                  </div>
                  <div class="flex gap-4 pt-2">
                    <a
                      href="#"
                      class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-bold"
                      >IG</a
                    >
                    <a
                      href="#"
                      class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-bold"
                      >FB</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1000"
              class="absolute inset-0 w-full h-full object-cover grayscale opacity-40 lg:opacity-70"
              alt="Cave"
            />
            <!-- Subtle gradient to blend with left side on mobile -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden"
            ></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 border-t border-white/5 bg-black text-center">
      <p
        class="text-[9px] uppercase tracking-[0.4em] text-gray-600 mb-4 italic"
      >
        L'abus d'alcool est dangereux pour la santé, à consommer avec
        modération.
      </p>
      <p class="text-[10px] uppercase tracking-widest text-gray-500">
        &copy; 2026 Le Cépage Noble — Conçu par Jules Case
      </p>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

const regions = [
  "Bordeaux",
  "Bourgogne",
  "Champagne",
  "Vallée du Rhône",
  "Loire",
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}

.anim-reveal {
  animation: reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-fade-in {
  opacity: 0;
  animation: fadeIn 2s ease-out 0.5s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
</style>
