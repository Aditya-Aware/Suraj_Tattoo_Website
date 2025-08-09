import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
      content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4433',
          dark: '#CC3629',
          light: '#FF6B5C'
        },
                  dark: {
            DEFAULT: '#121212',
            '100': '#1A1A1A',
            '200': '#1E1E1E',
            '300': '#2A2A2A',
            lighter: '#1E1E1E',
            light: '#2A2A2A'
          },
        light: {
          DEFAULT: '#FFFFFF',
          darker: '#E0E0E0',
          dark: '#BBBBBB'
        }
      },
              fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          body: ['Poppins', 'sans-serif'],
          heading: ['Metal Mania', 'cursive'],
        },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [forms],
}

export default config