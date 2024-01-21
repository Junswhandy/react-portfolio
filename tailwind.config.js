/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#37B9F1",
        abu: "#EEEEF1",
        putih: "#FEFCF3",
        light: "#333",
        merah: "#CC3333",
        hijautombol: "#22C55E",
        kuningtombol: "#FACC15",
        merahtombol: "#EF4444",
      },
      fontFamily: {
        sans: ["sans-serif"],
        kalam: ["Kalam", "cursive"],
        patua: ["Patua One", "cursive"],
        roboto: ["Roboto Serif", "serif"],
        stat: ["Staatliches", "cursive"],
        viga: ["Viga", "sans-serif"],
      },
    },
  },
  plugins: [],
};
