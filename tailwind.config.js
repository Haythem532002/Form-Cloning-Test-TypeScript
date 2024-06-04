/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        480: "480px",
      },
      colors: {
        primary: "#1F81B9",
      },
      screens: {
        custom: "850px",
      },
    },
  },
  plugins: [],
};

