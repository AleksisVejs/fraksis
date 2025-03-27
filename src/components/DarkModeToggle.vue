<template>
  <!-- Dark mode toggle removed -->
</template>

<script setup>
import { onMounted } from 'vue'

// Always use dark mode
onMounted(() => {
  document.documentElement.classList.add('dark')
  localStorage.setItem('darkMode', 'true')
})
</script>
