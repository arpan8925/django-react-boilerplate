/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/js/**/*.{js,jsx,ts,tsx}",
    "./backend/templates/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
      },
    },
  },
  plugins: [],
}
