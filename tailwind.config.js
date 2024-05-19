/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#101011',
      'background': '#aeafc3',
      'primary': '#74769e',
      'secondary': '#8f95f8',
      'accent': '#7f82bc',

      '5': '#392C3D',
      '4': '#593F62',
      '3': '#7C6E8E',
      '2': '#A898BC',
      '1': '#DFD5EF'
    }
  },
  plugins: [],
}

