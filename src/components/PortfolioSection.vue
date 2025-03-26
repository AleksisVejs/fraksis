<template>
  <section class="section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 relative inline-block animate-on-scroll"
      >
        <span class="text-primary relative group">
          {{ translations[language].title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <!-- Featured Project -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Featured Project -->
        <a
          href="https://ilzebrenn.com"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-2xl bg-black animate-on-scroll cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-2xl bg-black aspect-[16/9]">
            <img
              src="/images/ilzebrenn-preview.jpg"
              alt="Ilze Brenn Portfolio"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
          >
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ translations[language].featuredProject.title }}
            </h3>
            <p class="text-gray-300 mb-4">
              {{ translations[language].featuredProject.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Vue.js</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-1/4 right-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-20"
    ></div>
    <div
      class="absolute bottom-1/4 left-10 w-6 h-6 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-3/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 2s"
    ></div>
  </section>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { currentLanguage: language } = storeToRefs(languageStore)

const translations = {
  en: {
    title: 'Our Work',
    featuredProject: {
      title: 'ilzebrenn.com',
      description: 'A minimalist portfolio website showcasing artistic works',
    },
  },
  lv: {
    title: 'Mūsu Darbi',
    featuredProject: {
      title: 'ilzebrenn.com',
      description: 'Minimālistiska portfolio vietne mākslinieka darbu izstāšanai',
    },
  },
}
</script>
