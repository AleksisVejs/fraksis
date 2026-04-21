<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const year = new Date().getFullYear()

const links = computed(() => [
  { href: '#work', label: t('footer.links.work', lang.value) },
  { href: '#services', label: t('footer.links.services', lang.value) },
  { href: '#studio', label: t('footer.links.about', lang.value) },
  { href: '#contact', label: t('footer.links.contact', lang.value) },
])
</script>

<template>
  <footer class="relative mt-8 border-t border-white/[0.06] pt-16 pb-10">
    <!-- Big wordmark -->
    <div class="container-page">
      <div
        aria-hidden="true"
        class="select-none font-display text-[22vw] font-semibold leading-[0.85] tracking-tightest text-ink-0/[0.04] sm:text-[18vw]"
      >
        Fraksis
      </div>
    </div>

    <div class="container-page mt-16 grid gap-12 lg:grid-cols-12">
      <div class="flex flex-col gap-5 lg:col-span-5">
        <a href="#top" class="flex items-center gap-3">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-0 font-display text-[16px] font-semibold text-ink-900"
          >
            F
          </span>
          <span class="font-display text-[18px] font-medium tracking-tight text-ink-0">Fraksis</span>
        </a>
        <p class="max-w-sm text-[14px] leading-relaxed text-ink-200">
          {{ t('footer.tagline', lang) }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-10 lg:col-span-7 sm:grid-cols-3">
        <div class="flex flex-col gap-3">
          <h3 class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
            {{ t('footer.sections.links', lang) }}
          </h3>
          <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-[14px] text-ink-100 transition-colors hover:text-accent-300"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
            {{ t('footer.sections.contact', lang) }}
          </h3>
          <ul class="flex flex-col gap-2">
            <li>
              <a
                href="mailto:contact@fraksis.com"
                class="text-[14px] text-ink-100 transition-colors hover:text-accent-300"
              >
                contact@fraksis.com
              </a>
            </li>
            <li class="text-[14px] text-ink-200">Riga, Latvia</li>
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">Social</h3>
          <ul class="flex flex-col gap-2">
            <li>
              <a
                href="https://github.com/AleksisVejs"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[14px] text-ink-100 transition-colors hover:text-accent-300"
              >
                GitHub &mdash; Aleksis
              </a>
            </li>
            <li>
              <a
                href="https://github.com/22DPVEmer"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[14px] text-ink-100 transition-colors hover:text-accent-300"
              >
                GitHub &mdash; Viesturs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-page mt-14">
      <div class="divider"></div>
      <div class="mt-6 flex flex-col items-start justify-between gap-2 font-mono text-2xs uppercase tracking-[0.16em] text-ink-300 sm:flex-row sm:items-center">
        <span>&copy; {{ year }} Fraksis. {{ t('footer.copyright', lang) }}</span>
        <span>{{ t('footer.builtWith', lang) }}</span>
      </div>
    </div>
  </footer>
</template>
