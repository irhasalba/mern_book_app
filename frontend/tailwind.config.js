/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Cakupan file yang harus diproses Tailwind
  theme: {
    extend: {},
  },
  daisyui : {
    themes : ["light"]
  },
  plugins: [require('daisyui')], // Plugin DaisyUI
};
