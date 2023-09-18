/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '340px', // Add a custom breakpoint for 340px screens
      },
    },
  },
  plugins: [],
}