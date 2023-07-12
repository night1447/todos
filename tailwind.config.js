/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill': 'repeat(3, minmax(320px, 1fr))',
        'tablet': 'repeat(auto-fit, minmax(320px, 1fr))',
      },
      colors: {
        'yellow': '#FFE12B',
        'accent': '#396B0A',
        'light-accent': '#EDF0DF',
        'red': '#FF5A5F',
        'black-red': '#E8494E'
      }
    },
  },
  plugins: [],
}
