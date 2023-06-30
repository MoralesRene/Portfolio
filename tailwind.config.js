/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      "poppins":['Poppins'],
      "nunito":['Nunito Sans']
    },
    screens:{
      "xs": "375px",
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}

