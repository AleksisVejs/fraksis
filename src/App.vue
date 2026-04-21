<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import AmbientBackground from './components/AmbientBackground.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import TechMarquee from './components/TechMarquee.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <ErrorBoundary>
    <AmbientBackground />
    <div class="relative flex min-h-screen flex-col">
      <Navbar />
      <main class="flex-1">
        <Hero />
        <TechMarquee />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </ErrorBoundary>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
