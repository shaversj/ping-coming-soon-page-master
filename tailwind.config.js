/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': "375px",
        'lg': '1440px',
      },
      colors: {
        "primary-blue": "hsl(223, 87%, 63%)",
        "secondary-pale-blue": "hsl(223, 100%, 88%)",
        "secondary-light-red": "hsl(354, 100%, 66%)",
        "neutral-gray": "hsl(0, 0%, 59%)",
        "neutral-very-dark-blue": "hsl(209, 33%, 12%)"
      },
      fontFamily: {
        "Libre-Franklin": ['Libre Franklin', "sans-serif"]
      }
    },
  },
  plugins: [],
}