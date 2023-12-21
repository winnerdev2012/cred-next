import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-light': '#FBEA8D',
        'primary-default': '#F5E27D',
        'primary-dark': '#EDD86B',
        'secondary-default': '#A3A1E2',
        'third-default': '#45A9A7',
        'white': '#ffffff',
        'gray-light-1': '#5F5F5F',
        'gray-light-2': '#5F5F5F',
        'gray-light-3': '#B9B9B9',
        'gray-light-4': '#ffffffeb',
        'gray-light-5': '#ffffff80',
        'gray-light-6': '#121212',
        'gray-light-7': '#A5A5A5',
        'gray-dark-1': '#00000080',
        'gray-dark-2': '#000000B2',
        'gray-dark-3': '#151515',
        'gray-dark-4': '#171717',
        'black': '#000000',
        'error': '#FF4471',
        'gray-default': '#D7D7D7',
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
