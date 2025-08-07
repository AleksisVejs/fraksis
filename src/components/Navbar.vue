<template>
  <nav
    class="fixed top-0 left-0 right-0 w-full bg-background-dark/90 backdrop-blur-md shadow-lg border-b border-primary/20 py-4 px-6 z-50 transition-all duration-300"
    :class="{ 'bg-background-dark/95': isScrolled }"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home" class="text-2xl font-bold text-primary font-mono hover:text-primary/80 transition-colors">
        Fraksis
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="nav-link hover:text-primary transition-colors">{{ translations.home }}</a>
        <a href="#services" class="nav-link hover:text-primary transition-colors">{{ translations.services }}</a>
        <a href="#portfolio" class="nav-link hover:text-primary transition-colors">{{ translations.portfolio }}</a>
        <a href="#about" class="nav-link hover:text-primary transition-colors">{{ translations.about }}</a>
        <a href="#contact" class="btn-primary">{{ translations.contact }}</a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors"
        :class="{ 'bg-primary/20': isMobileMenuOpen }"
      >
        <svg
          class="w-6 h-6 text-primary"
          :class="{ 'rotate-90': isMobileMenuOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 w-full bg-background-dark/95 backdrop-blur-md shadow-lg border-t border-primary/20 animate-slide-down"
    >
      <div class="px-6 py-4 space-y-4">
        <a 
          href="#home" 
          @click="isMobileMenuOpen = false"
          class="block nav-link py-2 hover:text-primary transition-colors"
        >
          {{ translations.home }}
        </a>
        <a 
          href="#services" 
          @click="isMobileMenuOpen = false"
          class="block nav-link py-2 hover:text-primary transition-colors"
        >
          {{ translations.services }}
        </a>
        <a 
          href="#portfolio" 
          @click="isMobileMenuOpen = false"
          class="block nav-link py-2 hover:text-primary transition-colors"
        >
          {{ translations.portfolio }}
        </a>
        <a 
          href="#about" 
          @click="isMobileMenuOpen = false"
          class="block nav-link py-2 hover:text-primary transition-colors"
        >
          {{ translations.about }}
        </a>
        <a 
          href="#contact" 
          @click="isMobileMenuOpen = false"
          class="block btn-primary text-center"
        >
          {{ translations.contact }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Computed properties for translations
const translations = computed(() => ({
  home: t('navbar.home', languageStore.currentLanguage),
  services: t('navbar.services', languageStore.currentLanguage),
  portfolio: t('navbar.portfolio', languageStore.currentLanguage),
  about: t('navbar.about', languageStore.currentLanguage),
  contact: t('navbar.contact', languageStore.currentLanguage)
}))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const smoothScroll = (e) => {
  e.preventDefault()
  const targetId = e.target.getAttribute('href')
  const targetElement = document.querySelector(targetId)
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Add smooth scroll to all navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
