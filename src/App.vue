<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import StackSection from './components/StackSection.vue'
import TechMarquee from './components/TechMarquee.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import BandSection from './components/BandSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const cursor = ref(null)
const railFill = ref(null)
const railDot = ref(null)
const starsCanvas = ref(null)
const diagOn = ref(true)
const starsOn = ref(true)
const dotDensity = ref('medium')

let sc, stars = [], sf = 0, animFrame
let observer

function onMouseMove(e) {
  if (!cursor.value) return
  cursor.value.style.left = e.clientX + 'px'
  cursor.value.style.top = e.clientY + 'px'
}

function onScroll() {
  const frac = Math.min(1, scrollY / (document.body.scrollHeight - innerHeight))
  if (railFill.value) railFill.value.style.height = (frac * 100) + '%'
  if (railDot.value) railDot.value.style.top = (frac * 100) + '%'

  const g = [80, 220, 95], r = [220, 55, 35]
  const mx = (a, b, t) => Math.round(a + (b - a) * t)
  const col = `rgb(${mx(g[0],r[0],frac)},${mx(g[1],r[1],frac)},${mx(g[2],r[2],frac)})`
  if (cursor.value) {
    cursor.value.style.background = col
    cursor.value.style.boxShadow = `0 0 14px ${col}`
  }
  if (railDot.value) {
    railDot.value.style.background = col
    railDot.value.style.boxShadow = `0 0 8px ${col}`
  }

  const backTop = document.getElementById('back-top')
  if (backTop) backTop.classList.toggle('visible', scrollY > 400)
}

function initStars() {
  if (!starsCanvas.value) return
  starsCanvas.value.width = innerWidth
  starsCanvas.value.height = innerHeight
  stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 1.1 + 0.2,
    o: Math.random() * 0.65 + 0.15,
    s: Math.random() * 0.07 + 0.02,
    p: Math.random() * Math.PI * 2,
  }))
}

function drawStars() {
  if (!sc || !starsCanvas.value) return
  sc.clearRect(0, 0, starsCanvas.value.width, starsCanvas.value.height)
  if (starsOn.value) {
    sf += 0.005
    stars.forEach(s => {
      const a = s.o * (0.55 + 0.45 * Math.sin(sf * s.s * 10 + s.p))
      sc.beginPath()
      sc.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      sc.fillStyle = `rgba(185,215,205,${a})`
      sc.fill()
    })
  }
  animFrame = requestAnimationFrame(drawStars)
}

function updateDiagLine() {
  const H = document.body.scrollHeight
  const W = window.innerWidth
  const x1 = W * 0.88, y1 = 0
  const x2 = W * 0.08, y2 = H
  ;['dl1', 'dl2', 'dl3', 'dl4', 'dl5'].forEach(id => {
    const el = document.getElementById(id)
    if (!el) return
    el.setAttribute('x1', x1); el.setAttribute('y1', y1)
    el.setAttribute('x2', x2); el.setAttribute('y2', y2)
  })
  const grad = document.getElementById('diagGrad')
  if (grad) { grad.setAttribute('y1', 0); grad.setAttribute('y2', H) }
  const svg = document.getElementById('diag-svg')
  if (svg) svg.style.height = H + 'px'
}

function onResize() {
  updateDiagLine()
  initStars()
}

function toggleDiag() {
  diagOn.value = !diagOn.value
  const el = document.getElementById('petrova-diagonal')
  if (el) el.style.opacity = diagOn.value ? '1' : '0'
}

function toggleStars() {
  starsOn.value = !starsOn.value
}

function setDots(level, btn) {
  dotDensity.value = level
  document.querySelectorAll('.t-opts .t-btn').forEach(b => {
    if (b.parentElement === btn.parentElement) b.classList.remove('sel')
  })
  btn.classList.add('sel')
  window.dispatchEvent(new CustomEvent('band-density', { detail: level }))
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onMessage(e) {
  if (e.data?.type === '__activate_edit_mode') document.getElementById('tweaks-panel')?.classList.add('on')
  if (e.data?.type === '__deactivate_edit_mode') document.getElementById('tweaks-panel')?.classList.remove('on')
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)

  document.querySelectorAll('a,button,.project-row,.stack-block').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.value?.classList.add('big'))
    el.addEventListener('mouseleave', () => cursor.value?.classList.remove('big'))
  })

  sc = starsCanvas.value?.getContext('2d')
  initStars()
  drawStars()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('load', updateDiagLine)
  window.addEventListener('message', onMessage)

  updateDiagLine()
  setTimeout(updateDiagLine, 800)

  observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') })
  }, { threshold: 0.08 })

  document.querySelectorAll('.reveal,.stack-block').forEach(el => observer.observe(el))

  window.parent.postMessage({ type: '__edit_mode_available' }, '*')
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('load', updateDiagLine)
  window.removeEventListener('message', onMessage)
  cancelAnimationFrame(animFrame)
  observer?.disconnect()
})
</script>

<template>
  <div id="cursor" ref="cursor"></div>

  <canvas ref="starsCanvas" class="stars-canvas"></canvas>

  <!-- Diagonal line -->
  <div id="petrova-diagonal">
    <svg id="diag-svg" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none;">
      <defs>
        <linearGradient id="diagGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#c0392b" stop-opacity="0"/>
          <stop offset="8%"   stop-color="#e74c3c" stop-opacity="0.65"/>
          <stop offset="30%"  stop-color="#ff5544" stop-opacity="1"/>
          <stop offset="55%"  stop-color="#e74c3c" stop-opacity="0.95"/>
          <stop offset="80%"  stop-color="#c0392b" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#c0392b" stop-opacity="0"/>
        </linearGradient>
        <filter id="glow1" x="-400%" y="-5%" width="900%" height="110%"><feGaussianBlur stdDeviation="38"/></filter>
        <filter id="glow2" x="-200%" y="-5%" width="500%" height="110%"><feGaussianBlur stdDeviation="16"/></filter>
        <filter id="glow3" x="-80%"  y="-5%" width="260%" height="110%"><feGaussianBlur stdDeviation="5"/></filter>
      </defs>
      <line id="dl1" stroke="url(#diagGrad)" stroke-width="80"  filter="url(#glow1)" opacity="0.13"/>
      <line id="dl2" stroke="url(#diagGrad)" stroke-width="40"  filter="url(#glow2)" opacity="0.22"/>
      <line id="dl3" stroke="url(#diagGrad)" stroke-width="14"  filter="url(#glow3)" opacity="0.42"/>
      <line id="dl4" stroke="#ff6655"        stroke-width="3"                         opacity="0.55"/>
      <line id="dl5" stroke="#ffaa99"        stroke-width="1"                         opacity="0.28"/>
    </svg>
  </div>

  <!-- Left rail -->
  <div id="rail">
    <a href="#" class="rail-logo">Fraksis</a>
    <div class="rail-line-wrap">
      <div class="rail-track"></div>
      <div id="rail-fill" ref="railFill"></div>
      <div class="rail-dot" id="rail-dot" ref="railDot" style="top:0"></div>
    </div>
    <span class="rail-year">2026</span>
  </div>

  <Navbar />

  <main>
    <Hero />
    <StackSection />
    <TechMarquee />
    <ServicesSection />
    <AboutSection />
    <BandSection />
    <PortfolioSection />
    <ContactSection />
    <Footer />
  </main>

  <!-- Tweaks panel -->
  <div id="tweaks-panel">
    <div class="t-title">Tweaks</div>
    <div class="t-row">
      <div class="t-label">Dot density</div>
      <div class="t-opts">
        <button class="t-btn" @click="setDots('sparse', $event.target)">Sparse</button>
        <button class="t-btn sel" @click="setDots('medium', $event.target)">Medium</button>
        <button class="t-btn" @click="setDots('dense', $event.target)">Dense</button>
      </div>
    </div>
    <div class="t-row">
      <div class="t-label">Diag line</div>
      <label class="t-toggle" @click.prevent="toggleDiag">
        <div class="t-track" :class="{ on: diagOn }"><div class="t-thumb"></div></div>
        <span>{{ diagOn ? 'On' : 'Off' }}</span>
      </label>
    </div>
    <div class="t-row">
      <div class="t-label">Stars</div>
      <label class="t-toggle" @click.prevent="toggleStars">
        <div class="t-track" :class="{ on: starsOn }"><div class="t-thumb"></div></div>
        <span>{{ starsOn ? 'On' : 'Off' }}</span>
      </label>
    </div>
  </div>

  <!-- Back to top -->
  <div id="back-top" @click="scrollToTop">
    <div class="btop-btn">↑</div>
    <span class="btop-label">Return<br>to base</span>
  </div>
</template>
