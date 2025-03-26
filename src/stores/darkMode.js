import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    isDark: true, // Set dark mode as default
  }),
  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      // Update the HTML class
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
})
