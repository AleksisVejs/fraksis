<template>
  <section class="section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
      <!-- Code Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(97,218,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(97,218,251,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 relative inline-block animate-on-scroll font-mono"
      >
        <span class="text-primary relative group">
          {{ translations[language].title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <!-- Company Description as Terminal -->
      <div class="terminal max-w-3xl mx-auto mb-16 animate-on-scroll" style="animation-delay: 0.2s">
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot bg-red-500"></div>
            <div class="terminal-dot bg-yellow-500"></div>
            <div class="terminal-dot bg-green-500"></div>
          </div>
          <div class="terminal-title">about.md</div>
          <div class="w-4"></div>
        </div>
        <div class="terminal-content p-4">
          <div class="flex items-start mb-2">
            <span class="terminal-prompt mr-2">$</span>
            <span class="text-syntax-function">cat</span>
            <span class="text-white ml-1">about.md</span>
          </div>
          <div class="mt-4 text-gray-300 font-mono text-sm leading-relaxed">
            <span class="text-syntax-string"># {{ translations[language].title }}</span>
            <br /><br />
            <span>{{ translations[language].description }}</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Team Member 1 -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.4s"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-secondary p-8 border border-primary/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div class="w-32 h-32 bg-primary/20 rounded-lg mx-auto mb-6 overflow-hidden relative">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <img
                  src="/images/team-member-1.png"
                  alt="Aleksis Aleksandrs Vējš"
                  class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 class="text-2xl font-bold text-center mb-2 font-mono">
                {{ translations[language].team.member1.name }}
              </h3>
              <p class="text-primary text-center mb-6 font-mono">
                {{ translations[language].team.member1.role }}
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="skill in translations[language].team.member1.skills"
                  :key="skill"
                  class="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm transform hover:scale-105 transition-transform duration-200 font-mono"
                >
                  {{ skill }}
                </span>
              </div>
              <div class="mt-6 flex justify-center space-x-4">
                <a
                  href="https://github.com/AleksisVejs"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 flex items-center"
                >
                  <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <span class="font-mono text-sm">github</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Member 2 -->
        <div
          class="group transform hover:scale-[1.02] transition-transform duration-500 animate-on-scroll"
          style="animation-delay: 0.6s"
        >
          <div
            class="relative overflow-hidden rounded-2xl bg-black/5 dark:bg-secondary p-8 border border-primary/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="relative z-10">
              <div class="w-32 h-32 bg-primary/20 rounded-lg mx-auto mb-6 overflow-hidden relative">
                <div
                  class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <img
                  src="/images/team-member-2.png"
                  alt="Viesturs Emerbergs"
                  class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 class="text-2xl font-bold text-center mb-2 font-mono">
                {{ translations[language].team.member2.name }}
              </h3>
              <p class="text-primary text-center mb-6 font-mono">
                {{ translations[language].team.member2.role }}
              </p>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="skill in translations[language].team.member2.skills"
                  :key="skill"
                  class="px-3 py-1 bg-primary/20 text-primary rounded-lg text-sm transform hover:scale-105 transition-transform duration-200 font-mono"
                >
                  {{ skill }}
                </span>
              </div>
              <div class="mt-6 flex justify-center space-x-4">
                <a
                  href="https://github.com/22DPVEmer"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 flex items-center"
                >
                  <svg class="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  <span class="font-mono text-sm">github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Code Elements -->
    <div class="absolute top-1/4 right-10 font-mono text-2xl text-primary/20 animate-pulse">{</div>
    <div
      class="absolute bottom-1/4 left-10 font-mono text-2xl text-primary/20 animate-pulse"
      style="animation-delay: 1s"
    >
      }
    </div>
    <div
      class="absolute top-3/4 left-1/4 font-mono text-2xl text-primary/20 animate-pulse"
      style="animation-delay: 2s"
    >
      ;
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
    title: 'About Us',
    description:
      'We are passionate developers dedicated to creating exceptional digital experiences. Our expertise spans across web development, mobile applications, and UI/UX design, allowing us to deliver comprehensive solutions that drive business growth.',
    team: {
      member1: {
        name: 'Aleksis Vējš',
        role: 'Full Stack Developer',
        skills: ['Vue.js', 'Laravel', 'Node.js'],
      },
      member2: {
        name: 'Viesturs Emerbergs',
        role: 'Full Stack Developer',
        skills: ['Vue.js', 'React', 'Node.js', '.NET Core', 'TypeScript'],
      },
    },
  },
  lv: {
    title: 'Par Mums',
    description:
      'Mēs esam dedzīgi izstrādātāji, kas veltīti izcilu digitālo pieredžu radīšanai. Mūsu ekspertīze aptver tīmekļa izstrādi, mobilās lietotnes un UI/UX dizainu, ļaujot mums sniegt pilnīgus risinājumus, kas veicina uzņēmumu izaugsmi.',
    team: {
      member1: {
        name: 'Aleksis Vējš',
        role: 'Pilna Steka Izstrādātājs',
        skills: ['Vue.js', 'Laravel', 'Node.js'],
      },
      member2: {
        name: 'Viesturs Emerbergs',
        role: 'Pilna Steka Izstrādātājs',
        skills: ['Vue.js', 'React', 'Node.js', '.NET Core', 'TypeScript'],
      },
    },
  },
}
</script>
