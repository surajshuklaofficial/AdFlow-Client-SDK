/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2c3e50",
        background: "#ecf0f1",
        accent: "#e74c3c"
      }
    },
  },
  plugins: [],
}

