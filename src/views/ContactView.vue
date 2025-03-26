<template>
  <main class="flex-1 flex flex-col items-center justify-center py-20 px-6">
    <div class="max-w-3xl mx-auto w-full">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Name</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Email</label
            >
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              for="subject"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Subject</label
            >
            <input
              v-model="form.subject"
              type="text"
              id="subject"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700"
            />
          </div>

          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Message</label
            >
            <textarea
              v-model="form.message"
              id="message"
              rows="6"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent dark:bg-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <p v-if="successMessage" class="text-green-500 text-center">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      successMessage.value = "Message sent successfully! We'll get back to you soon."
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    errorMessage.value = 'Sorry, there was an error sending your message. Please try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
