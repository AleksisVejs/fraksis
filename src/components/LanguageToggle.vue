<script setup>
import { useLanguageStore } from '../stores/language'

const languageStore = useLanguageStore()
const langs = ['en', 'lv']
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-0.5 font-mono text-[11px] uppercase tracking-[0.14em] backdrop-blur-md"
  >
    <button
      v-for="lang in langs"
      :key="lang"
      @click="languageStore.setLanguage(lang)"
      :aria-pressed="languageStore.currentLanguage === lang"
      class="focus-ring relative rounded-full px-2.5 py-1 transition-colors duration-200"
      :class="
        languageStore.currentLanguage === lang
          ? 'bg-white/[0.08] text-ink-0'
          : 'text-ink-300 hover:text-ink-100'
      "
    >
      {{ lang }}
    </button>
  </div>
</template>
