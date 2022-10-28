/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '991px' }
    },
    extend: {
      flexGrow: {
        2: 2
      }
    }
  },
  plugins: []
}
