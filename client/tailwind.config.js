/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redColor': '#AC4425',
        'greenColor': '#224B0C',
        'lightGreenColor': '#C1D5A4',
        'yellowColor': '#F0F2B6',
        'whiteColor': '#FFFFFF',
        'secondaryColor': '#F6FBF4',
        'primaryColor': '#222831'
      },
      fontFamily: {
        'logoFont': ['Pacifico', 'cursive']
      }
    },
  },
  // plugins: [],
}