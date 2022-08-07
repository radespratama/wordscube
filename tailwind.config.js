/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "640px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1092px",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
