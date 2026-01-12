/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // blue-600
        accent: "#22C55E",  // green-500
      },
    },
  },
  plugins: [],
};
