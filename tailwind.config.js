/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss/colors'),
    require('preline/plugin'),
  ],

  theme: {
    colors: {
      'black': '#171717',
      'white': '#fff',
      blue: colors.blue,
      gray: colors.gray,
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      migra: ['PP Migra', 'serif']
    },
    extend: {
      backgroundImage: {
        'herolight': "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 29.58%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 22.17%),url('/img/bg-light.png')",
        'herodark': "linear-gradient(0deg, #171717 0%, rgba(23, 23, 23, 0) 29.58%), linear-gradient(180deg, #171717 0%, rgba(23, 23, 23, 0) 22.17%),url('/img/bg-dark.png')",
      },
    },
  }
}


