<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

function toggleProject(index) {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="projects">
    <div class="releases-header reveal">
      <p class="releases-desc">A few of the things I have shipped recently. Each one is a full-stack effort — design, engineering, infrastructure.</p>
    </div>

    <!-- 001 -->
    <div class="project-row" :class="{ active: activeIndex === 0 }" @click="toggleProject(0)">
      <div class="project-top">
        <div class="project-index"><span><span class="slash">/</span>001</span><span style="font-size:9px">2026</span></div>
        <div>
          <div class="project-name">Wikilink <span class="status live">Live</span></div>
          <div class="project-tagline">Product &amp; Engineering</div>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="project-expand">
        <div class="project-inner">
          <div>
            <p class="project-desc">A browser-based Wikipedia racing game with real-time multiplayer lobbies, leaderboards, and daily challenges. Race from one article to another using only internal links.</p>
            <div class="project-stack">
              <span class="stack-chip">Vue 3</span>
              <span class="stack-chip">TypeScript</span>
              <span class="stack-chip">Node.js</span>
              <span class="stack-chip">WebSockets</span>
            </div>
          </div>
          <div class="project-cta">
            <a href="https://wikilink.fraksis.com/" target="_blank" class="cta-link">Open site →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 002 -->
    <div class="project-row" :class="{ active: activeIndex === 1 }" @click="toggleProject(1)">
      <div class="project-top">
        <div class="project-index"><span><span class="slash">/</span>002</span><span style="font-size:9px">2026</span></div>
        <div>
          <div class="project-name">Blossfechten Riga <span class="status live">Live</span></div>
          <div class="project-tagline">Design &amp; Engineering</div>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="project-expand">
        <div class="project-inner">
          <div>
            <p class="project-desc">Website for Blossfechten Riga, a HEMA club based in Riga.</p>
            <div class="project-stack">
              <span class="stack-chip">PHP</span>
              <span class="stack-chip">Vue</span>
              <span class="stack-chip">Blade</span>
              <span class="stack-chip">JavaScript</span>
            </div>
          </div>
          <div class="project-cta">
            <a href="https://blossfechten.fraksis.com/" target="_blank" class="cta-link">Open site →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 003 -->
    <div class="project-row" :class="{ active: activeIndex === 2 }" @click="toggleProject(2)">
      <div class="project-top">
        <div class="project-index"><span><span class="slash">/</span>003</span><span style="font-size:9px">2025</span></div>
        <div>
          <div class="project-name">Riginspect <span class="status live">Live</span></div>
          <div class="project-tagline">Design &amp; Engineering</div>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="project-expand">
        <div class="project-inner">
          <div>
            <p class="project-desc">Equipment inspection platform. Client workspaces, automated scheduling, document storage, and notifications — the operational backbone for inspection businesses.</p>
            <div class="project-stack">
              <span class="stack-chip">Laravel</span>
              <span class="stack-chip">Vue 3</span>
              <span class="stack-chip">Inertia.js</span>
              <span class="stack-chip">PostgreSQL</span>
            </div>
          </div>
          <div class="project-cta">
            <a href="https://riginspect.net" target="_blank" class="cta-link">Open site →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 004 -->
    <div class="project-row" :class="{ active: activeIndex === 3 }" @click="toggleProject(3)">
      <div class="project-top">
        <div class="project-index"><span><span class="slash">/</span>004</span><span style="font-size:9px">2024</span></div>
        <div>
          <div class="project-name">ilzebrenn.com <span class="status live">Live</span></div>
          <div class="project-tagline">Design &amp; Front-end</div>
        </div>
        <div class="expand-icon">+</div>
      </div>
      <div class="project-expand">
        <div class="project-inner">
          <div>
            <p class="project-desc">A quiet, typography-first portfolio for an artist and photographer. Built to let the work breathe.</p>
            <div class="project-stack">
              <span class="stack-chip">Vue 3</span>
              <span class="stack-chip">Vite</span>
              <span class="stack-chip">Tailwind</span>
            </div>
          </div>
          <div class="project-cta">
            <a href="https://ilzebrenn.com" target="_blank" class="cta-link">Open site →</a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
