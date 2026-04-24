<script setup>
const items = [
  'Vue 3','TypeScript','Laravel','Node.js','PostgreSQL','Tailwind CSS',
  'Inertia.js','WebSockets','PHP','Vite','Git','Docker','REST APIs','MySQL','Figma','Linux',
]
const loop = [...items, ...items]
</script>

<template>
  <div id="marquee-section">
    <div class="marquee-track">
      <div v-for="(item, i) in loop" :key="`${item}-${i}`" class="marquee-item">
        <span class="marquee-dot"></span>{{ item }}
      </div>
    </div>
  </div>
</template>
