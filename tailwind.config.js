/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        gotham: ['Gotham', 'sans-serif'],
        segoe: ['Segoe UI', 'sans-serif'],
        'gotham-light': ['Gotham Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}