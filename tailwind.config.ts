import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#1c1917',
          900: '#292524',
          800: '#292524',
          700: '#44403c',
          500: '#78716c',
          400: '#a8a29e',
          50: '#fafaf9',
        },
        purple: {
          400: '#c084fc',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.125rem',
        lg: '0.125rem',
        xl: '0.125rem',
        '2xl': '0.125rem',
        '3xl': '0.125rem',
        full: '0.125rem',
      },
    },
  },
  plugins: [],
};

export default config;