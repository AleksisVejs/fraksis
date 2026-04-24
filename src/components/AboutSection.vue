<template>
  <section id="about">
    <div class="reveal">
      <div class="section-label">// About</div>
      <h2 class="about-heading">Self-taught builder.<br>Studio engineer.</h2>
      <p class="about-body">Studied as a programming technician at Rīgas Valsts tehnikums. Fraksis is my software identity — the name under which I design, build and ship real production web apps, from database schema to pixel-perfect UI.</p>
      <p class="about-body">I care about code that is readable, systems that scale, and interfaces that don't get in the way.</p>

      <div class="timeline">
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-period">Mar 2024 – Jun 2025</div>
          <div class="tl-title">Web Developer Intern</div>
          <div class="tl-place">SIA VIMA LTD, Rīga</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:var(--amber);box-shadow:0 0 8px var(--amber)"></div>
          <div class="tl-period">2022 – 2025</div>
          <div class="tl-title">Programming Technician</div>
          <div class="tl-place">Rīgas Valsts tehnikums</div>
        </div>
      </div>
    </div>

    <div class="reveal" style="transition-delay:.12s">
      <div class="code-card">
        <div class="code-card-bar">
          <div class="cc-dot" style="background:#ff5f57"></div>
          <div class="cc-dot" style="background:#febc2e"></div>
          <div class="cc-dot" style="background:#28c840"></div>
          <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--fg-faint);margin-left:8px;letter-spacing:.05em">aleksis.ts</span>
        </div>
        <div class="code-card-body">
          <span class="cc-line"><span class="cc-k">const</span> <span class="cc-n">dev</span> <span class="cc-c">=</span> {</span>
          <span class="cc-line cc-indent"><span class="cc-s">name</span><span class="cc-c">:</span> <span class="cc-v">"Aleksis Vējš"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">base</span><span class="cc-c">:</span> <span class="cc-v">"Rīga, Latvia"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">focus</span><span class="cc-c">:</span> [</span>
          <span class="cc-line cc-indent2"><span class="cc-v">"full-stack web"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent2"><span class="cc-v">"frontend UX"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent2"><span class="cc-v">"API design"</span></span>
          <span class="cc-line cc-indent">]<span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">available</span><span class="cc-c">:</span> <span class="cc-k">true</span></span>
          <span class="cc-line">}</span>
          <span class="cc-line">&nbsp;</span>
          <span class="cc-line"><span class="cc-k">export default</span> <span class="cc-n">dev</span></span>
        </div>
      </div>
    </div>
  </section>
</template>
