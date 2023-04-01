/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),


      //fix postcss loader 
      require("postcss-import"),
      require("tailwindcss"),
      require("autoprefixer"),


    ],
  }
}
