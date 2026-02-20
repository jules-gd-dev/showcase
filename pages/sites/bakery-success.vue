<template>
  <div
    class="bg-[#FDF8F0] text-[#3A2E28] font-sans min-h-screen selection:bg-amber-200"
  >
    <!-- CUSTOM CURSOR -->
    <div ref="cursor" class="custom-cursor hidden md:block"></div>

    <!-- NAVIGATION MENU (Same as bakery) -->
    <nav
      class="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#3A2E28]/10"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-20 flex items-center relative text-center"
      >
        <div
          class="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl font-bold"
        >
          Le Pain Doré
        </div>
      </div>
    </nav>

    <main class="pt-20">
      <section
        class="min-h-[80svh] flex flex-col justify-center items-center text-center px-6"
      >
        <div class="space-y-8 max-w-2xl">
          <div
            class="w-20 h-20 bg-[#3A2E28] text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl"
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 class="font-serif text-5xl md:text-7xl font-bold leading-tight">
            Merci pour <br />
            votre commande !
          </h1>

          <div class="space-y-6">
            <p class="text-xl text-gray-600 leading-relaxed">
              Votre gourmandise a bien été enregistrée. Dans une boutique
              réelle, vous recevriez un email de confirmation et nous
              commencerions à pétrir votre pain dès maintenant.
            </p>

            <div class="pt-10 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/sites/bakery"
                class="bg-[#3A2E28] text-white px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-black transition-all shadow-lg"
              >
                Retour au fournil
              </a>
              <a
                href="/"
                class="border border-[#3A2E28]/20 px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#3A2E28] hover:text-[#FDF8F0] transition-all"
              >
                Voir la galerie
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer
      class="py-12 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest"
    >
      &copy; 2026 Le Pain Doré — Expérience de Démo
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";

definePageMeta({
  layout: false,
  hideHeader: true,
});

const cursor = ref(null);

onMounted(() => {
  // Clear the bakery cart
  localStorage.removeItem("panier_boulangerie");

  // Simple cursor logic
  if (cursor.value) {
    gsap.set(cursor.value, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor.value, 0.2, { x: e.clientX, y: e.clientY });
    });
  }
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border: 1px solid #3a2e28;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.3s ease;
}
</style>
