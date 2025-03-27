/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#61DAFB', // React blue color
        secondary: '#282C34', // Dark code editor background
        background: {
          dark: '#1E1E1E', // VS Code dark theme background
        },
        syntax: {
          comment: '#6A9955', // Green comments
          string: '#CE9178', // Orange strings
          keyword: '#C586C0', // Purple keywords
          function: '#DCDCAA', // Yellow functions
          variable: '#9CDCFE', // Light blue variables
          tag: '#F07178', // Red/pink tags
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
        code: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'cursor-blink': 'cursorBlink 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cursorBlink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
