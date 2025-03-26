<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-primary/20">
      <div class="overflow-hidden whitespace-nowrap py-4">
        <div class="inline-block animate-scroll">
          <div class="inline-flex space-x-8 px-4">
            <router-link
              v-for="(item, index) in navItems"
              :key="index"
              :to="item.path"
              class="text-lg font-medium hover:text-primary transition-colors duration-300"
              :class="{ 'text-primary': currentPath === item.path }"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<style scoped>
.animate-scroll {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
