<template>
  <main class="flex-1 flex flex-col items-center justify-center py-20 px-6">
    <div class="max-w-7xl mx-auto w-full">
      <h1 class="text-4xl md:text-6xl font-bold text-center mb-16">
        <span class="text-primary">Our</span> Work
      </h1>

      <!-- Featured Project -->
      <div class="mb-24">
        <a href="https://ilzebrenn.com" target="_blank" class="group block">
          <div class="relative overflow-hidden rounded-2xl bg-black aspect-[16/9] mb-6">
            <img
              src="/images/ilzebrenn-preview.jpg"
              alt="Ilze Brenn Portfolio"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <h3 class="text-2xl font-bold text-white mb-2">Ilze Brenn Portfolio</h3>
                <p class="text-white/80">A stunning portfolio website for a talented artist</p>
                <div class="flex gap-2 mt-4">
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Vue.js</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Tailwind</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >GSAP</span
                  >
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <!-- Other Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project Card 1 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl bg-black aspect-[4/3] mb-6">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-xl font-bold text-white mb-2">E-commerce Website</h3>
                <p class="text-white/80 text-sm">A full-fledged store built with Vue & Laravel</p>
                <div class="flex gap-2 mt-4">
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Vue.js</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Laravel</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Tailwind</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="group">
          <div class="relative overflow-hidden rounded-2xl bg-black aspect-[4/3] mb-6">
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-xl font-bold text-white mb-2">Dashboard App</h3>
                <p class="text-white/80 text-sm">A comprehensive admin dashboard with analytics</p>
                <div class="flex gap-2 mt-4">
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Vue.js</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Tailwind</span
                  >
                  <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >Chart.js</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.portfolio {
  padding: 2rem;
}
</style>
