<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const items = [
  'TypeScript',
  'Vue 3',
  'Nuxt',
  'Laravel',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Vite',
  '.NET Core',
  'React',
  'Inertia',
  'Redis',
  'Docker',
  'GitHub Actions',
  'Figma',
  'Playwright',
]

const loop = [...items, ...items]
</script>

<template>
  <section
    aria-label="Technologies"
    class="relative border-y border-white/[0.04] bg-white/[0.01] py-8"
  >
    <div class="container-page flex flex-col gap-5">
      <div class="flex items-center gap-3 text-ink-300">
        <span class="section-label">{{ t('marquee.label', lang) }}</span>
      </div>

      <div class="relative mask-fade-x overflow-hidden">
        <div class="flex w-max animate-marquee gap-12 pr-12">
          <span
            v-for="(item, i) in loop"
            :key="`${item}-${i}`"
            class="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.16em] text-ink-200"
          >
            <span class="h-1 w-1 rounded-full bg-accent-400/80"></span>
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
