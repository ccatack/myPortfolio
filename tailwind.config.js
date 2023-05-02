/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {},
      keyframes: {
        slideIn: {
          "0%": { top: "100%" },
          "100%": { top: "0%" },
        },
        slideOut: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },

      animation: {
        slide: "slideIn 0.2s ease-in-out",
        slideout: "slideOut 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
