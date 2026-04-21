<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const metaItems = computed(() => [
  { label: t('hero.meta.founded', lang.value), value: t('hero.meta.foundedValue', lang.value) },
  { label: t('hero.meta.projects', lang.value), value: t('hero.meta.projectsValue', lang.value) },
  { label: t('hero.meta.stack', lang.value), value: t('hero.meta.stackValue', lang.value) },
])
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36"
  >
    <div class="container-page">
      <div class="flex flex-col items-start gap-10 lg:gap-14">
        <!-- Status pill -->
        <div class="reveal flex flex-wrap items-center gap-3">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-300"
          >
            <span class="relative flex h-1.5 w-1.5">
              <span
                class="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping"
              ></span>
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400"></span>
            </span>
            {{ t('status.available', lang) }}
          </span>
          <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-300">
            {{ t('status.based', lang) }}
          </span>
        </div>

        <!-- Headline -->
        <h1
          class="reveal heading-display text-balance text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.96]"
          style="transition-delay: 80ms"
        >
          <span class="block text-ink-0">{{ t('hero.titleLine1', lang) }}</span>
          <span class="block text-ink-0">{{ t('hero.titleLine2', lang) }}</span>
          <span class="relative inline-block">
            <span
              class="bg-gradient-to-br from-accent-200 via-accent-300 to-signal-cyan bg-clip-text italic text-transparent"
              style="font-family: 'Inter', serif; font-weight: 300"
            >
              {{ t('hero.titleHighlight', lang) }}
            </span>
            <svg
              class="absolute -bottom-2 left-0 w-full opacity-60"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8C70 2 150 2 298 8"
                stroke="url(#heroStroke)"
                stroke-width="1.4"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient id="heroStroke" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stop-color="rgba(62,229,154,0)" />
                  <stop offset="40%" stop-color="rgba(62,229,154,0.8)" />
                  <stop offset="100%" stop-color="rgba(125,211,252,0)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <!-- Description + CTAs -->
        <div class="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p
            class="reveal max-w-xl text-balance text-[17px] leading-relaxed text-ink-200"
            style="transition-delay: 160ms"
          >
            {{ t('hero.description', lang) }}
          </p>

          <div
            class="reveal flex flex-wrap items-center gap-3"
            style="transition-delay: 220ms"
          >
            <a href="#contact" class="btn-primary focus-ring">
              {{ t('hero.primaryCta', lang) }}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="#work" class="btn-ghost focus-ring">{{ t('hero.secondaryCta', lang) }}</a>
          </div>
        </div>

        <!-- Meta grid -->
        <div
          class="reveal mt-6 grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] sm:grid-cols-3"
          style="transition-delay: 300ms"
        >
          <dl
            v-for="(item, i) in metaItems"
            :key="item.label"
            class="relative flex flex-col gap-1 border-white/[0.06] px-6 py-5"
            :class="[
              i !== metaItems.length - 1 ? 'sm:border-r' : '',
              i !== 0 ? 'border-t sm:border-t-0' : '',
            ]"
          >
            <dt class="font-mono text-2xs uppercase text-ink-300">{{ item.label }}</dt>
            <dd class="font-display text-[15px] text-ink-0">{{ item.value }}</dd>
          </dl>
        </div>
      </div>
    </div>

    <!-- Decorative hero frame corners -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-900/80"
      aria-hidden="true"
    ></div>
  </section>
</template>
