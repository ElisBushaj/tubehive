/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#ff0040",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        animate: {
          "0%, 100%": {
            clipPath: `polygon(
              0% 45%,
              16% 44%,
              33% 50%,
              54% 60%,
              70% 61%,
              84% 59%,
              100% 52%,
              100% 100%,
              0% 100%
            )`,
          },
          "50%": {
            clipPath: `polygon(
              0% 60%,
              15% 65%,
              34% 66%,
              51% 62%,
              67% 50%,
              84% 45%,
              100% 46%,
              100% 100%,
              0% 100%
            )`,
          },
        },
      },
      animation: {
        animate: "animate 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
