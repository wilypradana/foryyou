/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css}",
    "./yes/index.html",
    "./reject/index.html",
    "./confirm/index.html",
  ],
  theme: {
    extend: {
      animation: {
        "scale-up-hor-left":
          "scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "slide-rotate-ver-left":
          "slide-rotate-ver-left 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955)   both",
      },
      keyframes: {
        "scale-up-hor-left": {
          "0%": {
            transform: "scaleX(.4)",
            "transform-origin": "0% 0%",
          },
          to: {
            transform: "scaleX(1)",
            "transform-origin": "0% 0%",
          },
        },
        "slide-rotate-ver-left": {
          "0%": {
            transform: "translateX(0) rotateY(0)",
          },
          to: {
            transform: "translateX(-150px) rotateY(90deg)",
          },
        },
      },
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
