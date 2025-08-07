<script setup>
import Hero from './components/Hero.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import ServicesSection from './components/ServicesSection.vue'
import Navbar from './components/Navbar.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
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
  <ErrorBoundary>
    <div class="min-h-screen bg-background-dark relative overflow-hidden">
      <!-- Code-themed Background Elements -->
      <div class="fixed inset-0 pointer-events-none">
        <!-- Code Matrix Background -->
        <div
          class="absolute inset-0 bg-[linear-gradient(to_right,rgba(97,218,251,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(97,218,251,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"
        ></div>

        <!-- Floating Code Symbols -->
        <div class="code-symbols">
          <span class="code-symbol">{</span>
          <span class="code-symbol">}</span>
          <span class="code-symbol">(</span>
          <span class="code-symbol">)</span>
          <span class="code-symbol">;</span>
          <span class="code-symbol">=</span>
          <span class="code-symbol">=></span>
          <span class="code-symbol">&&</span>
          <span class="code-symbol">||</span>
          <span class="code-symbol">function</span>
          <span class="code-symbol">return</span>
          <span class="code-symbol">const</span>
          <span class="code-symbol">let</span>
          <span class="code-symbol">if</span>
          <span class="code-symbol">else</span>
          <span class="code-symbol"><></span>
          <span class="code-symbol">//</span>
          <span class="code-symbol">/*</span>
          <span class="code-symbol">*/</span>
        </div>
      </div>

      <!-- Animated Gradient Orbs -->
      <div
        class="fixed top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"
      ></div>
      <div
        class="fixed top-0 -right-4 w-72 h-72 bg-syntax-keyword rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"
      ></div>
      <div
        class="fixed -bottom-8 left-20 w-72 h-72 bg-syntax-function rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"
      ></div>

      <Navbar />
      <LanguageToggle />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  </ErrorBoundary>
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

/* Code Symbol Animation */
.code-symbols {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.code-symbol {
  position: absolute;
  color: rgba(97, 218, 251, 0.1);
  font-family: 'JetBrains Mono', monospace;
  user-select: none;
  font-size: 1.5rem;
  opacity: 0;
  animation:
    floatSymbol 10s linear infinite,
    fadeInOut 10s linear infinite;
}

@keyframes floatSymbol {
  0% {
    transform: translateY(100vh) translateX(-50%);
  }
  100% {
    transform: translateY(-100px) translateX(50%);
  }
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
}

.code-symbol:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
}
.code-symbol:nth-child(2) {
  left: 20%;
  animation-delay: 1s;
}
.code-symbol:nth-child(3) {
  left: 30%;
  animation-delay: 2s;
}
.code-symbol:nth-child(4) {
  left: 40%;
  animation-delay: 3s;
}
.code-symbol:nth-child(5) {
  left: 50%;
  animation-delay: 4s;
}
.code-symbol:nth-child(6) {
  left: 60%;
  animation-delay: 5s;
}
.code-symbol:nth-child(7) {
  left: 70%;
  animation-delay: 6s;
}
.code-symbol:nth-child(8) {
  left: 80%;
  animation-delay: 7s;
}
.code-symbol:nth-child(9) {
  left: 90%;
  animation-delay: 8s;
}
.code-symbol:nth-child(10) {
  left: 15%;
  animation-delay: 9s;
}
.code-symbol:nth-child(11) {
  left: 25%;
  animation-delay: 10s;
}
.code-symbol:nth-child(12) {
  left: 35%;
  animation-delay: 11s;
}
.code-symbol:nth-child(13) {
  left: 45%;
  animation-delay: 12s;
}
.code-symbol:nth-child(14) {
  left: 55%;
  animation-delay: 13s;
}
.code-symbol:nth-child(15) {
  left: 65%;
  animation-delay: 14s;
}
.code-symbol:nth-child(16) {
  left: 75%;
  animation-delay: 15s;
}
.code-symbol:nth-child(17) {
  left: 85%;
  animation-delay: 16s;
}
.code-symbol:nth-child(18) {
  left: 95%;
  animation-delay: 17s;
}
.code-symbol:nth-child(19) {
  left: 5%;
  animation-delay: 18s;
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
  background: #61dafb;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4eaec5;
}

/* Text Selection */
::selection {
  background: #61dafb;
  color: #282c34;
}

/* Smooth Transitions */
* {
  transition:
    background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Parallax Effect */
.parallax {
  transform: translateZ(0);
  will-change: transform;
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(45deg, #61dafb, #c586c0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
