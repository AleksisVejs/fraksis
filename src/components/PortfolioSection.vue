<template>
  <section id="portfolio" class="section relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <h2
        class="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-10 sm:mb-16 relative inline-block animate-on-scroll font-mono"
      >
        <span class="text-primary relative group">
          {{ translations[language].title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <!-- Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        <!-- Featured Project -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.2s"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-secondary p-4 sm:p-8 h-full border border-primary/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                <div class="font-mono text-base sm:text-lg text-primary">&lt;/&gt;</div>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-mono">
                {{ translations[language].featuredProject.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ translations[language].featuredProject.description }}
              </p>

              <!-- Project Image -->
              <div class="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                <div class="relative w-full pt-[56.25%]">
                  <img
                    src="/images/ilzebrenn-preview.jpg"
                    alt="Ilze Brenn Portfolio"
                    class="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              <div class="mt-4 flex justify-end">
                <a
                  href="https://ilzebrenn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-primary text-black font-mono rounded-md text-sm transform hover:scale-105 transition-transform hover:shadow-lg inline-flex items-center"
                >
                  <span>{{ translations[language].buttons.viewLive }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.4s"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-secondary p-4 sm:p-8 h-full border border-primary/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                <div class="font-mono text-base sm:text-lg text-primary">&lt;/&gt;</div>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-mono">
                {{ translations[language].secondProject.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ translations[language].secondProject.description }}
              </p>

              <!-- VS Code Editor Style Box -->
              <div class="rounded-lg overflow-hidden border border-gray-700 bg-secondary/80">
                <!-- Editor Tab Bar -->
                <div class="bg-secondary flex items-center px-2 py-1 border-b border-gray-700">
                  <div
                    class="bg-secondary flex items-center px-2 py-1 border-b-2 border-primary text-white"
                  >
                    <span class="text-xs font-mono mr-1 text-primary">App.vue</span>
                    <button class="text-gray-400 hover:text-white text-xs">×</button>
                  </div>
                  <div class="text-xs text-gray-500 font-mono ml-auto hidden sm:flex items-center">
                    <span class="mr-3">Vue</span>
                    <span>UTF-8</span>
                  </div>
                </div>

                <!-- Mobile-optimized Code Content -->
                <div class="p-2 sm:p-4 text-xs sm:text-sm font-mono overflow-x-auto">
                  <div class="whitespace-nowrap">
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">1</div>
                      <div>
                        <span class="text-syntax-tag">&lt;template&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">2</div>
                      <div>
                        <span class="text-syntax-tag">&lt;div</span>
                        <span class="text-syntax-variable">class</span>=<span
                          class="text-syntax-string"
                          >"app"</span
                        >
                        <span class="text-syntax-tag">&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">3</div>
                      <div>
                        <span class="text-syntax-tag">&lt;Header</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">4</div>
                      <div>
                        <span class="text-syntax-tag">&lt;HeroSection</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">5</div>
                      <div>
                        <span class="text-syntax-tag">&lt;ServicesSection</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">6</div>
                      <div>
                        <span class="text-syntax-tag">&lt;PortfolioSection</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">7</div>
                      <div>
                        <span class="text-syntax-tag">&lt;AboutSection</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">8</div>
                      <div>
                        <span class="text-syntax-tag">&lt;Footer</span>
                        <span class="text-syntax-variable">:language</span>=<span
                          class="text-syntax-string"
                          >"language"</span
                        >
                        <span class="text-syntax-tag">/&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">9</div>
                      <div>
                        <span class="text-syntax-tag">&lt;/div&gt;</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Status Bar - Simplified on mobile -->
                <div
                  class="bg-primary/10 text-xs font-mono text-gray-400 px-2 sm:px-3 py-1 flex items-center text-[10px] sm:text-xs"
                >
                  <div class="mr-1 sm:mr-2">
                    <span class="text-primary">✓</span>
                    <span class="hidden sm:inline">Deployed</span>
                  </div>
                  <div class="ml-auto flex space-x-2 sm:space-x-4">
                    <span class="hidden xs:inline">Process complete</span>
                    <span>bash</span>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex justify-end">
                <a
                  href="/"
                  class="px-4 py-2 bg-primary text-black font-mono rounded-md text-sm transform hover:scale-105 transition-transform hover:shadow-lg inline-flex items-center"
                >
                  <span>{{ translations[language].buttons.thisSite }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Project - Full Width -->
      <div
        class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll mt-8 sm:mt-12"
        style="animation-delay: 0.6s"
      >
        <div
          class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-secondary p-4 sm:p-8 h-full border border-primary/20"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="relative z-10">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300"
            >
              <div class="font-mono text-base sm:text-lg text-primary">&lt;/&gt;</div>
            </div>
            <div class="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div class="w-full sm:w-1/2">
                <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-mono">
                  {{ translations[language].thirdProject.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {{ translations[language].thirdProject.description }}
                </p>

                <!-- Project Image -->
                <div class="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                  <div class="relative w-full pt-[56.25%]">
                    <img
                      src="/images/riginspect-preview.jpg"
                      alt="RigInspect Preview"
                      class="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              </div>

              <div class="hidden sm:block sm:w-1/2">
                <div
                  class="rounded-lg overflow-hidden border border-gray-700 bg-secondary/80 h-full"
                >
                  <!-- Terminal Header -->
                  <div class="bg-secondary flex items-center px-2 py-1 border-b border-gray-700">
                    <div
                      class="bg-secondary flex items-center px-2 py-1 border-b-2 border-primary text-white"
                    >
                      <span class="text-xs font-mono mr-1 text-primary">terminal</span>
                      <button class="text-gray-400 hover:text-white text-xs">×</button>
                    </div>
                  </div>

                  <!-- Terminal Content -->
                  <div class="p-4 font-mono text-xs sm:text-sm h-full">
                    <div class="flex items-center mb-2">
                      <span class="text-syntax-variable">user</span>@<span
                        class="text-syntax-variable"
                        >riginspect</span
                      >:<span class="text-syntax-string">~$</span>
                      <span class="text-white">php artisan serve --production</span>
                    </div>
                    <div class="text-white mb-1">Starting Laravel production server:</div>
                    <div class="text-green-500 mb-2">
                      <span class="text-blue-400 underline">https://riginspect.net</span>
                    </div>
                    <div class="text-white mb-1">
                      [Sat Mar 29 15:28:24 2025] PHP 8.2.10 Production Server started
                    </div>
                    <div class="flex items-center mb-1">
                      <span class="animate-pulse">▌</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <a
                href="https://riginspect.net"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-primary text-black font-mono rounded-md text-sm transform hover:scale-105 transition-transform hover:shadow-lg inline-flex items-center"
              >
                <span>{{ translations[language].buttons.viewLive }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements - Hide on small screens -->
    <div
      class="absolute top-1/4 right-10 font-mono text-2xl text-primary/20 animate-pulse hidden sm:block"
    >
      { }
    </div>
    <div
      class="absolute bottom-1/4 left-10 font-mono text-2xl text-primary/20 animate-pulse hidden sm:block"
      style="animation-delay: 1s"
    >
      &lt;/&gt;
    </div>
    <div
      class="absolute top-3/4 left-1/4 font-mono text-2xl text-primary/20 animate-pulse hidden sm:block"
      style="animation-delay: 2s"
    >
      ( )
    </div>
  </section>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { currentLanguage: language } = storeToRefs(languageStore)

const translations = {
  en: {
    title: 'Our Work',
    buttons: {
      viewLive: 'View Live',
      thisSite: 'This Site',
      comingSoon: 'Coming Soon',
    },
    featuredProject: {
      title: 'ilzebrenn.com',
      description: 'A minimalist portfolio website showcasing artistic works and photography',
    },
    secondProject: {
      title: 'Fraksis',
      description: 'Our own website with a modern code-themed interface and responsive design',
    },
    thirdProject: {
      title: 'Riginspect',
      description:
        'Equipment inspection management system for businesses with client management, automated notifications, and document handling capabilities',
    },
  },
  lv: {
    title: 'Mūsu Darbi',
    buttons: {
      viewLive: 'Skatīt',
      thisSite: 'Šī Vietne',
      comingSoon: 'Drīzumā',
    },
    featuredProject: {
      title: 'ilzebrenn.com',
      description: 'Minimālistiska portfolio vietne mākslinieka darbu un fotogrāfiju izstāšanai',
    },
    secondProject: {
      title: 'Fraksis',
      description: 'Mūsu mājaslapa ar modernu koda tēmas interfeisu un reaģējošu dizainu',
    },
    thirdProject: {
      title: 'Riginspect',
      description:
        'Aprīkojuma pārbaudes pārvaldības sistēma uzņēmumu vajadzībām ar klientu pārvaldību, automatizētiem paziņojumiem un dokumentu apstrādes iespējām',
    },
  },
}
</script>

<style scoped>
/* Custom syntax highlighting */
.text-syntax-variable {
  @apply text-blue-400;
}
.text-syntax-string {
  @apply text-green-400;
}
.text-syntax-comment {
  @apply text-gray-500;
}
.text-syntax-keyword {
  @apply text-purple-400;
}
.text-syntax-function {
  @apply text-yellow-400;
}
.text-syntax-tag {
  @apply text-primary;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom class for tiny screens */
@media (max-width: 380px) {
  .xs\:inline {
    display: inline;
  }
}
</style>
