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
        'orange-100':'#F14A00',
        'orange-200':'#C62300',

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
    },
  },
  plugins: [],
};
