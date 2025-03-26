<template>
  <section class="section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 relative inline-block animate-on-scroll"
      >
        <span class="text-primary relative group">
          {{ translations[language].title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Web Development -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.2s"
        >
          <div class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 p-8 h-full">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div
                class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">{{ translations[language].webDev.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ translations[language].webDev.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Mobile Development -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.4s"
        >
          <div class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 p-8 h-full">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div
                class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">{{ translations[language].mobileDev.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ translations[language].mobileDev.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- UI/UX Design -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.6s"
        >
          <div class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-white/5 p-8 h-full">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div
                class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4">{{ translations[language].uiux.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ translations[language].uiux.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-1/4 right-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-20"
    ></div>
    <div
      class="absolute bottom-1/4 left-10 w-6 h-6 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-3/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 2s"
    ></div>
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
    mobileDev: {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
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
    mobileDev: {
      title: 'Mobilā Izstrāde',
      description:
        'Natīvās un šķērspatformu mobilās aplikācijas, kas nodrošina nevainojamu lietotāju pieredzi visās ierīcēs.',
    },
    uiux: {
      title: 'UI/UX Dizains',
      description:
        'Skaisti un intuitīvi lietotāja saskarnes, kas uzlabo lietotāju iesaisti un veicina uzņēmuma izaugsmi.',
    },
  },
}
</script>
