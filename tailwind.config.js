/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '991px' }
    },
    extend: {
      gridTemplateColumns: {
        'sm': 'repeat(1fr, 3fr)'
      },
      flexGrow: {
        2: 2
      }
    }
  },
  plugins: []
}
