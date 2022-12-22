/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      notoSansTC: ["Noto Sans TC", "sans-serif"],
      notoSerifTC: ["Noto Serif TC", "serif"],
      shadows: ["Shadows Into Light", "cursive"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      // aspectRatio: {
      //   "4/3": "4 / 3",
      // },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        curtainUp: {
          "0%": { height: "100%" },
          "100%": { height: "0%" },
        },
        curtainDown: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        fadeIn1: "fadeIn 1s ease-out forwards",
        fadeIn2: "fadeIn 2s ease-out forwards",
        fadeOut1: "fadeOut 1s ease-out forwards",
        fadeOut2: "fadeOut 2s ease-out forwards",
        enlarge: "enlarge 2s ease-out forwards",
        curtainUp: "curtainUp 2s ease-out forwards",
        curtainDown: "curtainDown 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
