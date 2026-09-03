<template>
  <section id="about">
    <div class="reveal">
      <div class="section-label">// About</div>
      <h2 class="about-heading">One developer.<br>Whole project.</h2>
      <p class="about-body">Hiring a designer, a front-end developer, a back-end developer and someone to keep the server running is not realistic for most small projects. I do all four, so you brief one person and get a working site at the end of it.</p>
      <p class="about-body">Since 2024 I have put four web apps into production and kept them there — a bilingual club portal with member accounts and a training calendar, an artist's catalogue, an inspection platform, and a language-learning product of my own. Two were built for clients, two are mine. Self-taught, then formally trained as a programming technician in Rīga.</p>

      <div class="about-stats">
        <div class="stat">
          <div class="stat-num">4</div>
          <div class="stat-label">Production sites<br>live today</div>
        </div>
        <div class="stat">
          <div class="stat-num">2024</div>
          <div class="stat-label">Shipping to<br>production since</div>
        </div>
        <div class="stat">
          <div class="stat-num">1</div>
          <div class="stat-label">Person accountable,<br>start to finish</div>
        </div>
      </div>
    </div>

    <div class="reveal" style="transition-delay:.12s">
      <div class="code-card">
        <div class="code-card-bar">
          <div class="cc-dot" style="background:#ff5f57"></div>
          <div class="cc-dot" style="background:#febc2e"></div>
          <div class="cc-dot" style="background:#28c840"></div>
          <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--fg-faint);margin-left:8px;letter-spacing:.05em">how-i-work.ts</span>
        </div>
        <div class="code-card-body">
          <span class="cc-line"><span class="cc-k">const</span> <span class="cc-n">engagement</span> <span class="cc-c">=</span> {</span>
          <span class="cc-line cc-indent"><span class="cc-s">scope</span><span class="cc-c">:</span> <span class="cc-v">"design → build → deploy"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">contact</span><span class="cc-c">:</span> <span class="cc-v">"direct, no account manager"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">languages</span><span class="cc-c">:</span> [</span>
          <span class="cc-line cc-indent2"><span class="cc-v">"Latvian"</span><span class="cc-c">,</span></span>
          <span class="cc-line cc-indent2"><span class="cc-v">"English"</span></span>
          <span class="cc-line cc-indent">]<span class="cc-c">,</span></span>
          <span class="cc-line cc-indent"><span class="cc-s">afterLaunch</span><span class="cc-c">:</span> <span class="cc-v">"I still pick up the phone"</span></span>
          <span class="cc-line">}</span>
          <span class="cc-line">&nbsp;</span>
          <span class="cc-line"><span class="cc-k">export default</span> <span class="cc-n">engagement</span></span>
        </div>
      </div>
    </div>
  </section>
</template>
