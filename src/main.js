import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Google Analytics
const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with your actual GA ID

// Initialize Google Analytics
if (GA_TRACKING_ID && typeof window !== 'undefined') {
  // Load Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  })
}

// Performance monitoring
if (typeof window !== 'undefined') {
  // Track Core Web Vitals
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'LCP') {
            console.log('LCP:', entry.startTime)
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'LCP', { value: Math.round(entry.startTime) })
            }
          }
          if (entry.name === 'FID') {
            console.log('FID:', entry.processingStart - entry.startTime)
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'FID', { value: Math.round(entry.processingStart - entry.startTime) })
            }
          }
          if (entry.name === 'CLS') {
            console.log('CLS:', entry.value)
            // Send to analytics
            if (typeof gtag !== 'undefined') {
              gtag('event', 'CLS', { value: entry.value })
            }
          }
        }
      })
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    }
  })
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize dark mode
document.documentElement.classList.add('dark')

app.mount('#app')
