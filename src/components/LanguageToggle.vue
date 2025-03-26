<template>
  <button
    @click="languageStore.toggleLanguage()"
    class="fixed top-4 right-4 z-50 px-4 py-2 bg-black/5 dark:bg-white/5 rounded-lg backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors duration-300 flex items-center gap-2"
  >
    <span class="text-sm font-medium">{{
      languageStore.currentLanguage === 'en' ? 'EN' : 'LV'
    }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
      />
    </svg>
  </button>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'

const languageStore = useLanguageStore()
</script>
