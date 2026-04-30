/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171512",
        paper: "#f7f3eb",
        surface: "#fffaf0",
        line: "#d9cfbd",
        moss: "#51624a",
        clay: "#a65f3e",
        ocean: "#315f72",
        graphite: "#292724"
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(41, 39, 36, 0.08)"
      }
    }
  },
  plugins: []
};
