/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        bone:"#e5dac3",
        orange:"#ff5120",
        burnham:"#003120",
        orange_roughy:"#d6401d"
      }
    },
  },
  plugins: [],
}

