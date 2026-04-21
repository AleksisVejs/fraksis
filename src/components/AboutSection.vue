<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const principles = computed(() => t('about.principles', lang.value))

const team = computed(() => [
  {
    key: 'aleksis',
    photo: '/images/team-member-1.png',
    github: 'https://github.com/AleksisVejs',
    handle: '@AleksisVejs',
  },
  {
    key: 'viesturs',
    photo: '/images/team-member-2.png',
    github: 'https://github.com/22DPVEmer',
    handle: '@22DPVEmer',
  },
])
</script>

<template>
  <section id="studio" class="relative scroll-mt-24 py-20 sm:py-24">
    <div class="container-page">
      <!-- Intro -->
      <header class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="flex flex-col gap-4">
          <span class="section-label reveal">{{ t('about.label', lang) }}</span>
          <h2
            class="reveal heading-display max-w-3xl text-balance text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]"
            style="transition-delay: 60ms"
          >
            {{ t('about.title', lang) }}
          </h2>
        </div>
        <p
          class="reveal max-w-md text-[15px] leading-relaxed text-ink-200"
          style="transition-delay: 120ms"
        >
          {{ t('about.description', lang) }}
        </p>
      </header>

      <!-- Principles -->
      <div class="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-3">
        <div
          v-for="(p, i) in principles"
          :key="p.title"
          class="reveal flex flex-col gap-3 bg-ink-900 p-8"
          :style="`transition-delay: ${i * 80}ms`"
        >
          <span class="font-mono text-2xs uppercase tracking-[0.18em] text-accent-300">
            / 0{{ i + 1 }}
          </span>
          <h3 class="font-display text-[20px] font-medium text-ink-0">{{ p.title }}</h3>
          <p class="text-[14px] leading-relaxed text-ink-200">{{ p.body }}</p>
        </div>
      </div>

      <!-- Team -->
      <div class="mt-20">
        <div class="reveal mb-8 flex items-end justify-between">
          <h3 class="font-display text-[22px] font-medium text-ink-0">
            {{ t('about.team.heading', lang) }}
          </h3>
          <span class="font-mono text-2xs uppercase tracking-[0.2em] text-ink-300">
            02 / {{ team.length.toString().padStart(2, '0') }}
          </span>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <article
            v-for="(member, i) in team"
            :key="member.key"
            class="reveal card card-hover group flex flex-col p-6 sm:p-8"
            :style="`transition-delay: ${i * 100}ms`"
          >
            <div class="flex items-start gap-5">
              <div class="relative flex-shrink-0">
                <div
                  class="absolute inset-0 rounded-2xl bg-accent-400/20 blur-xl transition-opacity duration-500 group-hover:opacity-80"
                  aria-hidden="true"
                ></div>
                <img
                  :src="member.photo"
                  :alt="t(`about.team.members.${member.key}.name`, lang)"
                  class="relative h-20 w-20 rounded-2xl border border-white/[0.08] object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-1 flex-col">
                <h4 class="font-display text-[20px] font-medium text-ink-0">
                  {{ t(`about.team.members.${member.key}.name`, lang) }}
                </h4>
                <span class="mt-0.5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-300">
                  {{ t('about.team.role', lang) }}
                </span>
                <p class="mt-3 text-[14px] leading-relaxed text-ink-200">
                  {{ t(`about.team.members.${member.key}.bio`, lang) }}
                </p>
              </div>
            </div>

            <div class="mt-6 border-t border-white/[0.05] pt-5">
              <ul class="flex flex-wrap gap-1.5">
                <li
                  v-for="skill in t(`about.team.members.${member.key}.skills`, lang)"
                  :key="skill"
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-200"
                >
                  {{ skill }}
                </li>
              </ul>

              <a
                :href="member.github"
                target="_blank"
                rel="noopener noreferrer"
                class="link-arrow mt-5"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.58.1.79-.25.79-.56v-2c-3.24.7-3.92-1.56-3.92-1.56-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.04 1.8 2.74 1.28 3.4.98.1-.77.41-1.28.74-1.58-2.59-.3-5.31-1.3-5.31-5.78 0-1.28.46-2.32 1.21-3.14-.12-.3-.53-1.5.11-3.12 0 0 .99-.32 3.24 1.2a11.2 11.2 0 0 1 5.9 0c2.24-1.52 3.23-1.2 3.23-1.2.65 1.62.24 2.82.12 3.12.75.82 1.21 1.86 1.21 3.14 0 4.49-2.73 5.47-5.33 5.76.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
                  />
                </svg>
                {{ member.handle }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
