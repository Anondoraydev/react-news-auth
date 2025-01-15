/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: "'Poppins', serif"
      },
      colors:{
        NavColer: "#706F6F"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

