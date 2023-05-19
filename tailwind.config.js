/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.tsx"],
  theme: {

    backgroundImage:{
      'spike-pattern': "url('background.svg')"
    },
    fontFamily:{
      'Montserrat': ['Montserrat','sans-serif']
    },
    extend: {
      colors: {
        'prussian-blue-900': '#012A4A',
        'prussian-blue-800': '#013A63',
        'prussian-blue-700': '#01497C',
        'prussian-blue-600': '#014F86',
        'prussian-blue-500': '#2A6F97',
        'prussian-blue-400': '#2C7DA0',
        'prussian-blue-300': '#468FAF',
        'prussian-blue-200': '#61A5C2',
        'prussian-blue-100': '#89C2D9',
        'prussian-blue-50': '#A9D6E5',
      },
    },
  },
  plugins: [],
}
