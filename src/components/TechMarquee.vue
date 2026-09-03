<script setup>
const items = [
  'Vue 3','Laravel','PHP 8.2+','Tailwind CSS','Pinia','Vuex','Vite',
  'MySQL 8','REST APIs','Sanctum','2FA','Pusher','Laravel Echo','Offline PWA',
  'PHPUnit','Vitest','Git','GitHub Actions','Figma','Linux',
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
