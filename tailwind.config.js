/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0c0d',
          800: '#131416',
          700: '#1a1c1e',
          600: '#22252a',
          500: '#2d3137',
        },
        bone: {
          DEFAULT: '#f5f1ea',
          dim: '#cfc8bd',
        },
        brass: {
          DEFAULT: '#cbac4d',
          light: '#e0c265',
          dark: '#9c8438',
          deep: '#735f24',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.4em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
