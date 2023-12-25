/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  addons: ['@storybook/addon-actions'],
  theme: {
    extend: {},
  },
  plugins: [],
}