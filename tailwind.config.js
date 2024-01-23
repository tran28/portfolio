/** @type {import('tailwindcss').Config} */
const Inter = "Inter" // Google Font @import in index.css

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [Inter]
      },
    },
  },
  plugins: [],
}

