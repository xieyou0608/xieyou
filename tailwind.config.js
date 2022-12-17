/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
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
        enlarge: {
          "0%": { width: 0, height: 0 },
          "100%": { width: "100vw", height: "100vw" },
        },
        curtain: {
          "0%": { height: "100%" },
          "100%": { height: "0%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        enlarge: "enlarge 2s ease-out forwards",
        curtain: "curtain 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
