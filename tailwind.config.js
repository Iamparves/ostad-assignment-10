/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1170px",
        },
      },
      fontFamily: {
        josefin: ["var(--font-josefin)", ...fontFamily.serif],
        source_serif: ["var(--font-source_serif)", ...fontFamily.serif],
        siliguri: ["var(--font-siliguri)", ...fontFamily.serif],
      },
      colors: {
        primary: "#FF4C60",
        secondary: "#4B4870",
        "secondary-2": "#454360",
        "secondary-3": "#596172",
      },
    },
  },
  plugins: [],
};
