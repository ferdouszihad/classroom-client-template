/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  daisyui: {
    themes: true, // This enables all built-in themes
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};