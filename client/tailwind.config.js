/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1B1A17',
        secondaryColor: '#A35709',
        yellowColor: '#F0E3CA',
        orangeColor: '#FF8303',
      },
      fontFamily: {
        logoFont: ['Pacifico', 'cursive'],
      },
    },
  },
  // plugins: [],
}
