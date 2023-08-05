/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css}",
    "./yes/index.html",
    "./confirm/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: { body: "#FFF2E9", card: "#FFDB2E" },
      fontFamily: {
        custom: ["Lobster", "cursive"],
        footer: ["'Dai Banna SIL'", "serif"],
      },
      textColor: { custom: "#321C00" },
    },
  },
  plugins: [],
};
