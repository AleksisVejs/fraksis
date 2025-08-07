<template>
  <section id="services" class="section relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24">
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
        <!-- Web Development -->
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
                {{ translations[language].webDev.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ translations[language].webDev.description }}
              </p>

              <!-- VS Code Editor Style Box -->
              <div class="rounded-lg overflow-hidden border border-gray-700 bg-secondary/80">
                <!-- Editor Tab Bar -->
                <div class="bg-secondary flex items-center px-2 py-1 border-b border-gray-700">
                  <div
                    class="bg-secondary flex items-center px-2 py-1 border-b-2 border-primary text-white"
                  >
                    <span class="text-xs font-mono mr-1 text-primary">app.js</span>
                    <button class="text-gray-400 hover:text-white text-xs">×</button>
                  </div>
                  <div class="text-xs text-gray-500 font-mono ml-auto hidden sm:flex items-center">
                    <span class="mr-3">JavaScript</span>
                    <span>UTF-8</span>
                  </div>
                </div>

                <!-- Mobile-optimized Code Content -->
                <div class="p-2 sm:p-4 text-xs sm:text-sm font-mono overflow-x-auto">
                  <div class="whitespace-nowrap">
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">1</div>
                      <div>
                        <span class="text-syntax-comment">// Modern web application setup</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">2</div>
                      <div>
                        <span class="text-syntax-keyword">import</span> { createApp }
                        <span class="text-syntax-keyword">from</span>
                        <span class="text-syntax-string">'vue'</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">3</div>
                      <div>
                        <span class="text-syntax-keyword">import</span> App
                        <span class="text-syntax-keyword">from</span>
                        <span class="text-syntax-string">'./App.vue'</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">4</div>
                      <div>
                        <span class="text-syntax-keyword">import</span> router
                        <span class="text-syntax-keyword">from</span>
                        <span class="text-syntax-string">'./router'</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">5</div>
                      <div></div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">6</div>
                      <div>
                        <span class="text-syntax-keyword">const</span>
                        <span class="text-syntax-variable">app</span> =
                        <span class="text-syntax-function">createApp</span>(App)
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">7</div>
                      <div>app.<span class="text-syntax-function">use</span>(router)</div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">8</div>
                      <div>
                        app.<span class="text-syntax-function">mount</span>(<span
                          class="text-syntax-string"
                          >'#app'</span
                        >)
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Status Bar - Simplified on mobile -->
                <div
                  class="bg-primary/10 text-xs font-mono text-gray-400 px-2 sm:px-3 py-1 flex items-center text-[10px] sm:text-xs"
                >
                  <div class="mr-1 sm:mr-2">
                    <span class="text-primary">✓</span> <span class="hidden sm:inline">Saved</span>
                  </div>
                  <div class="ml-auto flex space-x-2 sm:space-x-4">
                    <span class="hidden xs:inline">Ln 8, Col 21</span>
                    <span>JS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- UI/UX Design -->
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
                {{ translations[language].uiux.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ translations[language].uiux.description }}
              </p>

              <!-- VS Code Editor Style Box -->
              <div class="rounded-lg overflow-hidden border border-gray-700 bg-secondary/80">
                <!-- Editor Tab Bar -->
                <div class="bg-secondary flex items-center px-2 py-1 border-b border-gray-700">
                  <div
                    class="bg-secondary flex items-center px-2 py-1 border-b-2 border-primary text-white"
                  >
                    <span class="text-xs font-mono mr-1 text-primary">component.html</span>
                    <button class="text-gray-400 hover:text-white text-xs">×</button>
                  </div>
                  <div class="text-xs text-gray-500 font-mono ml-auto hidden sm:flex items-center">
                    <span class="mr-3">HTML</span>
                    <span>UTF-8</span>
                  </div>
                </div>

                <!-- Mobile-optimized Code Content -->
                <div class="p-2 sm:p-4 text-xs sm:text-sm font-mono overflow-x-auto">
                  <div class="whitespace-nowrap">
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">1</div>
                      <div>
                        <span class="text-syntax-tag">&lt;div</span>
                        <span class="text-syntax-variable">class</span>=<span
                          class="text-syntax-string"
                          >"ui-component"</span
                        ><span class="text-syntax-tag">&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">2</div>
                      <div>
                        <span class="text-syntax-tag">&lt;header</span>
                        <span class="text-syntax-variable">class</span>=<span
                          class="text-syntax-string"
                          >"header"</span
                        ><span class="text-syntax-tag">&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">3</div>
                      <div>
                        <span class="text-syntax-tag">&lt;nav</span>
                        <span class="text-syntax-variable">class</span>=<span
                          class="text-syntax-string"
                          >"navigation"</span
                        ><span class="text-syntax-tag">&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">4</div>
                      <div>
                        <span class="text-syntax-tag">&lt;a</span>
                        <span class="text-syntax-variable">href</span>=<span
                          class="text-syntax-string"
                          >"#"</span
                        >
                        <span class="text-syntax-variable">class</span>=<span
                          class="text-syntax-string"
                          >"active"</span
                        ><span class="text-syntax-tag">&gt;</span>Home<span class="text-syntax-tag"
                          >&lt;/a&gt;</span
                        >
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">5</div>
                      <div>
                        <span class="text-syntax-tag">&lt;a</span>
                        <span class="text-syntax-variable">href</span>=<span
                          class="text-syntax-string"
                          >"#"</span
                        ><span class="text-syntax-tag">&gt;</span>Features<span
                          class="text-syntax-tag"
                          >&lt;/a&gt;</span
                        >
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">6</div>
                      <div>
                        <span class="text-syntax-tag">&lt;a</span>
                        <span class="text-syntax-variable">href</span>=<span
                          class="text-syntax-string"
                          >"#"</span
                        ><span class="text-syntax-tag">&gt;</span>Contact<span
                          class="text-syntax-tag"
                          >&lt;/a&gt;</span
                        >
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">7</div>
                      <div>
                        <span class="text-syntax-tag">&lt;/nav&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">8</div>
                      <div>
                        <span class="text-syntax-tag">&lt;/header&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">9</div>
                      <div>
                        <span class="text-syntax-comment">&lt;!-- Beautiful UI design --&gt;</span>
                      </div>
                    </div>
                    <div class="flex min-w-max">
                      <div class="text-gray-500 mr-2 sm:mr-4 select-none">10</div>
                      <div><span class="text-syntax-tag">&lt;/div&gt;</span></div>
                    </div>
                  </div>
                </div>

                <!-- Status Bar - Simplified on mobile -->
                <div
                  class="bg-primary/10 text-xs font-mono text-gray-400 px-2 sm:px-3 py-1 flex items-center text-[10px] sm:text-xs"
                >
                  <div class="mr-1 sm:mr-2">
                    <span class="text-primary">✓</span> <span class="hidden sm:inline">Saved</span>
                  </div>
                  <div class="ml-auto flex space-x-2 sm:space-x-4">
                    <span class="hidden xs:inline">Ln 10, Col 6</span>
                    <span>HTML</span>
                  </div>
                </div>
              </div>
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
    title: 'Our Services',
    webDev: {
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies like Vue.js and Laravel, ensuring high performance and scalability.',
    },
    uiux: {
      title: 'UI/UX Design',
      description:
        'Beautiful and intuitive user interfaces that enhance user engagement and drive business growth.',
    },
  },
  lv: {
    title: 'Mūsu Pakalpojumi',
    webDev: {
      title: 'Tīmekļa Izstrāde',
      description:
        'Pielāgotas tīmekļa aplikācijas, izstrādātas ar modernām tehnoloģijām kā Vue.js un Laravel, nodrošinot augstu veiktspēju un mērogojamību.',
    },
    uiux: {
      title: 'UI/UX Dizains',
      description:
        'Skaisti un intuitīvi lietotāja saskarnes, kas uzlabo lietotāju iesaisti un veicina uzņēmuma izaugsmi.',
    },
  },
}
</script>

<style scoped>
/* Mobile optimizations */
@media (max-width: 640px) {
  .animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
  }

  /* Set max height for code blocks on mobile to prevent excessive scrolling */
  .code-block {
    max-height: 200px;
  }
}

/* Custom class for tiny screens */
@media (max-width: 380px) {
  .xs\:inline {
    display: inline;
  }
}
</style>
