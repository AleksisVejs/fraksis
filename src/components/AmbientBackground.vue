<script setup>
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-ink-900"></div>

    <!-- Radial accent glow, top -->
    <div
      class="absolute left-1/2 top-[-20%] h-[70vh] w-[140vw] -translate-x-1/2 rounded-full opacity-[0.18]"
      style="
        background: radial-gradient(
          closest-side,
          rgba(62, 229, 154, 0.55),
          rgba(62, 229, 154, 0) 70%
        );
        filter: blur(60px);
      "
    ></div>

    <!-- Secondary violet glow -->
    <div
      class="absolute right-[-10%] top-[30%] h-[60vh] w-[80vw] rounded-full opacity-[0.12]"
      style="
        background: radial-gradient(
          closest-side,
          rgba(167, 139, 250, 0.5),
          rgba(167, 139, 250, 0) 70%
        );
        filter: blur(80px);
      "
    ></div>

    <!-- Fine grid -->
    <div
      class="absolute inset-0 opacity-[0.6]"
      style="
        background-image:
          linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
        background-size: 56px 56px;
        mask-image: radial-gradient(ellipse at 50% 0%, black 0%, transparent 75%);
      "
    ></div>

    <!-- Vignette -->
    <div
      class="absolute inset-0"
      style="
        background: radial-gradient(
          ellipse at 50% 40%,
          transparent 40%,
          rgba(6, 7, 10, 0.6) 100%
        );
      "
    ></div>
  </div>
</template>
