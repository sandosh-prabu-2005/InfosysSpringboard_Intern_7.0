/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f7f5ef',
        ink: '#111111',
        muted: '#5f5f5f',
        line: '#d8d4c8',
        accent: '#f5d547',
        highlight: '#d9f99d',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
