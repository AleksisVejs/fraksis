<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let ctx, dots = [], dotCount = 300, animFrame

function initBand() {
  if (!canvas.value) return
  const parent = canvas.value.parentElement
  const dpr = window.devicePixelRatio || 1
  const w = parent.clientWidth
  const h = parent.clientHeight
  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  ctx?.scale(dpr, dpr)
  dots = Array.from({ length: dotCount }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 3.2 + 0.5,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.12,
    life: Math.random(),
    speed: Math.random() * 0.007 + 0.003,
  }))
}

function drawBand() {
  if (!ctx || !canvas.value) return
  const parent = canvas.value.parentElement
  const w = parent.clientWidth
  const h = parent.clientHeight
  ctx.clearRect(0, 0, w, h)
  const bg = ctx.createLinearGradient(0, 0, w, 0)
  bg.addColorStop(0, 'rgba(4,10,8,.92)')
  bg.addColorStop(.5, 'rgba(7,5,3,.88)')
  bg.addColorStop(1, 'rgba(10,3,3,.92)')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy; d.life += d.speed
    if (d.x < -10) d.x = w + 10
    if (d.x > w + 10) d.x = -10
    if (d.y < -10) d.y = h + 10
    if (d.y > h + 10) d.y = -10
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

onMounted(() => {
  ctx = canvas.value?.getContext('2d')
  initBand()
  drawBand()
  window.addEventListener('resize', initBand)
  window.addEventListener('band-density', onDensity)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animFrame)
  window.removeEventListener('resize', initBand)
  window.removeEventListener('band-density', onDensity)
})
</script>

<template>
  <div id="petrova-band">
    <canvas ref="canvas" id="band-canvas"></canvas>
    <div class="band-text">
      <div class="band-eyebrow">// Selected Work</div>
      <div class="band-heading">Recent Releases.</div>
      <div class="band-sub">Design, engineering, infrastructure — start to finish.</div>
    </div>
  </div>
</template>
