<script setup>
import { computed, ref } from 'vue'
import saunaspeakShot from '../assets/projects/saunaspeak.webp'
import blossfechtenShot from '../assets/projects/blossfechten.webp'
import riginspectShot from '../assets/projects/riginspect.webp'
import ilzebrennShot from '../assets/projects/ilzebrenn.webp'

// The first (most recent) project starts open — a visitor skimming for 20
// seconds should land on real work, not a row of collapsed names.
const activeIndex = ref(0)

function toggleProject(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

const projects = [
  {
    name: 'SaunaSpeak',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    kind: 'Own product',
    tagline: 'Product & Engineering',
    description:
      'A spoken-Finnish learning platform built around short daily sessions — shadowing, spaced repetition, speech recognition, and sauna-themed ranks. Installable as an offline-ready PWA.',
    outcome:
      'Runs offline as an installable PWA, so a daily session never depends on a connection.',
    highlight: 'Try-a-sentence demo, no signup — audio-first from the first tap',
    stack: ['Laravel 11', 'Vue 3', 'Pinia', 'MySQL'],
    image: saunaspeakShot,
    href: 'https://saunaspeak.com/',
    cta: 'Open site →',
  },
  {
    name: 'Blossfechten Riga',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    kind: 'Client project',
    client: 'Blossfechten Rīga — HEMA club',
    tagline: 'Design & Engineering',
    description:
      'Bilingual EN/LV site for a historical European martial arts club in Rīga, practicing longsword fencing after Joachim Meyer’s 1570 treatise.',
    outcome:
      'The club runs member sign-ups, its forum and its training calendar from one bilingual site instead of scattered channels.',
    highlight: 'Member accounts, forum and training calendar built in',
    stack: ['Laravel 13', 'Vue 3', 'Pinia', 'Tailwind', 'MySQL'],
    image: blossfechtenShot,
    href: 'https://blossfechtenriga.com/',
    cta: 'Open site →',
  },
  {
    name: 'Riginspect',
    year: 2025,
    status: 'live',
    statusLabel: 'Live',
    kind: 'Own product',
    tagline: 'Product & Engineering',
    description:
      'Equipment inspection platform. Client workspaces, automated scheduling, document storage, and notifications — the operational backbone for inspection businesses.',
    outcome:
      'Inspectors keep working offline in the field, equipment carries QR tags, and finished inspections export straight to PDF and Excel.',
    highlight: 'Role-based workspaces, two-factor login and live updates — with a public demo',
    stack: ['Laravel 12', 'Vue 3', 'Vuex', 'Tailwind 4', 'MySQL 8', 'Pusher'],
    image: riginspectShot,
    href: 'https://riginspect.net',
    cta: 'Open site →',
  },
  {
    name: 'ilzebrenn.com',
    year: 2024,
    status: 'live',
    statusLabel: 'Live',
    kind: 'Client project',
    client: 'Ilze Brenn — textile artist',
    tagline: 'Design & Front-end',
    description:
      'A quiet, typography-first portfolio for textile artist Ilze Brenn — installations, light objects and sculptural works. Built to let the work breathe.',
    outcome:
      'Her full catalogue of installations and objects now lives bilingually under her own domain, not a social profile.',
    highlight: 'Bilingual LV/EN, artwork-first layout',
    stack: ['Vue 3', 'Vite', 'Vue I18n', 'Vue Router'],
    image: ilzebrennShot,
    href: 'https://ilzebrenn.com',
    cta: 'Open site →',
  },
]

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name)),
)
</script>

<template>
  <section id="projects" aria-label="Selected work">
    <div class="releases-header reveal">
      <p class="releases-desc">Four sites running in production today — two built for clients, two products of my own. All of them mine end to end: design, engineering, infrastructure.</p>
    </div>

    <div
      v-for="(project, index) in sortedProjects"
      :key="`${project.name}-${project.year}`"
      class="project-row"
      :class="{ active: activeIndex === index }"
    >
      <button
        type="button"
        class="project-top"
        :aria-expanded="activeIndex === index"
        :aria-controls="`project-panel-${index}`"
        @click="toggleProject(index)"
      >
        <span class="project-index"><span><span class="slash">/</span>{{ String(index + 1).padStart(3, '0') }}</span><span style="font-size:9px">{{ project.year }}</span></span>
        <span>
          <span class="project-name">{{ project.name }} <span class="status" :class="project.status">{{ project.statusLabel }}</span></span>
          <span class="project-tagline">
            <span class="project-kind" :class="{ own: project.kind === 'Own product' }">{{ project.kind }}</span>
            <span class="tagline-sep" aria-hidden="true">·</span>{{ project.tagline }}
          </span>
        </span>
        <span class="expand-icon" aria-hidden="true">+</span>
      </button>
      <div :id="`project-panel-${index}`" class="project-expand">
        <div class="project-inner">
          <div>
            <p v-if="project.client" class="project-client">Built for <strong>{{ project.client }}</strong></p>
            <p v-if="project.outcome" class="project-outcome">{{ project.outcome }}</p>
            <p class="project-desc">{{ project.description }}</p>
            <p v-if="project.highlight" class="project-highlight"><span aria-hidden="true">→ </span>{{ project.highlight }}</p>
            <div class="project-stack">
              <span v-for="tech in project.stack" :key="`${project.name}-${tech}`" class="stack-chip">{{ tech }}</span>
            </div>
          </div>
          <div class="project-side">
            <a :href="project.href" target="_blank" rel="noopener" class="project-shot-link" :tabindex="activeIndex === index ? 0 : -1">
              <img
                :src="project.image"
                :alt="`Screenshot of ${project.name}`"
                class="project-shot"
                width="1280"
                height="800"
                :loading="index === 0 ? 'eager' : 'lazy'"
                decoding="async"
              />
            </a>
            <div class="project-cta">
              <a :href="project.href" target="_blank" rel="noopener" class="cta-link" :tabindex="activeIndex === index ? 0 : -1">{{ project.cta }}</a>
              <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="cta-link secondary" :tabindex="activeIndex === index ? 0 : -1">GitHub →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
