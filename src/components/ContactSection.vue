<template>
  <section id="contact" class="section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-pulse"
      ></div>
      <!-- Animated Lines -->
      <div
        class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(236,208,111,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-gradient"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto w-full relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 relative inline-block animate-on-scroll"
      >
        <span class="text-primary relative group">
          {{ currentTranslations.title }}
          <div
            class="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          ></div>
        </span>
      </h2>

      <form
        action="https://formspree.io/f/xldjlkoj"
        method="POST"
        @submit.prevent="handleSubmit"
        class="space-y-8 animate-on-scroll"
        style="animation-delay: 0.2s"
      >
        <div class="relative group">
          <label for="name" class="block text-sm font-medium mb-2">{{
            currentTranslations.form.name
          }}</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 group-hover:border-primary/50"
            :placeholder="currentTranslations.form.namePlaceholder"
          />
          <div
            class="absolute -inset-0.5 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          ></div>
        </div>

        <div class="relative group">
          <label for="email" class="block text-sm font-medium mb-2">{{
            currentTranslations.form.email
          }}</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 group-hover:border-primary/50"
            :placeholder="currentTranslations.form.emailPlaceholder"
          />
          <div
            class="absolute -inset-0.5 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          ></div>
        </div>

        <div class="relative group">
          <label for="message" class="block text-sm font-medium mb-2">{{
            currentTranslations.form.message
          }}</label>
          <textarea
            v-model="form.message"
            id="message"
            name="message"
            rows="6"
            required
            class="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-primary/20 rounded-lg focus:outline-none focus:border-primary transition-all duration-300 resize-none group-hover:border-primary/50"
            :placeholder="currentTranslations.form.messagePlaceholder"
          ></textarea>
          <div
            class="absolute -inset-0.5 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          ></div>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full px-8 py-4 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group overflow-hidden"
        >
          <span class="relative z-10">
            {{ isSubmitting ? currentTranslations.form.sending : currentTranslations.form.send }}
          </span>
          <div
            class="absolute inset-0 bg-black/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          ></div>
        </button>

        <p
          v-if="submitStatus"
          :class="[
            'text-center transition-all duration-300',
            submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500',
          ]"
        >
          {{ submitStatus.message }}
        </p>
      </form>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-1/4 right-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-20"
    ></div>
    <div
      class="absolute bottom-1/4 left-10 w-6 h-6 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 1s"
    ></div>
    <div
      class="absolute top-3/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-20"
      style="animation-delay: 2s"
    ></div>

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

const translations = {
  en: {
    title: 'Contact Us',
    form: {
      name: 'Name',
      namePlaceholder: 'Enter your name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      message: 'Message',
      messagePlaceholder: 'Enter your message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      validationError: 'All fields are required',
      invalidEmail: 'Invalid email format',
    },
  },
  lv: {
    title: 'Sazinies Ar Mums',
    form: {
      name: 'Vārds',
      namePlaceholder: 'Ievadiet savu vārdu',
      email: 'E-pasts',
      emailPlaceholder: 'Ievadiet savu e-pastu',
      message: 'Ziņojums',
      messagePlaceholder: 'Ievadiet savu ziņojumu',
      send: 'Nosūtīt Ziņojumu',
      sending: 'Nosūta...',
      success: 'Ziņojums nosūtīts veiksmīgi!',
      error: 'Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.',
      validationError: 'Visiem laukiem ir jābūt aizpildītiem',
      invalidEmail: 'Nevērtēts e-pasta formāts',
    },
  },
}

const handleSubmit = async (event) => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    showToast(currentTranslations.value.form.validationError, 'error')
    return
  }

  if (!isValidEmail(form.value.email)) {
    showToast(currentTranslations.value.form.invalidEmail, 'error')
    return
  }

  try {
    isSubmitting.value = true
    const formData = new FormData(event.target)
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    showToast(currentTranslations.value.form.success)
    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
  } catch (error) {
    console.error('Error:', error)
    showToast(currentTranslations.value.form.error, 'error')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradient 15s ease infinite;
}
</style>
