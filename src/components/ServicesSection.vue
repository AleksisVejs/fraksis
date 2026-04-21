<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const items = computed(() => t('services.items', lang.value))
</script>

<template>
  <section id="services" class="relative scroll-mt-24 py-20 sm:py-24">
    <div class="container-page">
      <!-- Header -->
      <header class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex flex-col gap-4">
          <span class="section-label reveal">{{ t('services.label', lang) }}</span>
          <h2
            class="reveal heading-display max-w-2xl text-balance text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]"
            style="transition-delay: 60ms"
          >
            {{ t('services.title', lang) }}
          </h2>
        </div>
        <p
          class="reveal max-w-md text-[15px] leading-relaxed text-ink-200"
          style="transition-delay: 120ms"
        >
          {{ t('services.description', lang) }}
        </p>
      </header>

      <!-- Service cards -->
      <div class="mt-14 grid gap-4 md:grid-cols-2">
        <article
          v-for="(item, i) in items"
          :key="item.index"
          class="reveal card card-hover group relative p-8 sm:p-10"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <div class="flex items-center justify-between">
            <span
              class="font-mono text-2xs uppercase tracking-[0.22em] text-ink-300"
            >
              Service / {{ item.index }}
            </span>
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-ink-300 transition-all duration-300 group-hover:border-accent-300/40 group-hover:text-accent-300"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17 17 7M10 7h7v7"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>

          <h3
            class="mt-8 font-display text-[26px] font-medium tracking-tight text-ink-0 sm:text-[32px]"
          >
            {{ item.name }}
          </h3>
          <p class="mt-3 max-w-md text-[15px] leading-relaxed text-ink-200">
            {{ item.summary }}
          </p>

          <ul class="mt-8 flex flex-col divide-y divide-white/[0.05] border-t border-white/[0.05]">
            <li
              v-for="bullet in item.bullets"
              :key="bullet"
              class="flex items-center gap-3 py-3 text-[14px] text-ink-100"
            >
              <span
                class="inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-accent-400/30 bg-accent-400/[0.06]"
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 12l5 5L20 6"
                    stroke="rgb(62,229,154)"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <!-- Decorative hover glow -->
          <div
            class="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          ></div>
        </article>
      </div>
    </div>
  </section>
</template>
