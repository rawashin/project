/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        subBackground: "var(--subBackground)",
        text: "var(--text)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
