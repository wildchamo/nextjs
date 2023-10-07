/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ECFFE2",
        secundary: "#7FBF5F",
        terciary: "#306B12",
        gradientgreen: "#C1FFA3 ",
        yellowCall:"#EDC949"
      },
    },
  },
  plugins: [],
}
