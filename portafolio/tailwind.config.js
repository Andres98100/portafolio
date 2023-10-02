/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': 'linear-gradient(to top, #4e4376, #2b5876), -webkit-linear-gradient(to top, #4e4376, #2b5876), #2b5876',
      }
    },
  },
  plugins: [],
});