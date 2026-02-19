<template>
  <div
    class="bg-[#0A0A0A] text-white font-sans min-h-screen selection:bg-[#0052FF] selection:text-white overflow-x-hidden"
  >
    <!-- POPUP MODALE -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center px-6"
    >
      <div
        class="absolute inset-0 bg-black/90 backdrop-blur-md"
        @click="isModalOpen = false"
      ></div>
      <div
        class="relative bg-white text-black p-8 md:p-12 rounded-3xl max-w-lg w-full shadow-2xl border border-white/10 anim-fade-up-gym text-center space-y-8"
      >
        <div
          class="w-20 h-20 bg-[#0052FF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0052FF]/20 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="space-y-4">
          <h3 class="font-black italic uppercase text-3xl tracking-tighter">
            Boutique de démo
          </h3>
          <p class="text-gray-600 font-medium leading-relaxed">
            Ce site de démonstration ne dispose pas d'une boutique
            fonctionnelle. <br /><br />
            <span class="text-black font-bold"
              >Par contre, je peux tout à fait en intégrer une sur le vôtre
              !</span
            >
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <a
            href="/sites/bakery"
            class="bg-black text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-[#0052FF] transition-all"
            >Voir l'exemple e-commerce</a
          >
          <a
            href="/contact"
            class="text-gray-400 hover:text-black font-bold uppercase text-[10px] tracking-widest transition-colors"
            >Me contacter pour mon projet</a
          >
        </div>
        <button
          @click="isModalOpen = false"
          class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l18 18"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- NAVIGATION -->
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center relative"
      >
        <div class="flex-1">
          <a
            href="/"
            class="text-[10px] font-black uppercase tracking-widest hover:text-[#0052FF] transition-colors flex items-center gap-2"
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
          class="absolute left-1/2 -translate-x-1/2 font-black text-lg md:text-3xl tracking-tighter italic whitespace-nowrap"
        >
          ENERGIE<span class="text-[#0052FF]">VITALE</span>
        </div>
        <div class="flex-1 flex justify-end">
          <button
            @click="isModalOpen = true"
            class="text-[9px] md:text-[10px] font-black uppercase bg-[#0052FF] px-4 md:px-6 py-2 skew-x-[-12deg] hover:bg-white hover:text-black transition-all"
          >
            <span class="inline-block skew-x-[12deg]">S'abonner</span>
          </button>
        </div>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section
        class="relative h-[100svh] flex items-center justify-center pt-16"
      >
        <div class="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000"
            class="w-full h-full object-cover grayscale opacity-30 scale-110 anim-zoom-slow"
            alt="Gym"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"
          ></div>
        </div>

        <div class="relative z-10 container mx-auto px-6 text-center">
          <h1
            class="font-black text-5xl md:text-[12rem] leading-[0.9] tracking-tighter italic uppercase anim-reveal-gym"
          >
            No <span class="text-[#0052FF]">Excuses</span><br />
            <span class="outline-text">Only Results</span>
          </h1>
          <p
            class="mt-6 md:mt-8 text-sm md:text-2xl font-bold uppercase tracking-[0.2em] opacity-60 anim-fade-in-gym"
          >
            Performance & Discipline au cœur de Paris
          </p>
          <div class="mt-10 md:mt-12 anim-fade-up-gym">
            <button
              @click="scrollTo('disciplines')"
              class="group relative px-8 py-4 font-black uppercase text-xs tracking-widest border border-white/20 hover:border-[#0052FF] transition-colors overflow-hidden"
            >
              <span class="relative z-10">Nos Disciplines</span>
              <div
                class="absolute inset-0 bg-[#0052FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              ></div>
            </button>
          </div>
        </div>

        <div
          class="absolute bottom-8 left-0 w-full flex flex-col items-center gap-3 opacity-20 anim-fade-up-gym"
          style="animation-delay: 1.2s"
        >
          <span class="text-[8px] font-black uppercase tracking-[0.4em]"
            >Scroll</span
          >
          <div class="w-px h-8 bg-white"></div>
        </div>
      </section>

      <!-- Marquee -->
      <section
        class="bg-[#0052FF] py-4 md:py-8 overflow-hidden border-y border-white/10"
      >
        <div class="flex whitespace-nowrap anim-marquee">
          <div
            v-for="i in 2"
            :key="i"
            class="flex items-center gap-10 md:gap-20 pr-10 md:pr-20"
          >
            <span
              class="text-3xl md:text-7xl font-black italic uppercase tracking-tighter"
              >Strength</span
            >
            <div class="w-2 h-2 md:w-4 md:h-4 bg-white rotate-45"></div>
            <span
              class="text-3xl md:text-7xl font-black italic uppercase tracking-tighter"
              >Community</span
            >
            <div class="w-2 h-2 md:w-4 md:h-4 bg-white rotate-45"></div>
            <span
              class="text-3xl md:text-7xl font-black italic uppercase tracking-tighter"
              >Results</span
            >
            <div class="w-2 h-2 md:w-4 md:h-4 bg-white rotate-45"></div>
          </div>
        </div>
      </section>

      <!-- Disciplines Grid -->
      <section id="disciplines" class="py-24 md:py-56 bg-[#0A0A0A]">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mb-16 md:mb-32">
            <span
              class="text-[#0052FF] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
              >Entraînement</span
            >
            <h2
              class="font-black text-4xl md:text-8xl italic uppercase tracking-tighter leading-[0.9]"
            >
              Repousse tes <br class="hidden md:block" />
              propres limites.
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            <div
              v-for="(item, i) in disciplines"
              :key="i"
              class="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-900 rounded-sm"
            >
              <img
                :src="item.image"
                class="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                :alt="item.title"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"
              ></div>
              <div class="absolute bottom-0 left-0 p-6 md:p-8 w-full text-left">
                <span
                  class="text-[#0052FF] font-black text-[10px] uppercase tracking-widest mb-2 block"
                  >{{ item.category }}</span
                >
                <h3
                  class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-2"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="text-xs md:text-sm text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2"
                >
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Membership Grid -->
      <section
        id="membership"
        class="py-24 md:py-56 bg-white text-black relative overflow-hidden"
      >
        <div class="container mx-auto px-6 relative z-10 text-left">
          <div class="text-center mb-16 md:mb-32">
            <h2
              class="font-black text-5xl md:text-[10rem] italic uppercase tracking-tighter leading-none"
            >
              Abonnements.
            </h2>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto"
          >
            <div
              class="p-8 md:p-12 border-[3px] border-black flex flex-col justify-between h-auto md:h-[550px] space-y-8"
            >
              <div>
                <span
                  class="font-black uppercase tracking-widest text-[10px] text-gray-400"
                  >Pour débuter</span
                >
                <h3
                  class="text-5xl md:text-7xl font-black italic mt-4 tracking-tighter"
                >
                  49€<span
                    class="text-sm md:text-lg font-bold tracking-normal opacity-40"
                    >/mois</span
                  >
                </h3>
                <ul
                  class="mt-8 space-y-3 font-bold uppercase text-[10px] tracking-widest text-gray-600"
                >
                  <li>— Accès salle 7j/7</li>
                  <li>— Équipement High-End</li>
                  <li>— Sans engagement</li>
                </ul>
              </div>
              <button
                @click="isModalOpen = true"
                class="w-full py-4 border-2 border-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-black hover:text-white transition-all"
              >
                Choisir Rookie
              </button>
            </div>

            <div
              class="p-8 md:p-12 bg-black text-white flex flex-col justify-between h-auto md:h-[550px] space-y-8 relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 bg-[#0052FF] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest skew-x-[-12deg] translate-x-2"
              >
                Le plus prisé
              </div>
              <div>
                <span
                  class="font-black uppercase tracking-widest text-[10px] text-[#0052FF]"
                  >Performance totale</span
                >
                <h3
                  class="text-5xl md:text-7xl font-black italic mt-4 tracking-tighter"
                >
                  89€<span
                    class="text-sm md:text-lg font-bold tracking-normal opacity-40"
                    >/mois</span
                  >
                </h3>
                <ul
                  class="mt-8 space-y-3 font-bold uppercase text-[10px] tracking-widest text-gray-400"
                >
                  <li>— Accès total 24h/24</li>
                  <li>— 2 Coachings / mois</li>
                  <li>— Sauna & Récupération</li>
                </ul>
              </div>
              <button
                @click="isModalOpen = true"
                class="w-full py-4 bg-[#0052FF] text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Choisir Elite
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-24 md:py-48 bg-[#0A0A0A]">
        <div class="container mx-auto px-6">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center"
          >
            <div class="space-y-10 md:space-y-16 text-left">
              <h2
                class="font-black text-5xl md:text-9xl italic uppercase tracking-tighter leading-[0.8]"
              >
                Join the <br /><span class="text-[#0052FF]">Tribe.</span>
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div class="space-y-3">
                  <h4
                    class="text-[#0052FF] font-black uppercase tracking-widest text-[9px]"
                  >
                    Localisation
                  </h4>
                  <p
                    class="text-xl md:text-2xl font-bold uppercase leading-tight"
                  >
                    88 Avenue du Power,<br />75011 Paris
                  </p>
                </div>
                <div class="space-y-3">
                  <h4
                    class="text-[#0052FF] font-black uppercase tracking-widest text-[9px]"
                  >
                    Connect
                  </h4>
                  <p class="text-xl md:text-2xl font-bold">01 23 45 67 89</p>
                  <p class="text-lg md:text-xl text-gray-500 font-bold">
                    jules.gaydonat@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-900/50 border border-white/5 p-10 md:p-16 rounded-sm text-center space-y-8 relative"
            >
              <div
                class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#0052FF] rounded-full blur-3xl opacity-20"
              ></div>
              <h3
                class="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-tight italic"
              >
                Essai gratuit.
              </h3>
              <p
                class="text-gray-400 font-bold uppercase tracking-widest text-[10px]"
              >
                Ta transformation commence ici.
              </p>
              <div class="pt-4">
                <a
                  href="mailto:jules.gaydonat@gmail.com"
                  class="inline-block bg-white text-black px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#0052FF] hover:text-white transition-all skew-x-[-12deg]"
                >
                  <span class="inline-block skew-x-[12deg]"
                    >Réserver ma séance</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      class="py-10 border-t border-white/5 text-center text-[8px] font-black uppercase tracking-[0.5em] text-gray-700"
    >
      &copy; 2026 Energie Vitale — No Mercy — Design by Jules Case
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: false,
  hideHeader: true,
});

const isModalOpen = ref(false);

const disciplines = [
  {
    title: "Powerlifting",
    category: "Force",
    desc: "Maîtrise les trois mouvements fondamentaux.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800",
  },
  {
    title: "HIIT Box",
    category: "Cardio",
    desc: "Explosivité et endurance.",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800",
  },
  {
    title: "Warrior Yoga",
    category: "Mobilité",
    desc: "Force tranquille et contrôle moteur.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
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
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
}
@media (min-width: 768px) {
  .outline-text {
    -webkit-text-stroke: 2px white;
  }
}
.anim-zoom-slow {
  animation: zoomSlow 30s infinite alternate ease-in-out;
}
@keyframes zoomSlow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
}
.anim-reveal-gym {
  animation: revealGym 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes revealGym {
  from {
    opacity: 0;
    transform: translateY(40px) skewY(5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) skewY(0);
  }
}
.anim-fade-in-gym {
  opacity: 0;
  animation: fadeInGym 1s ease-out 0.4s forwards;
}
@keyframes fadeInGym {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}
.anim-fade-up-gym {
  opacity: 0;
  animation: fadeUpGym 1s ease-out 0.6s forwards;
}
@keyframes fadeUpGym {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.anim-marquee {
  animation: marquee 25s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
