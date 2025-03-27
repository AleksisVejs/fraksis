<template>
  <section id="contact" class="section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
      <!-- Code Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(97,218,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(97,218,251,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto w-full relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 relative inline-block animate-on-scroll font-mono"
      >
        <span class="text-primary relative group">
          {{ currentTranslations.title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <!-- Terminal-style Form -->
      <div
        class="code-block relative animate-on-scroll rounded-lg border border-gray-700"
        style="animation-delay: 0.2s"
      >
        <!-- Terminal Header -->
        <div class="terminal-header">
          <div class="terminal-dots">
            <div class="terminal-dot bg-red-500"></div>
            <div class="terminal-dot bg-yellow-500"></div>
            <div class="terminal-dot bg-green-500"></div>
          </div>
          <div class="terminal-title">contact.js</div>
          <div class="w-4"></div>
        </div>

        <!-- Form as Code -->
        <div class="p-6 bg-secondary/95">
          <div class="text-syntax-comment mb-3 font-mono text-sm">
            // {{ currentTranslations.form.formComment }}
          </div>

          <form
            action="https://formspree.io/f/xldjlkoj"
            method="POST"
            @submit.prevent="handleSubmit"
            class="space-y-6"
          >
            <div class="relative group">
              <div class="mb-1 font-mono text-sm">
                <span class="text-syntax-keyword">const</span>
                <span class="text-syntax-variable">name</span>
                <span class="text-white">=</span>
              </div>
              <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 bg-secondary/80 border border-gray-700 rounded-lg focus:outline-none focus:border-primary font-mono text-syntax-string transition-all duration-300"
                :placeholder="currentTranslations.form.namePlaceholder"
              />
            </div>

            <div class="relative group">
              <div class="mb-1 font-mono text-sm">
                <span class="text-syntax-keyword">const</span>
                <span class="text-syntax-variable">email</span>
                <span class="text-white">=</span>
              </div>
              <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 bg-secondary/80 border border-gray-700 rounded-lg focus:outline-none focus:border-primary font-mono text-syntax-string transition-all duration-300"
                :placeholder="currentTranslations.form.emailPlaceholder"
              />
            </div>

            <div class="relative group">
              <div class="mb-1 font-mono text-sm">
                <span class="text-syntax-keyword">const</span>
                <span class="text-syntax-variable">message</span>
                <span class="text-white">=</span>
              </div>
              <textarea
                v-model="form.message"
                id="message"
                name="message"
                rows="6"
                required
                class="w-full px-4 py-3 bg-secondary/80 border border-gray-700 rounded-lg focus:outline-none focus:border-primary font-mono text-syntax-string transition-all duration-300 resize-none"
                :placeholder="currentTranslations.form.messagePlaceholder"
              ></textarea>
            </div>

            <div class="font-mono text-sm">
              <span class="text-syntax-function">sendMessage</span>
              <span class="text-white">(</span>
              <span class="text-syntax-variable">name</span>
              <span class="text-white">,</span>
              <span class="text-syntax-variable">email</span>
              <span class="text-white">,</span>
              <span class="text-syntax-variable">message</span>
              <span class="text-white">);</span>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3 bg-primary text-black font-mono rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden flex items-center justify-center"
            >
              <span class="relative z-10 text-black">
                <span class="text-black">{{
                  isSubmitting ? currentTranslations.form.sending : currentTranslations.form.send
                }}</span>
                <span class="ml-1 animate-cursor-blink text-black">_</span>
              </span>
            </button>

            <p
              v-if="submitStatus"
              :class="[
                'transition-all duration-300 font-mono',
                submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500',
              ]"
            >
              <span class="text-syntax-comment">// {{ submitStatus.message }}</span>
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Decorative Code Elements -->
    <div class="absolute top-1/4 right-10 font-mono text-primary/20 text-2xl animate-pulse">()</div>
    <div
      class="absolute bottom-1/4 left-10 font-mono text-primary/20 text-2xl animate-pulse"
      style="animation-delay: 1s"
    >
      { }
    </div>
    <div
      class="absolute top-3/4 left-1/4 font-mono text-primary/20 text-2xl animate-pulse"
      style="animation-delay: 2s"
    >
      =>
    </div>

    <Toast
      v-if="toast.show"
      :message="toast.message"
      :type="toast.type"
      @close="toast.show = false"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'
import Toast from './Toast.vue'

const languageStore = useLanguageStore()
const { currentLanguage: language } = storeToRefs(languageStore)

// Add a computed property for current translations
const currentTranslations = computed(() => {
  return translations[language.value || 'en']
})

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const toast = ref({
  show: false,
  message: '',
  type: 'success',
})

const showToast = (message, type = 'success') => {
  toast.value = {
    show: true,
    message,
    type,
  }
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  // Form validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    submitStatus.value = {
      type: 'error',
      message: currentTranslations.value.form.validationError,
    }
    return
  }

  if (!isValidEmail(form.value.email)) {
    submitStatus.value = {
      type: 'error',
      message: currentTranslations.value.form.invalidEmail,
    }
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    const response = await fetch('https://formspree.io/f/xldjlkoj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
      }),
    })

    if (response.ok) {
      // Reset form
      form.value = {
        name: '',
        email: '',
        message: '',
      }
      submitStatus.value = {
        type: 'success',
        message: currentTranslations.value.form.success,
      }
      showToast(currentTranslations.value.form.success, 'success')
    } else {
      throw new Error('Form submission failed')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = {
      type: 'error',
      message: currentTranslations.value.form.error,
    }
    showToast(currentTranslations.value.form.error, 'error')
  } finally {
    isSubmitting.value = false
  }
}

const translations = {
  en: {
    title: 'Contact Us',
    form: {
      formComment: 'Fill out the form below to send us a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      message: 'Message',
      messagePlaceholder: 'Type your message here...',
      send: 'submit()',
      sending: 'sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      validationError: 'All fields are required',
      invalidEmail: 'Invalid email format',
    },
  },
  lv: {
    title: 'Sazinies Ar Mums',
    form: {
      formComment: 'Aizpildiet zemāk esošo formu, lai nosūtītu mums ziņu',
      name: 'Vārds',
      namePlaceholder: 'Tavs vārds',
      email: 'E-pasts',
      emailPlaceholder: 'tavs.epasts@piemers.lv',
      message: 'Ziņa',
      messagePlaceholder: 'Ievadi savu ziņu šeit...',
      send: 'sūtīt()',
      sending: 'sūta...',
      success: 'Ziņa veiksmīgi nosūtīta!',
      error: 'Neizdevās nosūtīt ziņu. Lūdzu, mēģiniet vēlreiz.',
      validationError: 'Visi lauki ir obligāti',
      invalidEmail: 'Nepareizs e-pasta formāts',
    },
  },
}
</script>

<style scoped>
input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

input:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(97, 218, 251, 0.3);
}
</style>
