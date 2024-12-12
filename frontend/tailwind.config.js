/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Cakupan file yang harus diproses Tailwind
  theme: {
    extend: {},
  },
  daisyui : {
    themes : ["light"]
  },
  plugins: [daisyui], // Plugin DaisyUI
};
