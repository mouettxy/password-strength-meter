import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    transform('tailwindcss-elevation')([]),
  ],
  attributify: true,
  theme: {
    zIndex: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
    },
  },
})
