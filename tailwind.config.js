/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    screens:{
      "small":"400px",
      "medium":"600px",
      "large":"800px",
      "larger":"1000px",
      "extraLarge":"1440px"
    },
    extend: {
    },
  },
  plugins: [],
}