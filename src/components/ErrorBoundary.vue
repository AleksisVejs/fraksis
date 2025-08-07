<template>
  <div v-if="error" class="error-boundary">
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
      <div class="mb-8">
        <div class="text-6xl font-mono text-primary mb-4">⚠️</div>
        <h1 class="text-3xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p class="text-gray-400 mb-8">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
      </div>

      <div class="bg-secondary/50 rounded-lg p-6 mb-8 text-left">
        <h2 class="text-lg font-mono text-primary mb-4">Error Details:</h2>
        <pre class="text-sm text-gray-300 overflow-x-auto">{{ error.message }}</pre>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="reloadPage"
          class="px-6 py-3 bg-primary text-black font-mono rounded-lg hover:bg-primary/90 transition-colors"
        >
          Refresh Page
        </button>
        <button
          @click="goHome"
          class="px-6 py-3 bg-secondary text-primary font-mono rounded-lg hover:bg-secondary/80 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>

  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const error = ref(null)

onErrorCaptured((err, instance, info) => {
  console.error('Error caught by boundary:', err)
  console.error('Component:', instance)
  console.error('Info:', info)

  error.value = {
    message: err.message,
    stack: err.stack,
    info: info,
  }

  // Log to analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: err.message,
      fatal: false,
    })
  }

  return false // Prevent error from propagating
})

const reloadPage = () => {
  window.location.reload()
}

const goHome = () => {
  error.value = null
  router.push('/')
}
</script>

<style scoped>
.error-boundary {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
}
</style>
