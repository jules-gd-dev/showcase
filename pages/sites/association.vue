<template>
  <div
    class="bg-[#FDFCFB] text-[#2D3142] font-sans min-h-screen selection:bg-[#EF8354] selection:text-white overflow-x-hidden"
  >
    <!-- NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#2D3142]/5"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center relative"
      >
        <div class="flex-1">
          <a
            href="/"
            class="text-[10px] font-bold uppercase tracking-widest hover:text-[#4F5D75] transition-colors flex items-center gap-2"
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
          class="absolute left-1/2 -translate-x-1/2 font-bold text-lg md:text-2xl tracking-tight text-[#4F5D75] whitespace-nowrap"
        >
          Entraide <span class="text-[#EF8354]">&</span> Avenir
        </div>

        <div class="flex-1 flex justify-end">
          <button
            @click="scrollTo('actions')"
            class="text-[10px] font-bold uppercase bg-[#4F5D75] text-white px-5 py-2 rounded-full hover:bg-[#2D3142] transition-all shadow-md"
          >
            S'engager
          </button>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        class="relative min-h-[90svh] flex items-center pt-20 overflow-hidden"
      >
        <!-- Organic background shape -->
        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-[#BFC0C0]/10 rounded-l-[100px] -z-10 hidden lg:block"
        ></div>

        <div
          class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div class="space-y-8 anim-fade-up-asso">
            <span
              class="inline-block bg-[#EF8354]/10 text-[#EF8354] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >Solidarité de proximité</span
            >
            <h1
              class="text-5xl md:text-8xl font-bold leading-tight tracking-tight text-[#2D3142]"
            >
              Semer l'espoir, <br />
              <span class="text-[#4F5D75]">récolter l'avenir.</span>
            </h1>
            <p
              class="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed"
            >
              Nous agissons chaque jour pour créer du lien, soutenir les plus
              fragiles et bâtir une communauté plus solidaire au cœur de notre
              quartier.
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <button
                @click="scrollTo('actions')"
                class="bg-[#EF8354] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-[#EF8354]/20 hover:scale-105 transition-transform"
              >
                Nos actions
              </button>
              <button
                @click="scrollTo('story')"
                class="bg-white border-2 border-[#BFC0C0] text-[#4F5D75] px-8 py-4 rounded-2xl font-bold hover:bg-[#BFC0C0]/10 transition-colors"
              >
                Notre histoire
              </button>
            </div>
          </div>

          <div class="relative anim-reveal-asso">
            <div
              class="aspect-square rounded-[40px] md:rounded-[80px] overflow-hidden rotate-3 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000"
                class="w-full h-full object-cover"
                alt="Community"
              />
            </div>
            <!-- Decorative badge -->
            <div
              class="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4"
            >
              <div
                class="w-12 h-12 bg-[#4F5D75] rounded-full flex items-center justify-center text-white font-bold text-xl"
              >
                12
              </div>
              <div
                class="text-xs font-bold uppercase tracking-widest leading-tight text-gray-400"
              >
                Projets<br />en cours
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Impact Stats -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="text-center space-y-2"
            >
              <span
                class="text-3xl md:text-5xl font-bold text-[#4F5D75] block"
                >{{ stat.value }}</span
              >
              <span
                class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#BFC0C0]"
                >{{ stat.label }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Main Actions -->
      <section id="actions" class="py-24 md:py-48 bg-[#FDFCFB]">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2
              class="text-4xl md:text-6xl font-bold tracking-tight text-[#2D3142]"
            >
              Notre Impact local.
            </h2>
            <p class="text-gray-500">
              Trois piliers fondamentaux pour une action concrète et durable
              auprès de ceux qui en ont le plus besoin.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(action, i) in actions"
              :key="i"
              class="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group"
            >
              <div
                class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform"
                :class="action.color"
              >
                {{ action.icon }}
              </div>
              <h3 class="text-2xl font-bold mb-4">{{ action.title }}</h3>
              <p class="text-gray-500 leading-relaxed mb-6">
                {{ action.desc }}
              </p>
              <div
                class="w-10 h-1 bg-[#BFC0C0]/20 rounded-full group-hover:w-full group-hover:bg-[#EF8354] transition-all duration-700"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Story / Heart of the Asso -->
      <section
        id="story"
        class="py-24 md:py-48 bg-[#4F5D75] text-white overflow-hidden relative"
      >
        <div
          class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full">
            <circle cx="10" cy="10" r="40" fill="white" />
          </svg>
        </div>
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-20">
            <div
              class="lg:w-1/2 aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000"
                class="w-full h-full object-cover"
                alt="Human"
              />
            </div>
            <div class="lg:w-1/2 space-y-8">
              <h2
                class="text-4xl md:text-7xl font-bold tracking-tight leading-tight"
              >
                L'humain au <br />
                centre de tout.
              </h2>
              <p class="text-xl opacity-80 leading-relaxed italic font-light">
                "Depuis 10 ans, nous n'avons pas seulement distribué des repas
                ou donné des cours. Nous avons partagé des sourires, écouté des
                silences et recréé une famille pour ceux qui l'avaient perdue."
              </p>
              <p
                class="font-bold text-[#EF8354] uppercase tracking-widest text-xs"
              >
                — Marc, Fondateur de l'association
              </p>
              <div class="pt-6">
                <button
                  @click="scrollTo('contact')"
                  class="bg-white text-[#4F5D75] px-10 py-4 rounded-2xl font-bold hover:bg-[#EF8354] hover:text-white transition-all"
                >
                  Nous rejoindre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact / Engagement -->
      <section id="contact" class="py-24 md:py-48 bg-white">
        <div class="container mx-auto px-6 text-center max-w-4xl space-y-16">
          <h2
            class="text-4xl md:text-8xl font-bold tracking-tighter text-[#2D3142]"
          >
            Prêt à aider ?
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="p-12 bg-[#FDFCFB] rounded-[40px] border border-gray-100 space-y-6"
            >
              <h3 class="text-2xl font-bold text-[#4F5D75]">
                Devenir bénévole
              </h3>
              <p class="text-gray-500">
                Offrez un peu de votre temps et de votre énergie pour faire
                bouger les choses.
              </p>
              <p class="text-xl font-bold">01 23 45 67 89</p>
            </div>
            <div
              class="p-12 bg-[#EF8354]/5 rounded-[40px] border border-[#EF8354]/10 space-y-6"
            >
              <h3 class="text-2xl font-bold text-[#EF8354]">Faire un don</h3>
              <p class="text-gray-500 text-sm">
                Chaque contribution nous permet de lancer de nouveaux projets
                solidaires.
              </p>
              <p class="text-xl font-bold text-[#EF8354]">
                jules.gaydonat@gmail.com
              </p>
            </div>
          </div>
          <div class="pt-8 flex flex-col items-center gap-4">
            <p
              class="text-xs font-bold uppercase tracking-[0.3em] text-[#BFC0C0]"
            >
              Suivez nos actions
            </p>
            <div class="flex gap-8">
              <a
                href="#"
                class="text-[#4F5D75] font-bold hover:text-[#EF8354] transition-colors"
                >Instagram</a
              >
              <a
                href="#"
                class="text-[#4F5D75] font-bold hover:text-[#EF8354] transition-colors"
                >Facebook</a
              >
              <a
                href="#"
                class="text-[#4F5D75] font-bold hover:text-[#EF8354] transition-colors"
                >LinkedIn</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 bg-[#FDFCFB] border-t border-gray-100 text-center">
      <p
        class="text-[10px] font-bold uppercase tracking-[0.4em] text-[#BFC0C0]"
      >
        &copy; 2026 Entraide & Avenir — Association Loi 1901 — Design by Jules
        Case
      </p>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  hideHeader: true,
});

const stats = [
  { value: "1.2k", label: "Familles aidées" },
  { value: "150+", label: "Bénévoles" },
  { value: "12k", label: "Repas servis" },
  { value: "24", label: "Ateliers / semaine" },
];

const actions = [
  {
    title: "Aide Alimentaire",
    icon: "🍱",
    color: "bg-blue-100 text-blue-600",
    desc: "Distribution de paniers frais et produits de première nécessité deux fois par semaine.",
  },
  {
    title: "Soutien Scolaire",
    icon: "📚",
    color: "bg-amber-100 text-amber-600",
    desc: "Accompagnement personnalisé pour les jeunes du primaire au lycée chaque soir.",
  },
  {
    title: "Lien Social",
    icon: "🤝",
    color: "bg-rose-100 text-rose-600",
    desc: "Ateliers créatifs, jardinage et rencontres pour briser l'isolement des aînés.",
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
.anim-fade-up-asso {
  animation: fadeUpAsso 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUpAsso {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-reveal-asso {
  opacity: 0;
  animation: revealAsso 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

@keyframes revealAsso {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(3deg);
  }
}

/* Base smoothing */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
