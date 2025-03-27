<template>
  <footer class="relative overflow-hidden py-12">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"
      ></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold text-primary mb-4">Fraksis</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ translations[language].companyDescription }}
          </p>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold text-primary mb-4">
            {{ translations[language].contactInfo }}
          </h3>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:contact@fraksis.com" class="hover:text-primary transition-colors"
                >contact@fraksis.com</a
              >
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Riga, Latvia</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600">
        <p>
          &copy; {{ new Date().getFullYear() }} Fraksis.
          {{ translations[language].allRightsReserved }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { currentLanguage: language } = storeToRefs(languageStore)

const translations = {
  en: {
    companyDescription: 'Full-stack development that transforms ideas into digital reality',
    quickLinks: 'Quick Links',
    about: 'About Us',
    portfolio: 'Portfolio',
    contact: 'Contact',
    contactInfo: 'Contact Info',
    allRightsReserved: 'All rights reserved.',
  },
  lv: {
    companyDescription: 'Pilna steka izstrāde, kas pārvērš idejas digitālā realitātē',
    quickLinks: 'Ātrās Saites',
    about: 'Par Mums',
    portfolio: 'Portfolio',
    contact: 'Kontakti',
    contactInfo: 'Kontaktinformācija',
    allRightsReserved: 'Visas tiesības aizsargātas.',
  },
}
</script>
