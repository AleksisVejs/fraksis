<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'
import LanguageToggle from './LanguageToggle.vue'

const languageStore = useLanguageStore()
const scrolled = ref(false)
const menuOpen = ref(false)

const links = computed(() => [
  { href: '#work', label: t('navbar.work', languageStore.currentLanguage) },
  { href: '#services', label: t('navbar.services', languageStore.currentLanguage) },
  { href: '#studio', label: t('navbar.studio', languageStore.currentLanguage) },
  { href: '#contact', label: t('navbar.contact', languageStore.currentLanguage) },
])

const handleScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out"
    :class="scrolled ? 'pt-3' : 'pt-5'"
  >
    <div class="container-page">
      <nav
        class="flex items-center justify-between rounded-full border border-white/[0.06] px-3 py-2 backdrop-blur-xl transition-colors duration-300"
        :class="scrolled ? 'bg-ink-900/70' : 'bg-white/[0.02]'"
      >
        <a href="#top" class="focus-ring flex items-center gap-2.5 rounded-full px-2 py-1">
          <span
            class="flex h-7 w-7 items-center justify-center rounded-full bg-ink-0 text-[13px] font-semibold text-ink-900"
            aria-hidden="true"
          >
            F
          </span>
          <span class="font-display text-[15px] font-medium tracking-tight text-ink-0">
            Fraksis
          </span>
          <span class="hidden text-[11px] text-ink-300 sm:inline">/ studio</span>
        </a>

        <div class="hidden items-center gap-1 md:flex">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="focus-ring rounded-full px-3 py-1.5 text-[13px] text-ink-200 transition-colors hover:bg-white/[0.04] hover:text-ink-0"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#contact"
            class="focus-ring hidden items-center gap-1.5 rounded-full bg-ink-0 px-4 py-1.5 text-[13px] font-medium text-ink-900 transition-all hover:bg-accent-200 hover:shadow-glow sm:inline-flex"
          >
            {{ t('navbar.cta', languageStore.currentLanguage) }}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17 17 7M10 7h7v7"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <button
            @click="menuOpen = !menuOpen"
            class="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-ink-100 md:hidden"
            :aria-expanded="menuOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!menuOpen" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="menuOpen"
          class="mt-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-800/90 p-3 backdrop-blur-xl md:hidden"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="block rounded-xl px-3 py-2.5 text-[15px] text-ink-100 transition-colors hover:bg-white/[0.04]"
          >
            {{ link.label }}
          </a>
          <a
            href="#contact"
            @click="menuOpen = false"
            class="mt-1 block rounded-xl bg-ink-0 px-3 py-2.5 text-center text-[14px] font-medium text-ink-900"
          >
            {{ t('navbar.cta', languageStore.currentLanguage) }}
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>
