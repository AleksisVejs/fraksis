import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'og.png'],
      manifest: {
        name: 'Fraksis — Independent software studio',
        short_name: 'Fraksis',
        description: 'Independent software studio engineering modern web products.',
        theme_color: '#010103',
        background_color: '#010103',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '16x16 32x32',
            type: 'image/x-icon',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          // Fonts are self-hosted; cache the woff2 subsets the browser actually requests.
          {
            urlPattern: /\.(woff2|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
})
