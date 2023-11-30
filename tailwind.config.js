/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        ns: "300px",
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: "#ECFFE2",
        secondary: "#7FBF5F",
        tertiary: "#306B12",
        background: "#ffffff",
        button: "#248e46",
        header: "#154734",
        foreground: "#000000",
        mutedForeground: "#7a7a7a",
        gradientGreen: "#C1FFA3",
        yellowCall: "#EDC949",
      },
      backgroundImage: {
        "hero-background": "url('https://mayalunaseguros.com/wp-content/uploads/2021/06/familia2-asegurada-con-mayaluna-opt.jpg')",
        "section-background": "url('https://mayalunaseguros.com/wp-content/uploads/2021/06/fondo-verde-seguros-mayaluna-1.jpg')"
      },
    },
  },
  plugins: [],
}
