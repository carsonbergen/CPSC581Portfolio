/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'wittgenstein': ['Wittgenstein'],
      },
      colors: {
        'primary-light': '#D5D6DB',
        'secondary-light': '#000000',
        'accent-pink': '#F72798',
        'accent-yellow': '#EBF400',
        'accent-orange': '#F57D1F',
      }
    },
  },
  plugins: [
  ],
}