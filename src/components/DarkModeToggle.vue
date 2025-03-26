<template>
  <button
    @click="toggleDarkMode"
    class="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-black shadow-lg hover:shadow-xl transition-all duration-300 z-50 border border-primary/20"
  >
    <sun-icon v-if="isDark" class="w-6 h-6 text-primary" />
    <moon-icon v-else class="w-6 h-6 text-primary" />
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', isDark.value)
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
