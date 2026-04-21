/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#ffffff',
          50: '#f5f6f7',
          100: '#e4e6e9',
          200: '#b9bec5',
          300: '#8a919b',
          400: '#5c6572',
          500: '#3d4450',
          600: '#272b33',
          700: '#181b20',
          800: '#0f1115',
          900: '#0a0b0e',
          950: '#06070a',
        },
        accent: {
          50: '#edfff6',
          100: '#d2ffe8',
          200: '#a8ffd2',
          300: '#70f6b6',
          400: '#3ee59a',
          500: '#16cf84',
          600: '#0aa86c',
          700: '#0a8458',
          800: '#0d6847',
          900: '#0c553c',
        },
        signal: {
          violet: '#a78bfa',
          amber: '#f5b949',
          rose: '#f472b6',
          cyan: '#7dd3fc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(62, 229, 154, 0.14), 0 24px 80px -20px rgba(62, 229, 154, 0.35)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at 50% 0%, rgba(62, 229, 154, 0.08), transparent 60%)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.8s linear infinite',
        'rise': 'rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
