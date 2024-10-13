/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui : {
    themes : ["light"]
  },
  plugins: [
    require('daisyui')
  ],
}

