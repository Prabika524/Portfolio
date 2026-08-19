/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#151513",
        paper: "#FFFFFE",
        muted: "#6B7280",
        line: "#E5E7EB",
        dot: "#E9E9E7",
        accent: "#2563EB",
        okgreen: "#22C55E",
      },
    },
  },
  plugins: [],
};
