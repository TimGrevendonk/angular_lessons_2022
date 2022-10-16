// const { keyframes } = require('@angular/animations');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
        '0%, 100%': { transform: 'rotate(-1deg)' },
        '50%': { transform: 'rotate(1deg)' },
        }
      },
      colors: {
        "lilac": "#c8b4c8",
      }
    },
  },
  plugins: [],
}
