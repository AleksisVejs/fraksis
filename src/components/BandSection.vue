<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let ctx, dots = [], dotCount = 300, animFrame

function initBand() {
  if (!canvas.value) return
  canvas.value.width = canvas.value.parentElement.clientWidth
  canvas.value.height = canvas.value.parentElement.clientHeight
  dots = Array.from({ length: dotCount }, () => ({
    x: Math.random() * canvas.value.width,
    y: Math.random() * canvas.value.height,
    r: Math.random() * 3.2 + 0.5,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.12,
    life: Math.random(),
    speed: Math.random() * 0.007 + 0.003,
  }))
}

function drawBand() {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  const bg = ctx.createLinearGradient(0, 0, canvas.value.width, 0)
  bg.addColorStop(0, 'rgba(4,10,8,.92)')
  bg.addColorStop(.5, 'rgba(7,5,3,.88)')
  bg.addColorStop(1, 'rgba(10,3,3,.92)')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy; d.life += d.speed
    if (d.x < -10) d.x = canvas.value.width + 10
    if (d.x > canvas.value.width + 10) d.x = -10
    if (d.y < -10) d.y = canvas.value.height + 10
    if (d.y > canvas.value.height + 10) d.y = -10
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
