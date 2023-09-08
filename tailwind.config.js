/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bl: {
          100: "#EFEBFF",
          200: "#BEADFF",
          300: "#633CFF",
        },
        gr: {
          100: "#D9D9D9",
          200: "#737373",
          300: "#333333",
        },
        danger: "#FF3939",
      },
    },
  },
  plugins: [],
};
