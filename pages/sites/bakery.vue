<template>
  <div class="bg-[#FDF8F0] text-[#3A2E28] font-sans min-h-screen">
    <!-- CUSTOM CURSOR -->
    <div ref="cursor" class="custom-cursor hidden md:block"></div>

    <!-- NAVIGATION MENU -->
    <nav
      class="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#3A2E28]/10"
    >
      <div
        class="container mx-auto px-4 md:px-6 h-20 flex items-center relative"
      >
        <div class="flex-1">
          <NuxtLink
            to="/"
            class="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity flex items-center gap-2"
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
          </NuxtLink>
        </div>
        <div
          class="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl font-bold"
        >
          Le Pain Doré
        </div>
        <div class="flex-1 flex justify-end items-center gap-6">
          <button
            @click="scrollTo('about')"
            class="hidden md:flex items-center gap-2 hover:text-amber-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            <span>À Propos</span>
          </button>
          <button
            @click="isCartOpen = true"
            class="relative flex items-center gap-2 bg-[#3A2E28] text-white px-4 py-2 rounded-full hover:bg-black transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h12l1 12H4L5 9z"
              />
            </svg>
            <span class="font-bold">{{ totalArticles }}</span>
            <span class="hidden sm:inline">Panier</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- CART SIDE DRAWER -->
    <div v-if="isCartOpen" class="fixed inset-0 z-50 overflow-hidden">
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm"
        @click="isCartOpen = false"
      ></div>
      <div
        class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-8 flex flex-col anim-slide-left"
      >
        <div class="flex justify-between items-center mb-8">
          <h2 class="font-serif text-3xl font-bold">Mon Panier</h2>
          <button
            @click="isCartOpen = false"
            class="p-2 hover:bg-gray-100 rounded-full transition-colors"
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

        <!-- Cart Items -->
        <div class="flex-grow overflow-y-auto space-y-6 pr-2">
          <div
            v-if="panier.length === 0"
            class="text-center py-20 text-gray-400"
          >
            Votre panier est encore vide... 🥐
          </div>
          <div
            v-for="item in panier"
            :key="item.price"
            class="flex justify-between items-center border-b pb-4 border-gray-100"
          >
            <div>
              <h4 class="font-bold text-lg">{{ item.name }}</h4>
              <p class="text-gray-500 text-sm">
                Quantité : {{ item.quantity }}
              </p>
            </div>
            <div class="flex items-center gap-4">
              <button
                @click="modifierQuantite(item.price, -1)"
                class="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-50"
              >
                -
              </button>
              <button
                @click="modifierQuantite(item.price, 1)"
                class="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <!-- Cart Footer with Demo Info -->
        <div class="mt-auto pt-8 border-t border-gray-100 space-y-6">
          <!-- Integrated Demo Info -->
          <div
            v-if="panier.length > 0"
            class="bg-amber-50 border border-amber-100 rounded-2xl p-4 space-y-3"
          >
            <div class="flex items-center gap-2 text-amber-800">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="text-[10px] font-bold uppercase tracking-widest"
                >Instructions de test</span
              >
            </div>
            <div class="space-y-1">
              <div class="flex justify-between text-[11px]">
                <span class="opacity-60">Carte :</span>
                <span class="font-mono font-bold">4242 4242 4242 4242</span>
              </div>
              <div class="flex justify-between text-[11px]">
                <span class="opacity-60">Exp / CVC :</span>
                <span class="font-mono font-bold">12/26 — 123</span>
              </div>
            </div>
          </div>

          <button
            @click="validerPanier"
            :disabled="loading || panier.length === 0"
            class="w-full bg-[#3A2E28] text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
          >
            <span>{{
              loading ? "Chargement..." : "Commander maintenant"
            }}</span>
            <svg
              v-if="!loading"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          </button>
          <p
            class="text-center text-[10px] text-gray-400 uppercase tracking-widest opacity-60"
          >
            Démo — Aucun débit réel
          </p>
        </div>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <main class="pt-20">
          <!-- Hero -->
          <section ref="heroSection" class="h-screen-dynamic flex flex-col justify-center items-center text-center relative overflow-hidden min-h-screen">
        <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div
          class="absolute inset-0 bg-cover bg-center scale-105"
          style="
            background-image: url(&quot;https://picsum.photos/seed/bakeryvideo/1920/1080&quot;);
          "
        ></div>
        <div class="relative z-20 text-white p-6">
          <h1 class="font-serif text-6xl md:text-9xl font-bold">
            Le Pain Doré
          </h1>
          <p class="mt-4 text-xl">L'âme du pain, pétrie avec passion.</p>
        </div>
      </section>

      <!-- Ingredients -->
      <section class="py-24 md:py-40 bg-[#FDF8F0]">
        <div class="container mx-auto px-6 text-center max-w-3xl">
          <h2 class="font-serif text-4xl md:text-6xl font-bold mb-8 italic">
            La Symphonie des Ingrédients
          </h2>
          <p class="text-xl leading-relaxed text-gray-700">
            Farine de meule biologique, levain naturel nourri chaque jour, eau
            de source et sel de Guérande. C'est le respect du produit qui guide
            chaque geste.
          </p>
        </div>
      </section>

      <!-- Process (GSAP) -->
      <section ref="horizontalScrollSection" class="bg-[#FDF8F0] pb-20">
        <div class="hidden lg:block">
          <div
            class="sticky top-0 h-screen w-full flex items-center overflow-hidden"
          >
            <div ref="horizontalContainer" class="flex w-[300vw]">
              <div
                v-for="(step, i) in processSteps"
                :key="i"
                class="h-screen w-screen flex items-center justify-center flex-col px-12 process-card-container"
              >
                <div
                  class="w-full max-w-3xl process-card"
                  @mousemove="handleCardMouseMove"
                  @mouseleave="resetCardMouseMove"
                >
                  <div
                    class="w-full h-[60vh] bg-gray-200 rounded-2xl shadow-2xl mb-8 bg-cover bg-center"
                    :style="{ backgroundImage: `url('${step.imageUrl}')` }"
                  ></div>
                  <h3 class="font-serif text-5xl font-bold text-center mb-4">
                    {{ i + 1 }}. {{ step.title }}
                  </h3>
                  <p class="text-center text-xl text-gray-600 max-w-xl mx-auto">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block lg:hidden container mx-auto px-6 space-y-24 pb-20">
          <div v-for="(step, i) in processSteps" :key="i" class="text-center">
            <div
              class="w-full h-80 bg-gray-200 rounded-xl shadow-xl mb-6 bg-cover bg-center"
              :style="{ backgroundImage: `url('${step.imageUrl}')` }"
            ></div>
            <h3 class="font-serif text-3xl font-bold mb-2">
              {{ i + 1 }}. {{ step.title }}
            </h3>
            <p class="text-gray-600">{{ step.mobileDescription }}</p>
          </div>
        </div>
      </section>

      <!-- Shop -->
      <section id="shop" class="py-32 bg-white">
        <div class="container mx-auto px-6 text-center mb-20">
          <h2 class="font-serif text-5xl md:text-7xl font-bold mb-6">
            Nos Créations
          </h2>
          <p class="text-lg text-gray-500 uppercase tracking-widest font-bold">
            À emporter, directement du fournil
          </p>
        </div>
        <div class="container mx-auto px-6">
          <div
            id="products-container"
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <p class="col-span-full text-center">Préparation des délices...</p>
          </div>
        </div>
      </section>

      <!-- About & Map -->
      <section id="about" class="py-32 bg-[#FDF8F0]">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div
              ref="mapContainer"
              class="aspect-w-16 aspect-h-9 lg:aspect-h-16 w-full rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625992957!2d2.352221915674333!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67171e21b8cff%3A0x8a55743455139292!2sNotre-Dame%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1628784841961!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h3 class="font-serif text-5xl font-bold mb-8">Notre Maison</h3>
              <div class="space-y-8 text-lg text-gray-700">
                <div>
                  <h4
                    class="font-bold text-xs uppercase tracking-widest text-amber-800 mb-2"
                  >
                    L'Adresse
                  </h4>
                  <p>123 Rue de la Gourmandise, 75001 Paris</p>
                  <p class="text-sm font-bold mt-2">01 23 45 67 89</p>
                  <p class="text-sm opacity-60">jules.gaydonat@gmail.com</p>
                  <p class="text-xs opacity-40 mt-1">
                    Ouvert du Lundi au Samedi, 7h - 20h
                  </p>
                </div>
                <div>
                  <h4
                    class="font-bold text-xs uppercase tracking-widest text-amber-800 mb-2"
                  >
                    L'Artisan
                  </h4>
                  <p class="leading-relaxed">
                    Fils de boulanger, Thomas perpétue un savoir-faire familial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="bg-white py-20 border-t border-[#3A2E28]/10 text-center">
      <div class="container mx-auto px-6">
        <div class="font-serif text-2xl font-bold mb-10">Le Pain Doré</div>
        <div
          class="flex flex-wrap justify-center gap-8 mb-10 text-sm font-bold uppercase tracking-widest"
        >
          <NuxtLink to="#" class="hover:text-amber-800 transition-colors">CGV</NuxtLink>
          <NuxtLink to="#" class="hover:text-amber-800 transition-colors">CGU</NuxtLink>
          <NuxtLink to="#" class="hover:text-amber-800 transition-colors"
            >Mentions Légales</NuxtLink>
        </div>
        <p class="text-gray-400 text-sm">© 2026 Jules GAY--DONAT — Démo Portfolio</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

definePageMeta({
  layout: false,
  hideHeader: true,
});

useHead({
  title: "Le Pain Doré — Boulangerie Artisanale & E-commerce",
  meta: [
    {
      name: "description",
      content:
        "Découvrez l'artisanat du Pain Doré. Pains au levain naturel, viennoiseries artisanales et boutique en ligne.",
    },
  ],
});

gsap.registerPlugin(ScrollTrigger);

// --- REFS ---
const heroSection = ref(null);
const horizontalScrollSection = ref(null);
const horizontalContainer = ref(null);
const cursor = ref(null);
const mapContainer = ref(null);
const panier = ref([]);
const loading = ref(false);
const isCartOpen = ref(false);

const totalArticles = computed(() =>
  panier.value.reduce((acc, item) => acc + item.quantity, 0),
);

// --- DATA ---
const processSteps = [
  {
    title: "Le Pétrissage",
    description:
      "Un ballet lent et précis pour développer le réseau glutineux sans échauffer la pâte.",
    mobileDescription: "Un ballet lent et précis.",
    imageUrl: "https://picsum.photos/seed/kneading/800/600",
  },
  {
    title: "Le Repos",
    description:
      "Le temps suspendu de la fermentation longue, où la magie du levain opère.",
    mobileDescription: "Le temps suspendu où la magie opère.",
    imageUrl: "https://picsum.photos/seed/rising/800/600",
  },
  {
    title: "L'Enfournement",
    description:
      "L'épreuve du feu sur une sole de pierre, pour une croûte dorée et chantante.",
    mobileDescription: "L'épreuve du feu pour une croûte dorée.",
    imageUrl: "https://picsum.photos/seed/baking/800/600",
  },
];

// --- LIFECYCLE ---
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
  initCreativeAnimations();
  initCursor();

  const saved = localStorage.getItem("panier_boulangerie");
  if (saved) panier.value = JSON.parse(saved);

  window.ajouterAuPanier = ajouterAuPanier;
  displayProducts();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  gsap.matchMedia().revert();
  window.removeEventListener("mousemove", updateCursor);
});

// --- SHOP LOGIC ---
const URL_WEBAPP =
      "https://script.google.com/macros/s/AKfycbxG6nkUT5RTtCm7EDNHTEMD7zjs-0mtkKdJ7s4qNWRCVri7FGb5rBSX4Cux92_82Uk2/exec";const googleSheetCsvUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHlHwNQj8W0CX68-qmCeyEX7HXpq5SuZfupRteRxAvOtfwRMAkD2_Gsr5e7N42gMrHeV7UPIUruL5k/pub?gid=0&single=true&output=csv";

function ajouterAuPanier(priceId, nom) {
  if (!priceId) return;
  const item = panier.value.find((i) => i.price === priceId);
  if (item) item.quantity++;
  else panier.value.push({ price: priceId, quantity: 1, name: nom });
  localStorage.setItem("panier_boulangerie", JSON.stringify(panier.value));
  isCartOpen.value = true;
}

function modifierQuantite(priceId, diff) {
  const item = panier.value.find((i) => i.price === priceId);
  if (item) {
    item.quantity += diff;
    if (item.quantity <= 0) {
      panier.value = panier.value.filter((i) => i.price !== priceId);
    }
    localStorage.setItem("panier_boulangerie", JSON.stringify(panier.value));
  }
}

async function validerPanier() {
  if (panier.value.length === 0) return;
  loading.value = true;
  try {
    const cartData = panier.value.map((i) => ({
      price: i.price,
      quantity: i.quantity,
    }));
    const encodedCart = encodeURIComponent(JSON.stringify(cartData));
    const response = await fetch(`${URL_WEBAPP}?cart=${encodedCart}`);
    const data = await response.json();
    if (data.url) window.location.href = data.url;
    else throw new Error("Erreur de paiement.");
  } catch (error) {
    alert("Problème lors du paiement.");
    loading.value = false;
  }
}

async function displayProducts() {
  const container = document.getElementById("products-container");
  if (!container) return;
  try {
    const response = await fetch(googleSheetCsvUrl);
    const csvText = await response.text();
    const products = parseCsv(csvText);
    container.innerHTML = products
      .map(
        (p) => `
      <div class="group bg-white rounded-3xl overflow-hidden flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-500">
        <div class="h-72 overflow-hidden"><img src="${p.Images ? p.Images.split(/[,;]/)[0] : "https://picsum.photos/seed/bread/400/300"}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"></div>
        <div class="p-8 flex flex-col flex-grow">
          <h3 class="font-serif text-2xl font-bold mb-2">${p.Nom}</h3>
          <p class="text-gray-500 flex-grow text-sm leading-relaxed">${p.Description}</p>
          <div class="mt-6 flex items-center justify-between">
            <span class="text-2xl font-bold text-[#3A2E28]">${p.Prix} €</span>
            <button onclick="window.ajouterAuPanier('${p.Link}', '${p.Nom.replace(/'/g, "\\'")}')" class="bg-[#3A2E28] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            </button>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  } catch (e) {
    container.innerHTML = "Erreur.";
  }
}

function parseCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  const headers = lines[0].split(",").map((h) => h.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = [];
    let current = "";
    let inQuote = false;
    for (let char of line) {
      if (char === '"') inQuote = !inQuote;
      else if (char === "," && !inQuote) {
        values.push(current);
        current = "";
      } else current += char;
    }
    values.push(current);
    const obj = {};
    headers.forEach((h, idx) => {
      let v = (values[idx] || "")
        .trim()
        .replace(/^"|"$/g, "")
        .replace(/""/g, '"');
      obj[h] = v;
    });
    data.push(obj);
  }
  return data;
}

// --- UI HELPERS ---
const handleResize = () => {
  if (heroSection.value)
    heroSection.value.style.height = `${window.innerHeight}px`;
};
const hideCursor = () => gsap.to(cursor.value, { opacity: 0 });
const showCursor = () => gsap.to(cursor.value, { opacity: 1 });
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
const initCursor = () => {
  if (cursor.value) {
    gsap.set(cursor.value, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", (e) =>
      gsap.to(cursor.value, 0.2, { x: e.clientX, y: e.clientY }),
    );
    document.body.addEventListener("mouseleave", hideCursor);
    document.body.addEventListener("mouseenter", showCursor);
  }
};
const initCreativeAnimations = () => {
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    ScrollTrigger.create({
      trigger: horizontalScrollSection.value,
      start: "top top",
      end: () =>
        `+=${horizontalContainer.value.offsetWidth - window.innerWidth}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(horizontalContainer.value, {
          x:
            -self.progress *
            (horizontalContainer.value.offsetWidth - window.innerWidth),
          ease: "none",
        });
      },
    });
  });
};
const handleCardMouseMove = (e) => {
  const card = e.currentTarget;
  const { clientX, clientY } = e;
  const { top, left, width, height } = card.getBoundingClientRect();
  const x = (clientX - left - width / 2) / 15;
  const y = (clientY - top - height / 2) / 15;
  gsap.to(card, {
    rotationY: x,
    rotationX: -y,
    transformPerspective: 1000,
    ease: "power1.out",
  });
};
const resetCardMouseMove = (e) => {
  const card = e.currentTarget;
  gsap.to(card, { rotationY: 0, rotationX: 0, ease: "power1.out" });
};
</script>

<style scoped>
.h-screen-dynamic {
  height: 100vh;
}
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
.process-card-container {
  perspective: 2000px;
}
.process-card {
  transform-style: preserve-3d;
}
.anim-slide-left {
  animation: slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes slideLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
