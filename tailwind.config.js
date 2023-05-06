/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#022525",
        "background-lite": "#073434",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
