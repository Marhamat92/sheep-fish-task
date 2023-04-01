/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        textPrimary: "#1a202c",
        textSecondary: "#2d3748",
        textTertiary: "#4a5568",
        mainPrimary: "#2b6cb0",
        mainSecondary: "#4299e1",
        mainTertiary: "#63b3ed",
        success: "#48bb78",
        danger: "#e53e3e",
        warning: "#dd6b20",
        info: "#3182ce",
        light: "#f7fafc",
        dark: "#1a202c",
        white: "#fff",
        black: "#000",
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),

      // ...

    ],
  }
