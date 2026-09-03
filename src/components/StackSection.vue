<template>
  <section id="stack">
    <div style="grid-column:1/-1; padding-bottom:36px; border-bottom:1px solid oklch(.16 .005 200/.4); margin-bottom:2px;">
      <h2 class="section-label">// Stack</h2>
    </div>

    <div class="stack-block reveal">
      <div class="stack-icon">// Frontend</div>
      <div class="stack-name">Interface</div>
      <ul class="stack-items">
        <li>Vue 3</li>
        <li>Pinia &amp; Vuex</li>
        <li>Vue Router &amp; I18n</li>
        <li>Tailwind CSS 3 &amp; 4</li>
        <li>Vite</li>
        <li>Offline-first PWAs</li>
      </ul>
    </div>

    <div class="stack-block reveal" style="transition-delay:.08s">
      <div class="stack-icon">// Backend</div>
      <div class="stack-name">Server</div>
      <ul class="stack-items">
        <li>Laravel 12 &amp; 13</li>
        <li>PHP 8.2+</li>
        <li>MySQL 8</li>
        <li>REST APIs</li>
        <li>Sanctum, roles &amp; 2FA</li>
        <li>Realtime (Pusher, Echo)</li>
      </ul>
    </div>

    <div class="stack-block reveal" style="transition-delay:.16s">
      <div class="stack-icon">// Tooling</div>
      <div class="stack-name">Ship &amp; Run</div>
      <ul class="stack-items">
        <li>Git &amp; GitHub</li>
        <li>GitHub Actions CI</li>
        <li>PHPUnit &amp; Vitest</li>
        <li>Linux &amp; CLI</li>
        <li>cPanel / LiteSpeed deploys</li>
        <li>Figma</li>
      </ul>
    </div>
  </section>
</template>
