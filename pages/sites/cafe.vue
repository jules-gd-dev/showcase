<template>
  <div
    class="bg-[#F4F1ED] text-[#2C2420] font-sans min-h-screen selection:bg-[#D4C1A9] overflow-x-hidden"
  >
    <!-- NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-[#F4F1ED]/80 backdrop-blur-md border-b border-[#2C2420]/5"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center relative"
      >
        <div class="flex-1">
          <a
            href="/"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2"
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
          class="absolute left-1/2 -translate-x-1/2 font-serif text-lg md:text-2xl font-bold tracking-tight whitespace-nowrap px-2"
        >
          Le Grain Torréfié
        </div>
        <div class="flex-1 flex justify-end">
          <button
            @click="scrollTo('visit')"
            class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-[#2C2420] text-white px-4 md:px-6 py-2 rounded-sm hover:bg-[#8B5E3C] transition-all"
          >
            Visite
          </button>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        class="relative h-[90svh] md:h-screen flex items-center justify-center pt-16"
      >
        <div
          class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div
            class="lg:col-span-7 space-y-6 md:space-y-8 anim-fade-up-cafe text-center lg:text-left"
          >
            <span
              class="block uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold text-[#8B5E3C]"
              >Specialty Coffee House — Paris</span
            >
            <h1
              class="font-serif text-5xl md:text-9xl font-bold leading-[0.9] tracking-tighter"
            >
              L'éveil des <br />
              <span class="italic font-light opacity-40">sens.</span>
            </h1>
            <p
              class="text-base md:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Une torréfaction artisanale, des grains sourcés avec éthique, pour
              une tasse qui raconte une histoire unique.
            </p>
            <div class="pt-4 flex justify-center lg:justify-start">
              <button
                @click="scrollTo('story')"
                class="group flex items-center gap-4"
              >
                <div
                  class="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[#2C2420]/20 flex items-center justify-center group-hover:bg-[#2C2420] group-hover:text-white transition-all duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <span class="uppercase tracking-widest text-[10px] font-bold"
                  >Découvrir notre rituel</span
                >
              </button>
            </div>
          </div>
          <div class="lg:col-span-5 relative hidden lg:block anim-reveal-cafe">
            <div
              class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000"
                class="w-full h-full object-cover"
                alt="Coffee"
              />
            </div>
            <div
              class="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D4C1A9] rounded-2xl -rotate-6 flex items-center justify-center p-8 text-center shadow-xl border-8 border-[#F4F1ED]"
            >
              <span class="font-serif italic text-lg">Grains 100% Arabica</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Story -->
      <section id="story" class="py-24 md:py-56 bg-white">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            <h2
              class="font-serif text-4xl md:text-7xl font-bold leading-tight tracking-tighter"
            >
              Du producteur à la tasse, <br />
              <span class="text-[#8B5E3C]">une passion tracée.</span>
            </h2>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-left pt-8 md:pt-12 font-light"
            >
              <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                "Le Grain Torréfié" est né d'une obsession : révéler la richesse
                infinie des terroirs de café. Nous travaillons main dans la main
                avec des petits producteurs pour sélectionner des lots
                d'exception.
              </p>
              <p class="text-base md:text-lg text-gray-600 leading-relaxed">
                Chaque grain est torréfié avec une précision chirurgicale dans
                notre atelier parisien, afin d'extraire tout le potentiel
                aromatique et la sucrosité naturelle du fruit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Origins Grid -->
      <section id="coffee" class="py-24 md:py-32 bg-[#F4F1ED] overflow-hidden">
        <div
          class="container mx-auto px-6 mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8"
        >
          <div class="space-y-4">
            <span
              class="uppercase tracking-widest text-[10px] font-bold text-[#8B5E3C] block font-sans"
              >Notre Sélection</span
            >
            <h2
              class="font-serif text-4xl md:text-8xl font-bold tracking-tighter"
            >
              Les Origines.
            </h2>
          </div>
          <p
            class="max-w-xs text-gray-500 text-xs md:text-sm font-medium uppercase tracking-widest md:text-right"
          >
            Explorez nos profils de torréfaction du moment.
          </p>
        </div>

        <div
          class="flex flex-col md:flex-row gap-6 md:gap-8 container mx-auto px-6"
        >
          <div
            v-for="(item, i) in originHighlights"
            :key="i"
            class="flex-1 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-[#2C2420]/5 hover:shadow-xl transition-all duration-500 group"
          >
            <span
              class="text-[#8B5E3C] font-black text-3xl md:text-4xl opacity-10 group-hover:opacity-100 transition-opacity duration-500"
              >0{{ i + 1 }}</span
            >
            <h3 class="font-serif text-2xl md:text-3xl font-bold mt-4 mb-4">
              {{ item.country }}
            </h3>
            <p
              class="text-[#8B5E3C] font-bold uppercase tracking-widest text-[9px] mb-4"
            >
              {{ item.notes }}
            </p>
            <p
              class="text-gray-500 leading-relaxed text-sm md:text-base font-light"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </section>

      <!-- Vibe Gallery -->
      <section class="py-24 md:py-56 bg-white overflow-hidden">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div
              class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 md:translate-y-12 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800"
                class="w-full h-full object-cover"
                alt="Interior"
              />
            </div>
            <div
              class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"
                class="w-full h-full object-cover"
                alt="Coffee Preparation"
              />
            </div>
            <div
              class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 md:translate-y-8 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800"
                class="w-full h-full object-cover"
                alt="Cup"
              />
            </div>
            <div
              class="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 md:translate-y-20 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800"
                class="w-full h-full object-cover"
                alt="Vibe"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Visit -->
      <section id="visit" class="py-24 md:py-56 bg-[#2C2420] text-[#F4F1ED]">
        <div class="container mx-auto px-6">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center"
          >
            <div class="space-y-8 md:space-y-12">
              <h2
                class="font-serif text-6xl md:text-9xl font-bold tracking-tighter leading-none italic opacity-90"
              >
                On vous <br />
                attend.
              </h2>
              <div class="space-y-8 pt-4 md:pt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                  <div class="space-y-2">
                    <h4
                      class="text-[#D4C1A9] uppercase tracking-widest text-[9px] md:text-[10px] font-bold"
                    >
                      Le Coffee Shop
                    </h4>
                    <p class="text-xl md:text-2xl font-light">
                      15 Rue du Café,<br />75003 Paris
                    </p>
                  </div>
                  <div class="space-y-2">
                    <h4
                      class="text-[#D4C1A9] uppercase tracking-widest text-[9px] md:text-[10px] font-bold"
                    >
                      Horaires
                    </h4>
                    <p class="text-xl md:text-2xl font-light">
                      Lun - Dim : 08h30 — 19h00
                    </p>
                  </div>
                </div>
                <div class="flex gap-8 pt-4">
                  <a
                    href="#"
                    class="text-lg md:text-xl hover:text-[#D4C1A9] transition-colors font-serif italic border-b border-white/20 pb-1"
                    >Instagram</a
                  >
                  <a
                    href="#"
                    class="text-lg md:text-xl hover:text-[#D4C1A9] transition-colors font-serif italic border-b border-white/20 pb-1"
                    >Facebook</a
                  >
                </div>
              </div>
            </div>
            <div
              class="bg-white/[0.03] p-10 md:p-16 rounded-3xl backdrop-blur-md border border-white/10 space-y-8 text-center shadow-2xl"
            >
              <h3 class="font-serif text-3xl md:text-4xl font-light italic">
                Nous contacter
              </h3>
              <p
                class="opacity-60 max-w-sm mx-auto text-sm md:text-base font-light"
              >
                Pour toute question ou demande de collaboration.
              </p>
              <div class="flex flex-col gap-4">
                <a
                  href="tel:0123456789"
                  class="text-2xl md:text-3xl font-bold hover:text-[#D4C1A9] transition-colors"
                  >01 23 45 67 89</a
                >
                <a
                  href="mailto:jules.gaydonat@gmail.com"
                  class="text-lg md:text-xl opacity-80 hover:underline underline-offset-8"
                  >jules.gaydonat@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      class="py-10 bg-[#2C2420] border-t border-white/5 text-center text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-30 text-[#F4F1ED]"
    >
      &copy; 2026 Le Grain Torréfié — Crafted by Jules Case
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  hideHeader: true,
});

const originHighlights = [
  {
    country: "Ethiopie",
    notes: "Floral / Citron / Jasmin",
    desc: "Un café d'une grande finesse, récolté sur les hauts plateaux de Yirgacheffe. Processus lavé.",
  },
  {
    country: "Colombie",
    notes: "Chocolat / Caramel / Agrumes",
    desc: "Équilibre parfait entre sucrosité et acidité. Issu des fermes de la région de Huila.",
  },
  {
    country: "Brésil",
    notes: "Noisette / Cacao / Amande",
    desc: "Corps généreux et notes gourmandes. Idéal pour un espresso réconfortant.",
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
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};
</script>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}
.anim-fade-up-cafe {
  animation: fadeUpCafe 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes fadeUpCafe {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.anim-reveal-cafe {
  opacity: 0;
  animation: revealCafe 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}
@keyframes revealCafe {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(5deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(2deg);
  }
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
