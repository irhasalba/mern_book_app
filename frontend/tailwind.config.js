module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Cakupan file yang harus diproses Tailwind
  theme: {
    extend: {},
  },
  daisyui : {
    themes : ["light"]
  },
  plugins: [require('daisyui')], // Plugin DaisyUI
};
