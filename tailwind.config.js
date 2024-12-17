/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A122A", // Deep Space Blue
        secondary: "#7D3C98", // Electric purple
        neon: "#00FFFF", // Cyan
        neutral: "#C0C0C0", // Silver Chrome
        pink: "#FF007F", // Laser pink
        lime: "#AFFF33", // Lime green
        danger: "#EF4444", 
        price: "#39FF14",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      koulen: ["Koulen", "sans-serif"],
      roboto: ["Roboto", "sans-serif"], 
    },
  },
  plugins: [],
};
