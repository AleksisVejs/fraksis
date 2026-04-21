<script setup>
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)

onErrorCaptured((err, instance, info) => {
  console.error('Error caught by boundary:', err)
  error.value = { message: err.message, stack: err.stack, info }
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', { description: err.message, fatal: false })
  }
  return false
})

const reloadPage = () => window.location.reload()
const goHome = () => {
  error.value = null
  window.location.href = '/'
}
</script>

<template>
  <div
    v-if="error"
    class="flex min-h-screen items-center justify-center bg-ink-900 px-6 text-ink-100"
  >
    <div class="w-full max-w-xl">
      <span class="font-mono text-2xs uppercase tracking-[0.18em] text-signal-rose">
        Runtime error
      </span>
      <h1 class="mt-4 font-display text-[32px] tracking-tight text-ink-0">
        Something went wrong.
      </h1>
      <p class="mt-3 text-[15px] leading-relaxed text-ink-200">
        We apologise for the interruption. Try refreshing or returning to the homepage.
      </p>
      <pre
        class="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-ink-800/60 p-4 font-mono text-[12px] text-ink-200"
      >{{ error.message }}</pre>
      <div class="mt-6 flex flex-wrap gap-3">
        <button @click="reloadPage" class="btn-primary focus-ring">Refresh</button>
        <button @click="goHome" class="btn-ghost focus-ring">Go home</button>
      </div>
    </div>
  </div>

  <slot v-else />
</template>
