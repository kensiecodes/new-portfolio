/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        water: "#23595f",
        pond: "#645925",
        turmeric: "#dd9f4e",
        mud: "#483d21",
        sand: "#c5b47e",
        cloud: "#b9bdae",
        cinnamon: "#915129",
        blush: "#e4a597",
        sugar: "#e4dcc8",
        rose: "#da716e",
        daylily: "#d85e46",
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Nanum Myeongjo"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
