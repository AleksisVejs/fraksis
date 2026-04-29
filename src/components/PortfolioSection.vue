<script setup>
import { computed, ref } from 'vue'

const activeIndex = ref(null)

function toggleProject(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}

const projects = [
  {
    name: 'Wikilink',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Product & Engineering',
    description:
      'A browser-based Wikipedia racing game with real-time multiplayer lobbies, leaderboards, and daily challenges. Race from one article to another using only internal links.',
    stack: ['Vue 3', 'TypeScript', 'Node.js', 'WebSockets'],
    href: 'https://wikilink.fraksis.com/',
    cta: 'Open site →',
  },
  {
    name: 'Blossfechten Riga',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Design & Engineering',
    description: 'Website for Blossfechten Riga, a HEMA club based in Riga.',
    stack: ['PHP', 'Vue', 'Blade', 'JavaScript'],
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
    stack: ['Laravel', 'Vue 3', 'Inertia.js', 'PostgreSQL'],
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
      'A quiet, typography-first portfolio for an artist and photographer. Built to let the work breathe.',
    stack: ['Vue 3', 'Vite', 'Tailwind'],
    href: 'https://ilzebrenn.com',
    cta: 'Open site →',
  },
  {
    name: 'Bannerlord Mod',
    year: 2026,
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Community project',
    description:
      'A Mount & Blade II: Bannerlord mod published on Nexus Mods for the game community.',
    stack: ['C#', 'Bannerlord API', 'XML'],
    href: 'https://www.nexusmods.com/mountandblade2bannerlord/mods/10269',
    cta: 'Open page →',
  },
]

const sortedProjects = computed(() =>
  [...projects].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name)),
)
</script>

<template>
  <section id="projects">
    <div class="releases-header reveal">
      <p class="releases-desc">A few of the things I have shipped recently. Each one is a full-stack effort — design, engineering, infrastructure.</p>
    </div>

    <div
      v-for="(project, index) in sortedProjects"
      :key="`${project.name}-${project.year}`"
      class="project-row"
      :class="{ active: activeIndex === index }"
      @click="toggleProject(index)"
    >
      <div class="project-top">
        <div class="project-index"><span><span class="slash">/</span>{{ String(index + 1).padStart(3, '0') }}</span><span style="font-size:9px">{{ project.year }}</span></div>
        <div>
          <div class="project-name">{{ project.name }} <span class="status" :class="project.status">{{ project.statusLabel }}</span></div>
          <div class="project-tagline">{{ project.tagline }}</div>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="project-expand">
        <div class="project-inner">
          <div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-stack">
              <span v-for="tech in project.stack" :key="`${project.name}-${tech}`" class="stack-chip">{{ tech }}</span>
            </div>
          </div>
          <div class="project-cta">
            <a :href="project.href" target="_blank" class="cta-link">{{ project.cta }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
