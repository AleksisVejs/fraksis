<script setup>
import { computed, reactive, ref } from 'vue'
import { useLanguageStore } from '../stores/language'
import { t } from '../i18n'

const languageStore = useLanguageStore()
const lang = computed(() => languageStore.currentLanguage)

const form = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | success | error
const error = ref('')

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const validate = () => {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    return t('contact.form.errors.required', lang.value)
  }
  if (!isValidEmail(form.email)) {
    return t('contact.form.errors.email', lang.value)
  }
  if (form.message.trim().length < 10) {
    return t('contact.form.errors.short', lang.value)
  }
  return ''
}

const handleSubmit = async () => {
  error.value = ''
  const err = validate()
  if (err) {
    error.value = err
    status.value = 'error'
    return
  }
  status.value = 'sending'
  try {
    const res = await fetch('https://formspree.io/f/xldjlkoj', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      status.value = 'success'
      form.name = form.email = form.message = ''
    } else {
      status.value = 'error'
      error.value = t('contact.form.failure', lang.value)
    }
  } catch {
    status.value = 'error'
    error.value = t('contact.form.failure', lang.value)
  }
}
</script>

<template>
  <section id="contact" class="relative scroll-mt-24 py-20 sm:py-24">
    <div class="container-page">
      <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <!-- Left: heading + info -->
        <div class="flex flex-col gap-10 lg:col-span-5">
          <div class="flex flex-col gap-4">
            <span class="section-label reveal">{{ t('contact.label', lang) }}</span>
            <h2
              class="reveal heading-display text-balance text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]"
              style="transition-delay: 60ms"
            >
              {{ t('contact.title', lang) }}
            </h2>
            <p
              class="reveal max-w-md text-[15px] leading-relaxed text-ink-200"
              style="transition-delay: 120ms"
            >
              {{ t('contact.description', lang) }}
            </p>
          </div>

          <dl class="reveal flex flex-col gap-5" style="transition-delay: 180ms">
            <div class="flex flex-col gap-1">
              <dt class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">Email</dt>
              <dd>
                <a
                  :href="`mailto:${t('contact.email', lang)}`"
                  class="font-display text-[18px] text-ink-0 transition-colors hover:text-accent-300"
                >
                  {{ t('contact.email', lang) }}
                </a>
              </dd>
            </div>
            <div class="flex flex-col gap-1">
              <dt class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">Studio</dt>
              <dd class="font-display text-[18px] text-ink-0">
                {{ t('contact.location', lang) }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Right: form -->
        <div class="reveal lg:col-span-7" style="transition-delay: 180ms">
          <form
            @submit.prevent="handleSubmit"
            class="card relative flex flex-col gap-6 p-6 sm:p-8"
          >
            <div class="flex flex-col gap-1.5">
              <label for="name" class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
                {{ t('contact.form.name', lang) }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                :placeholder="t('contact.form.namePlaceholder', lang)"
                class="focus-ring w-full rounded-xl border border-white/[0.08] bg-ink-800/50 px-4 py-3 text-[15px] text-ink-0 placeholder-ink-400 transition-colors focus:border-accent-400/40"
                autocomplete="name"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="email" class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
                {{ t('contact.form.email', lang) }}
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                :placeholder="t('contact.form.emailPlaceholder', lang)"
                class="focus-ring w-full rounded-xl border border-white/[0.08] bg-ink-800/50 px-4 py-3 text-[15px] text-ink-0 placeholder-ink-400 transition-colors focus:border-accent-400/40"
                autocomplete="email"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="message" class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
                {{ t('contact.form.message', lang) }}
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                :placeholder="t('contact.form.messagePlaceholder', lang)"
                class="focus-ring w-full resize-none rounded-xl border border-white/[0.08] bg-ink-800/50 px-4 py-3 text-[15px] leading-relaxed text-ink-0 placeholder-ink-400 transition-colors focus:border-accent-400/40"
              ></textarea>
            </div>

            <!-- Feedback -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-if="status === 'error' && error"
                class="flex items-center gap-2 rounded-xl border border-signal-rose/30 bg-signal-rose/[0.06] px-3 py-2 text-[13px] text-signal-rose"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-signal-rose"></span>
                {{ error }}
              </p>
            </transition>
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p
                v-if="status === 'success'"
                class="flex items-center gap-2 rounded-xl border border-accent-400/30 bg-accent-400/[0.06] px-3 py-2 text-[13px] text-accent-300"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-dot"></span>
                {{ t('contact.form.success', lang) }}
              </p>
            </transition>

            <div class="flex items-center justify-between gap-4 border-t border-white/[0.05] pt-6">
              <span class="font-mono text-2xs uppercase tracking-[0.18em] text-ink-300">
                {{ status === 'sending' ? '\u25CF sending' : '\u25CB ready' }}
              </span>
              <button
                type="submit"
                :disabled="status === 'sending'"
                class="focus-ring inline-flex items-center gap-2 rounded-full bg-ink-0 px-5 py-2.5 text-[14px] font-medium text-ink-900 transition-all hover:bg-accent-200 hover:shadow-glow disabled:opacity-60"
              >
                {{ status === 'sending' ? t('contact.form.submitting', lang) : t('contact.form.submit', lang) }}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
