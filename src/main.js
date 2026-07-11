// Self-hosted fonts (latin + latin-ext for Latvian diacritics) — bundled by Vite,
// cached by the PWA service worker, no Google Fonts request.
import '@fontsource/space-grotesk/latin-300.css'
import '@fontsource/space-grotesk/latin-400.css'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/space-grotesk/latin-ext-300.css'
import '@fontsource/space-grotesk/latin-ext-400.css'
import '@fontsource/space-grotesk/latin-ext-500.css'
import '@fontsource/space-grotesk/latin-ext-600.css'
import '@fontsource/space-grotesk/latin-ext-700.css'
import '@fontsource/jetbrains-mono/latin-300.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-ext-300.css'
import '@fontsource/jetbrains-mono/latin-ext-400.css'
import '@fontsource/jetbrains-mono/latin-ext-500.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
