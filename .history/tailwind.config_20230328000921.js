/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "textPrimary": "#1a202c",
        "textSecondary": "#2d3748",
        "textTertiary": "#4a5568",
        "mainPrimary": "#2b6cb0",
        "mainSecondary": "#4299e1",
        "mainTertiary": "#63b3ed",
        "success": "#48bb78",
        "danger": "#e53e3e",
        "warning": "#dd6b20",
        "info": "#3182ce",
        "light": "#f7fafc",
        "dark": "#1a202c",
        "white": "#fff",
        "black": "#000",
        //close this
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
        "tiny": ".875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
      },
      spacing: {
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
      },
      boxShadow: {
        "xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "default": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        "xs": "320px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
    plugins: [




    ],
  }
}
