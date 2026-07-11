<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let ctx, dots = [], dotCount = 300, animFrame
let bandW = 1, bandH = 1
let lastVw = 0

function initBand() {
  if (!canvas.value) return
  lastVw = window.innerWidth
  const c = canvas.value
  const parent = c.parentElement
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = c.getBoundingClientRect()
  bandW = Math.max(1, Math.round(rect.width))
  bandH = Math.max(1, Math.round(rect.height))
  if (bandW < 2 || bandH < 2) {
    bandW = Math.max(1, parent.clientWidth)
    bandH = Math.max(1, parent.clientHeight)
  }
  c.width = Math.round(bandW * dpr)
  c.height = Math.round(bandH * dpr)
  ctx = c.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  dots = Array.from({ length: dotCount }, () => ({
    x: Math.random() * bandW,
    y: Math.random() * bandH,
    r: Math.random() * 3.2 + 0.5,
    vx: (Math.random() - 0.5) * 1.1,
    vy: (Math.random() - 0.5) * 0.55,
    life: Math.random(),
    speed: Math.random() * 0.007 + 0.003,
  }))
}

function drawBand() {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, bandW, bandH)
  const bg = ctx.createLinearGradient(0, 0, bandW, 0)
  bg.addColorStop(0, 'rgba(4,10,8,.92)')
  bg.addColorStop(.5, 'rgba(7,5,3,.88)')
  bg.addColorStop(1, 'rgba(10,3,3,.92)')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, bandW, bandH)
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy; d.life += d.speed
    if (d.x < -10) d.x = bandW + 10
    if (d.x > bandW + 10) d.x = -10
    if (d.y < -10) d.y = bandH + 10
    if (d.y > bandH + 10) d.y = -10
    const pulse = 0.45 + 0.55 * Math.sin(d.life * Math.PI * 2)
    ctx.beginPath()
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(220,55,35,${pulse * 0.75})`
    ctx.fill()
  })
  animFrame = requestAnimationFrame(drawBand)
}

function onDensity(e) {
  dotCount = { sparse: 100, medium: 300, dense: 650 }[e.detail] ?? 300
  initBand()
}

function onResize() {
  // Mobile URL-bar show/hide fires resize with only a height change —
  // re-randomizing the dots then causes a visible flicker.
  if (window.innerWidth === lastVw) return
  initBand()
}

onMounted(() => {
  initBand()
  drawBand()
  requestAnimationFrame(() => {
    initBand()
  })
  window.addEventListener('resize', onResize)
  window.addEventListener('band-density', onDensity)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animFrame)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('band-density', onDensity)
})
</script>

<template>
  <div id="petrova-band">
    <canvas ref="canvas" id="band-canvas"></canvas>
    <div class="band-text">
      <div class="band-eyebrow">// Selected Work</div>
      <h2 class="band-heading">Recent Releases.</h2>
      <div class="band-sub">Design, engineering, infrastructure — start to finish.</div>
    </div>
  </div>
</template>
