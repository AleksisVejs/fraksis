<script setup>
import Hero from './components/Hero.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import DarkModeToggle from './components/DarkModeToggle.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import ServicesSection from './components/ServicesSection.vue'
import { onMounted } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

onMounted(() => {
  // Add scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
    <!-- Animated Background Lines -->
    <div class="fixed inset-0 pointer-events-none">
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#ECD06F_1px,transparent_1px),linear-gradient(to_bottom,#ECD06F_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5"
      ></div>
    </div>

    <!-- Animated Gradient Orbs -->
    <div
      class="fixed top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
    ></div>
    <div
      class="fixed top-0 -right-4 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
    ></div>
    <div
      class="fixed -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
    ></div>

    <LanguageToggle />
    <Hero />
    <ServicesSection />
    <PortfolioSection />
    <AboutSection />
    <ContactSection />
    <Footer />
    <DarkModeToggle />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem;
  position: relative;
}

/* Scroll-triggered Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Custom Animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #ecd06f;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d4b85f;
}

/* Text Selection */
::selection {
  background: #ecd06f;
  color: black;
}

/* Smooth Transitions */
* {
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

/* Parallax Effect */
.parallax {
  transform: translateZ(0);
  will-change: transform;
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(45deg, #ecd06f, #d4b85f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
