<template>
  <nav
    class="fixed top-0 left-0 right-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md py-4 px-6 z-50"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-primary dark:text-teal-400">
        Fraksis
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link to="/" class="nav-link">Home</router-link>
        <button class="btn-primary">Hire Us</button>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <sun-icon v-if="isDark" class="w-6 h-6 text-gray-100" />
          <moon-icon v-else class="w-6 h-6 text-gray-900" />
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
        <bars-3-icon class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 w-full bg-white dark:bg-gray-900 shadow-lg"
    >
      <div class="px-6 py-4 space-y-4">
        <router-link to="/" class="block nav-link">Home</router-link>
        <button class="w-full btn-primary">Hire Us</button>
        <button
          @click="toggleDarkMode"
          class="w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center"
        >
          <sun-icon v-if="isDark" class="w-6 h-6 text-gray-100" />
          <moon-icon v-else class="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', isDark.value)
}

onMounted(() => {
  const darkMode = localStorage.getItem('darkMode')
  if (darkMode === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>
