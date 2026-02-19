<template>
  <div
    class="bg-[#F9FBF7] text-[#1E3A2F] font-sans min-h-screen selection:bg-[#D4E4BC] overflow-x-hidden"
  >
    <!-- NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#1E3A2F]/5"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center relative"
      >
        <div class="flex-1">
          <a
            href="/"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2 text-[#4A6741]"
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
          class="absolute left-1/2 -translate-x-1/2 font-serif text-sm md:text-2xl font-light italic tracking-tight whitespace-nowrap px-2"
        >
          Aux Bouquets du Bonheur
        </div>
        <div class="flex-1 flex justify-end">
          <button
            @click="scrollTo('contact')"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-[#4A6741] text-white px-3 md:px-6 py-2 rounded-full hover:bg-[#1E3A2F] transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        class="relative h-[100svh] flex items-center justify-center overflow-hidden"
      >
        <div class="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000"
            class="w-full h-full object-cover scale-110 anim-slow-zoom"
            alt="Fleurs"
          />
          <div class="absolute inset-0 bg-black/30"></div>
        </div>
        <div class="relative z-10 text-center text-white px-6">
          <span
            class="block uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 anim-fade-up font-bold"
            >Artisan Fleuriste Paris</span
          >
          <h1
            class="font-serif text-5xl md:text-9xl font-light italic leading-[1.1] anim-fade-up-delay"
          >
            L'Art de <br class="md:hidden" />
            l'Éphémère
          </h1>
          <p
            class="mt-6 text-base md:text-xl font-light max-w-lg mx-auto anim-fade-up-delay-2 opacity-90 leading-relaxed"
          >
            Créations florales poétiques pour sublimer vos émotions et vos
            instants de vie.
          </p>
        </div>
        <div class="absolute bottom-10 left-0 w-full text-center z-20">
          <button
            @click="scrollTo('philosophy')"
            class="text-white/60 text-[10px] uppercase tracking-[0.3em] animate-bounce hover:text-white transition-colors cursor-pointer"
          >
            Faire défiler
          </button>
        </div>
      </section>

      <!-- Philosophie -->
      <section id="philosophy" class="py-20 md:py-48 bg-white overflow-hidden">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <div class="w-full lg:w-1/2 space-y-6 md:space-y-8">
              <h2
                class="font-serif text-4xl md:text-7xl font-light leading-tight"
              >
                Cultiver la poésie, <br /><span class="italic text-[#4A6741]"
                  >chaque jour.</span
                >
              </h2>
              <p
                class="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg"
              >
                Nous croyons que chaque fleur a une histoire à raconter. Nos
                bouquets sont composés avec des fleurs de saison, sélectionnées
                auprès de producteurs locaux respectueux du cycle de la nature.
              </p>
              <div class="pt-2">
                <div
                  @click="scrollTo('atelier')"
                  class="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    class="w-12 h-px bg-[#4A6741] group-hover:w-20 transition-all duration-500"
                  ></div>
                  <span
                    class="uppercase tracking-widest text-[10px] font-bold text-[#4A6741]"
                    >Notre engagement durable</span
                  >
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 relative">
              <div
                class="w-full h-[400px] md:h-[600px] rounded-t-full overflow-hidden border-[8px] md:border-[16px] border-[#F9FBF7]"
              >
                <img
                  src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1000"
                  class="w-full h-full object-cover"
                  alt="Atelier"
                />
              </div>
              <div
                class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#D4E4BC] px-6 py-3 rounded-full shadow-lg border border-white/50"
              >
                <span
                  class="font-serif italic text-sm md:text-lg text-[#1E3A2F] whitespace-nowrap"
                  >Fleurs fraîches de saison</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Collections -->
      <section id="collections" class="py-20 md:py-32 bg-[#F9FBF7]">
        <div
          class="container mx-auto px-6 mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <span
              class="uppercase tracking-widest text-[10px] font-bold text-[#4A6741] block mb-2"
              >Portfolio</span
            >
            <h2 class="font-serif text-4xl md:text-7xl font-light">
              Nos Collections
            </h2>
          </div>
          <p class="text-gray-500 text-sm max-w-xs md:text-right">
            Des compositions uniques pour tous vos événements ou pour le plaisir
            d'offrir.
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 container mx-auto px-6"
        >
          <div
            v-for="(col, i) in collections"
            :key="i"
            class="group space-y-4 md:space-y-6"
          >
            <div class="overflow-hidden rounded-2xl aspect-[3/4] relative">
              <img
                :src="col.image"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                :alt="col.title"
              />
              <div
                class="absolute inset-0 bg-[#1E3A2F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <button
                  @click="scrollTo('contact')"
                  class="text-white border border-white/40 px-6 py-2 rounded-full backdrop-blur-sm text-xs uppercase tracking-widest hover:bg-white hover:text-[#1E3A2F] transition-all"
                >
                  Découvrir
                </button>
              </div>
            </div>
            <div class="text-center">
              <h3 class="font-serif text-2xl md:text-3xl font-light italic">
                {{ col.title }}
              </h3>
              <p
                class="text-[10px] uppercase tracking-widest text-gray-400 mt-2"
              >
                {{ col.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- L'Atelier Story -->
      <section id="atelier" class="py-20 md:py-48 bg-[#1E3A2F] text-[#F9FBF7]">
        <div
          class="container mx-auto px-6 text-center max-w-4xl space-y-8 md:space-y-12"
        >
          <span
            class="text-[10px] uppercase tracking-[0.4em] opacity-60 font-bold"
            >L'Âme de la Maison</span
          >
          <h2 class="font-serif text-3xl md:text-7xl font-light leading-tight">
            "La fleur est le sourire de la terre."
          </h2>
          <p
            class="text-lg md:text-2xl font-light opacity-80 leading-relaxed italic max-w-2xl mx-auto"
          >
            Depuis 1992, notre atelier niché au cœur de Paris perpétue une
            vision de la fleuristerie comme un art vivant. Chaque bouquet est
            une peinture.
          </p>
          <div class="pt-6">
            <button
              @click="scrollTo('contact')"
              class="border border-[#F9FBF7]/30 px-8 md:px-12 py-4 rounded-full hover:bg-[#F9FBF7] hover:text-[#1E3A2F] transition-all font-bold uppercase text-[10px] tracking-widest"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="py-20 md:py-40 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
            <div class="space-y-10 md:space-y-16">
              <h2 class="font-serif text-5xl md:text-8xl font-light">
                Nous <br class="hidden md:block text-[#4A6741]" />
                contacter
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div class="space-y-3">
                  <h4
                    class="font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] text-[#4A6741]"
                  >
                    L'Atelier
                  </h4>
                  <p
                    class="text-base md:text-lg text-gray-600 leading-snug font-light"
                  >
                    42 Rue des Fleurs,<br />75006 Paris
                  </p>
                </div>
                <div class="space-y-3">
                  <h4
                    class="font-bold uppercase text-[9px] md:text-[10px] tracking-[0.2em] text-[#4A6741]"
                  >
                    Horaires
                  </h4>
                  <p
                    class="text-base md:text-lg text-gray-600 leading-snug font-light"
                  >
                    Mar - Sam : 10h - 19h<br />Dim : 10h - 13h
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-[#F9FBF7] p-8 md:p-16 rounded-3xl space-y-6 md:space-y-8 flex flex-col justify-center border border-[#1E3A2F]/5"
            >
              <h3
                class="font-serif text-3xl md:text-4xl font-light italic text-center text-[#1E3A2F]"
              >
                Un projet particulier ?
              </h3>
              <p
                class="text-center text-gray-500 text-sm md:text-base max-w-sm mx-auto"
              >
                Mariage, abonnement entreprise ou décoration d'intérieur, nous
                vous accompagnons.
              </p>
              <div class="space-y-4 pt-4 text-center">
                <a
                  href="tel:0123456789"
                  class="block text-[#4A6741] font-bold text-2xl md:text-3xl hover:opacity-70 transition-opacity"
                  >01 23 45 67 89</a
                >
                <a
                  href="mailto:jules.gaydonat@gmail.com"
                  class="block text-gray-600 font-medium md:text-lg hover:underline underline-offset-4"
                  >jules.gaydonat@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-8 md:py-12 border-t border-gray-100 text-center">
      <p
        class="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-gray-400"
      >
        &copy; 2026 Aux Bouquets du Bonheur — Design par Jules Case
      </p>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  hideHeader: true,
});

const collections = [
  {
    title: "L'Aurore Boréale",
    desc: "Éclats de blanc et bleus poudrés",
    image:
      "https://images.unsplash.com/photo-1516528387618-afa90b13e000?q=80&w=800",
  },
  {
    title: "Champêtre Chic",
    desc: "Fleurs sauvages et herbes folles",
    image:
      "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?q=80&w=800",
  },
  {
    title: "Éternelle Passion",
    desc: "Roses anciennes et velours rouge",
    image:
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=800",
  },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}

.anim-slow-zoom {
  animation: slowZoom 25s infinite alternate ease-in-out;
}

@keyframes slowZoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1.2);
  }
}

.anim-fade-up {
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.anim-fade-up-delay {
  opacity: 0;
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}
.anim-fade-up-delay-2 {
  opacity: 0;
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-rotate-slow {
  animation: rotateSlow 20s infinite linear;
}

@keyframes rotateSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Base smoothing */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
