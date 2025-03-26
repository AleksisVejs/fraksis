<template>
  <main class="flex-1 flex flex-col items-center justify-center py-20 px-6">
    <div class="max-w-7xl mx-auto w-full">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h1>

      <!-- Team Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-center mb-8">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Team Member 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div
              class="aspect-square bg-gray-200 dark:bg-gray-700 rounded-full mb-4 mx-auto max-w-[200px]"
            ></div>
            <h3 class="text-xl font-semibold text-center mb-2">Aleksis Aleksandrs Vējš</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mb-4">Full Stack Developer</p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >Vue.js</span
              >
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >Node.js</span
              >
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >Laravel</span
              >
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div
              class="aspect-square bg-gray-200 dark:bg-gray-700 rounded-full mb-4 mx-auto max-w-[200px]"
            ></div>
            <h3 class="text-xl font-semibold text-center mb-2">Viesturs Emerbergs</h3>
            <p class="text-gray-600 dark:text-gray-300 text-center mb-4">Frontend Developer</p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >Vue.js</span
              >
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >React</span
              >
              <span
                class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >Tailwind</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section>
        <h2 class="text-2xl font-semibold text-center mb-8">Our Expertise</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <h3 class="font-semibold mb-2">Frontend</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Vue.js, React, Tailwind CSS</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <h3 class="font-semibold mb-2">Backend</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Node.js, Laravel, PHP</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <h3 class="font-semibold mb-2">Database</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">MySQL, PostgreSQL, MongoDB</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <h3 class="font-semibold mb-2">Tools</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Git, Docker, AWS</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
// No additional logic needed for now
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
