/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './helper/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      scale: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        98: '.99',

        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      colors: {
        background: 'rgb(10, 10, 10)',
        // background: 'rgb(3, 8, 30)',
        selected:'#131212',
        background2: '#1A1A1A',
        primary: '#E0FF00',
        'primary-dark': '#B8CC00',

        'apple-news': '#FA2D48',
        'light-tint': '#FA2D48',
        'dark-tint': '#FA2D48',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'title': ['2.25rem', {
          lineHeight: '2.5rem',
          fontWeight: '800',
          letterSpacing: '-0.02em',
        }],
      },
      animation: {
        'title': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY( 10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
