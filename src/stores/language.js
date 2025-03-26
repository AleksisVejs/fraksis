import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: localStorage.getItem('language') || 'en',
  }),

  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang
      localStorage.setItem('language', lang)
    },

    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'lv' : 'en'
      localStorage.setItem('language', this.currentLanguage)
    },
  },
})
