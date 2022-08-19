/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      xs: "640px",
      sm: "768px",
      md: "900px",
      lg: "1024px",
      xl: "1092px",
    },
    colors: ({ colors }) => ({
      transparent: colors.transparent,
      white: colors.white,
      gray: { ...colors.gray, 100: "#F2F2F2", 950: "#111111" },
      sky: colors.sky,
      emerald: colors.emerald,
    }),
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      mono:
        ['"Fira Code", "Dank Mono"', ...defaultTheme.fontFamily.mono] +
        "!important",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
