<template>
  <section class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <!-- Gradient Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"
        style="animation-delay: 4s"
      ></div>

      <!-- Animated Lines -->
      <div
        class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(236,208,111,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-gradient"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(236,208,111,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,208,111,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto text-center relative z-10">
      <!-- Logo/Icon -->
      <div class="relative w-24 h-24 mx-auto mb-8 animate-on-scroll">
        <div class="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <svg class="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      <div class="relative inline-block animate-on-scroll">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 relative">
          <span class="text-primary relative inline-block group">
            Fraksis
            <div
              class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            ></div>
            <div class="absolute -inset-1 bg-primary/20 blur-3xl opacity-50 animate-pulse"></div>
          </span>
        </h1>
      </div>

      <p
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto relative animate-on-scroll"
        style="animation-delay: 0.2s"
      >
        <span class="relative inline-block group">
          {{ translations[language].tagline }}
          <div
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </p>

      <!-- Contact Button -->
      <div class="flex justify-center animate-on-scroll" style="animation-delay: 0.4s">
        <a
          href="#contact"
          class="group relative inline-flex items-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
        >
          <span class="relative z-10">{{ translations[language].contactButton }}</span>
          <div
            class="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
          <svg
            class="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
      <div class="w-6 h-10 border-2 border-primary rounded-full p-1 relative">
        <div
          class="w-1.5 h-1.5 bg-primary rounded-full mx-auto absolute top-1 left-1/2 transform -translate-x-1/2 animate-scroll-dot"
        ></div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-20"
    ></div>
    <div
      class="absolute bottom-1/4 right-10 w-6 h-6 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-20"
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
    tagline: 'Full-stack development that transforms ideas into digital reality',
    contactButton: 'Contact Us',
  },
  lv: {
    tagline: 'Pilna steka izstrāde, kas pārvērš idejas digitālā realitātē',
    contactButton: 'Sazinies Ar Mums',
  },
}
</script>

<style scoped>
@keyframes scroll-dot {
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, 20px);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-scroll-dot {
  animation: scroll-dot 2s infinite;
}

.animate-gradient {
  animation: gradient 15s ease infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.btn-primary {
  @apply relative px-8 py-4 bg-primary text-black font-medium rounded-lg overflow-hidden transition-colors duration-300;
}

.btn-secondary {
  @apply relative px-8 py-4 bg-black text-primary font-medium rounded-lg overflow-hidden transition-colors duration-300;
}

.btn-primary:hover span,
.btn-secondary:hover span {
  @apply text-white;
}
</style>
