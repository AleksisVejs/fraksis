<template>
  <section
    class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <!-- Gradient Orbs -->
      <div
        class="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-blob"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-syntax-keyword/10 rounded-full blur-3xl animate-blob"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-syntax-function/10 rounded-full blur-3xl animate-blob"
        style="animation-delay: 4s"
      ></div>

      <!-- Code Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(97,218,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(97,218,251,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
      ></div>
    </div>

    <div class="w-full max-w-4xl mx-auto text-center relative z-10 px-2">
      <!-- Code Brackets Icon -->
      <div class="relative w-16 sm:w-24 h-16 sm:h-24 mx-auto mb-4 sm:mb-8 animate-on-scroll">
        <div class="absolute inset-0 bg-primary/20 rounded-lg animate-pulse"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="font-mono text-2xl sm:text-4xl text-primary font-bold flex">
            <span class="transform -translate-x-1">&#123;</span>
            <span class="transform translate-x-1">&#125;</span>
          </div>
        </div>
      </div>

      <div class="relative inline-block animate-on-scroll">
        <h1 class="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 relative font-mono">
          <span class="text-primary relative inline-block group">
            Fraksis
            <div
              class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            ></div>
            <div class="absolute -inset-1 bg-primary/20 blur-3xl opacity-50 animate-pulse"></div>
          </span>
        </h1>
      </div>

      <!-- Terminal Animation -->
      <div
        class="terminal w-full sm:max-w-2xl mx-auto mb-6 sm:mb-12 animate-on-scroll text-sm sm:text-base"
        style="animation-delay: 0.2s"
      >
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot bg-red-500"></div>
            <div class="terminal-dot bg-yellow-500"></div>
            <div class="terminal-dot bg-green-500"></div>
          </div>
          <div class="terminal-title text-xs sm:text-sm">terminal</div>
          <div class="w-4"></div>
        </div>
        <div class="terminal-content overflow-x-auto">
          <div class="flex mb-1 whitespace-nowrap">
            <span class="terminal-prompt mr-2">$</span>
            <span class="text-syntax-function">npm run fraksis</span>
          </div>
          <div class="text-left mt-2">
            <div class="text-green-400">
              <span class="text-white opacity-70">></span> Starting development server...
            </div>
            <div class="mb-1">
              <span class="text-syntax-tag">VITE</span> <span class="text-white">v4.5.1</span>
              <span class="text-syntax-comment opacity-70">ready in 124ms</span>
            </div>
            <div class="break-words sm:break-normal">
              <span class="text-syntax-comment">// {{ translations[language].tagline }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="flex justify-center animate-on-scroll mt-4 sm:mt-0" style="animation-delay: 0.4s">
        <a
          href="#contact"
          class="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primary text-primary font-mono rounded-lg hover:bg-primary hover:text-secondary transition-all duration-300 text-sm sm:text-base"
        >
          <span class="relative z-10">{{ translations[language].contactButton }}</span>
          <div
            class="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
          <span
            class="ml-2 transform group-hover:translate-y-1 transition-transform duration-300 font-mono"
            >_</span
          >
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
      <div class="w-5 sm:w-6 h-8 sm:h-10 border-2 border-primary rounded-full p-1 relative">
        <div
          class="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary rounded-full mx-auto absolute top-1 left-1/2 transform -translate-x-1/2 animate-scroll-dot"
        ></div>
      </div>
    </div>

    <!-- Decorative Code Elements - Hide on small screens -->
    <div
      class="absolute top-1/4 left-10 font-mono text-primary/20 text-xl sm:text-2xl animate-pulse hidden sm:block"
    >
      &#123;
    </div>
    <div
      class="absolute bottom-1/4 right-10 font-mono text-primary/20 text-xl sm:text-2xl animate-pulse hidden sm:block"
      style="animation-delay: 1s"
    >
      &#125;
    </div>
    <div
      class="absolute top-3/4 right-1/4 font-mono text-primary/20 text-xl sm:text-2xl animate-pulse hidden sm:block"
      style="animation-delay: 2s"
    >
      ;
    </div>
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

/* Typing animation */
.typing-text {
  display: inline-block;
  overflow: hidden;
  animation: typing 3.5s steps(30, end);
  white-space: nowrap;
  border-right: 0.15em solid transparent;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.btn-primary {
  @apply relative px-8 py-4 bg-primary text-black font-mono rounded-lg overflow-hidden transition-colors duration-300;
}

.btn-secondary {
  @apply relative px-8 py-4 bg-black text-primary font-mono rounded-lg overflow-hidden transition-colors duration-300;
}

.btn-primary:hover span,
.btn-secondary:hover span {
  @apply text-white;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .terminal-content {
    font-size: 0.875rem;
  }

  .animate-blob {
    animation-duration: 10s;
  }

  .terminal {
    max-height: 200px;
  }

  .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }

  /* Increase tap target size for mobile */
  a[href='#contact'] {
    padding: 0.75rem 1.25rem;
    margin-top: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
