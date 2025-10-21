/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",
        md: "744px",
        lg: "1280px",
      },
      colors: {
        primary: {
          dark: "#2a2f4f",
          light: "#917fb3",
        },
        secondary: {
          purple: "#e5beec",
          pink: "#fec8d8",
        },
      },
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
