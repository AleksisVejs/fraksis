<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const projects = computed(() => [
  {
    key: 'wikilink',
    href: 'https://wikilink.fraksis.com/',
    external: true,
    image: '/images/wikilink-preview.png',
    index: '001',
    status: t('portfolio.status.live', lang.value),
  },
  {
    key: 'riginspect',
    href: 'https://riginspect.net',
    external: true,
    image: '/images/riginspect-preview.png',
    index: '002',
    status: t('portfolio.status.live', lang.value),
  },
  {
    key: 'ilzebrenn',
    href: 'https://ilzebrenn.com',
    external: true,
    image: '/images/ilzebrenn-preview.png',
    index: '003',
    status: t('portfolio.status.live', lang.value),
  },
  {
    key: 'fraksis',
    href: '/',
    external: false,
    image: null,
    index: '004',
    status: t('portfolio.status.internal', lang.value),
  },
])
</script>

<template>
  <section id="work" class="relative scroll-mt-24 py-20 sm:py-24">
    <div class="container-page">
      <header class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex flex-col gap-4">
          <span class="section-label reveal">{{ t('portfolio.label', lang) }}</span>
          <h2
            class="reveal heading-display max-w-2xl text-balance text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]"
            style="transition-delay: 60ms"
          >
            {{ t('portfolio.title', lang) }}
          </h2>
        </div>
        <p
          class="reveal max-w-md text-[15px] leading-relaxed text-ink-200"
          style="transition-delay: 120ms"
        >
          {{ t('portfolio.description', lang) }}
        </p>
      </header>

      <div class="mt-14 flex flex-col gap-4">
        <component
          :is="project.external ? 'a' : 'div'"
          v-for="(project, i) in projects"
          :key="project.key"
          :href="project.external ? project.href : undefined"
          :target="project.external ? '_blank' : undefined"
          :rel="project.external ? 'noopener noreferrer' : undefined"
          class="reveal card card-hover group grid grid-cols-1 overflow-hidden lg:grid-cols-12"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <!-- Preview -->
          <div
            class="relative aspect-[16/10] overflow-hidden border-b border-white/[0.05] bg-ink-800 lg:col-span-5 lg:aspect-auto lg:border-b-0 lg:border-r"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="t(`portfolio.projects.${project.key}.name`, lang)"
              class="h-full w-full object-cover object-top opacity-85 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
              loading="lazy"
            />
            <!-- Placeholder for Fraksis -->
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center"
              style="
                background:
                  radial-gradient(circle at 30% 20%, rgba(62,229,154,0.22), transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(167,139,250,0.2), transparent 55%),
                  linear-gradient(135deg, #0a0b0e, #0f1115);
              "
            >
              <div class="flex flex-col items-center gap-4">
                <span
                  class="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-0/95 font-display text-[28px] font-semibold text-ink-900"
                >
                  F
                </span>
                <span
                  class="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-300"
                >
                  fraksis.com
                </span>
              </div>
            </div>

            <!-- Status chip -->
            <div class="absolute left-4 top-4">
              <span
                class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-100 backdrop-blur"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full"
                  :class="project.status === t('portfolio.status.live', lang) ? 'bg-accent-400' : 'bg-signal-amber'"
                ></span>
                {{ project.status }}
              </span>
            </div>

            <!-- Vignette -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent"
              aria-hidden="true"
            ></div>
          </div>

          <!-- Meta -->
          <div class="flex flex-col justify-between gap-8 p-6 sm:p-10 lg:col-span-7">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3 font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
                <span>/{{ project.index }}</span>
                <span class="h-px w-6 bg-white/[0.12]"></span>
                <span>{{ t(`portfolio.projects.${project.key}.year`, lang) }}</span>
                <span class="h-px w-6 bg-white/[0.12]"></span>
                <span>{{ t(`portfolio.projects.${project.key}.role`, lang) }}</span>
              </div>

              <h3
                class="font-display text-[28px] font-medium tracking-tight text-ink-0 sm:text-[36px]"
              >
                {{ t(`portfolio.projects.${project.key}.name`, lang) }}
              </h3>

              <p class="max-w-lg text-[15px] leading-relaxed text-ink-200">
                {{ t(`portfolio.projects.${project.key}.summary`, lang) }}
              </p>
            </div>

            <div class="flex flex-wrap items-end justify-between gap-6">
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="tech in t(`portfolio.projects.${project.key}.stack`, lang)"
                  :key="tech"
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-200"
                >
                  {{ tech }}
                </li>
              </ul>

              <span
                v-if="project.external"
                class="link-arrow"
              >
                {{ t('portfolio.viewCase', lang) }}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  class="transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17 17 7M10 7h7v7"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span v-else class="font-mono text-[12px] uppercase tracking-[0.16em] text-accent-300">
                {{ t('portfolio.viewThis', lang) }}
              </span>
            </div>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>
