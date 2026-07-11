<script setup>
import { computed, ref } from 'vue'
import saunaspeakShot from '../assets/projects/saunaspeak.webp'
import wikilinkShot from '../assets/projects/wikilink.webp'
import blossfechtenShot from '../assets/projects/blossfechten.webp'
import riginspectShot from '../assets/projects/riginspect.webp'
import ilzebrennShot from '../assets/projects/ilzebrenn.webp'
import bannerlordShot from '../assets/projects/bannerlord.webp'

const activeIndex = ref(null)

function toggleProject(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

const projects = [
  {
    name: 'SaunaSpeak',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Product & Engineering',
    description:
      'A spoken-Finnish learning platform built around short daily sessions — shadowing, spaced repetition, speech recognition, and sauna-themed ranks. Installable as an offline-ready PWA.',
    highlight: 'Try-a-sentence demo, no signup — audio-first from the first tap',
    stack: ['Laravel 11', 'Vue 3', 'Pinia', 'MySQL'],
    image: saunaspeakShot,
    href: 'https://saunaspeak.fraksis.com/',
    cta: 'Open site →',
    repo: 'https://github.com/AleksisVejs/SaunaSpeak',
  },
  {
    name: 'Wikilink',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Product & Engineering',
    description:
      'A browser-based Wikipedia racing game with real-time multiplayer lobbies, leaderboards, and daily challenges. Race from one article to another using only internal links.',
    highlight: 'Daily challenges, PvP lobbies for up to 8 players, XP progression',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'WebSockets'],
    image: wikilinkShot,
    href: 'https://wikilink.fraksis.com/',
    cta: 'Open site →',
  },
  {
    name: 'Blossfechten Riga',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Design & Engineering',
    description:
      'Bilingual EN/LV site for a historical European martial arts club in Rīga, practicing longsword fencing after Joachim Meyer’s 1570 treatise.',
    highlight: 'Member accounts, forum and training calendar built in',
    stack: ['PHP', 'Vue', 'Blade', 'JavaScript'],
    image: blossfechtenShot,
    href: 'https://blossfechtenriga.com/',
    cta: 'Open site →',
  },
  {
    name: 'Riginspect',
    year: 2025,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Design & Engineering',
    description:
      'Equipment inspection platform. Client workspaces, automated scheduling, document storage, and notifications — the operational backbone for inspection businesses.',
    highlight: 'Role-based workspaces — client, admin, technician — with a public demo',
    stack: ['Laravel', 'Vue 3', 'Inertia.js', 'PostgreSQL'],
    image: riginspectShot,
    href: 'https://riginspect.net',
    cta: 'Open site →',
  },
  {
    name: 'ilzebrenn.com',
    year: 2024,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Design & Front-end',
    description:
      'A quiet, typography-first portfolio for textile artist Ilze Brenn — installations, light objects and sculptural works. Built to let the work breathe.',
    highlight: 'Bilingual LV/EN, artwork-first layout',
    stack: ['Vue 3', 'Vite', 'Tailwind'],
    image: ilzebrennShot,
    href: 'https://ilzebrenn.com',
    cta: 'Open site →',
  },
  {
    name: 'Bannerlord Mod Extractor',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Desktop tooling',
    description:
      'A lightweight Windows tool that extracts mod archives (zip, 7z, rar) and installs them straight into the Mount & Blade II: Bannerlord Modules folder — with mod validation and auto-detected install paths.',
    highlight: 'Single executable, no installer — published on Nexus Mods',
    stack: ['C#', '.NET 8', 'Windows'],
    image: bannerlordShot,
    href: 'https://www.nexusmods.com/mountandblade2bannerlord/mods/10269',
    cta: 'Nexus Mods →',
    repo: 'https://github.com/AleksisVejs/BannerlordModExtractor',
  },
]

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name)),
)
</script>

<template>
  <section id="projects" aria-label="Selected work">
    <div class="releases-header reveal">
      <p class="releases-desc">A few of the things I have shipped recently. Each one is a full-stack effort — design, engineering, infrastructure.</p>
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
          <span class="project-tagline">{{ project.tagline }}</span>
        </span>
        <span class="expand-icon" aria-hidden="true">+</span>
      </button>
      <div :id="`project-panel-${index}`" class="project-expand">
        <div class="project-inner">
          <div>
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
                loading="lazy"
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
