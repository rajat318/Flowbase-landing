/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f5ff',
          100: '#e6ecff',
          200: '#c3d0ff',
          300: '#9fb3ff',
          400: '#5c7cff',
          500: '#3b5bfd',
          600: '#2a41d6',
          700: '#2032a8',
          800: '#1a2882',
          900: '#161f61',
        },
        surface: {
          light: '#ffffff',
          dark: '#0b0d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(16, 24, 40, 0.08)',
        card: '0 2px 8px rgba(16, 24, 40, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
