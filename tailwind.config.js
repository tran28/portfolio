/** @type {import('tailwindcss').Config} */
import { colors } from './src/styles/colors'
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
      colors: {
        'cursor': colors.cursor,
        'accent-1': colors['accent-1'],
        'accent-2': colors['accent-2'],
        'primary': {
          'bright': colors.primary.bright,
          'dim': colors.primary.dim,
          'dark': colors.primary.dark,
          'hover-bg': colors.primary['hover-bg'],
        },
        'skills': {
          'bg': colors.skills.bg,
          'text': colors.skills.text,
        },
        'technologies': {
          'bg': colors.technologies.bg,
          'text': colors.technologies.text,
        },
      },
    },
  },
  plugins: [],
}

