/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#efeae3',
        borderColor: '#d6d3d1',
        customOrangeRed: '#fe330a',
        customOrange: '#ff9831',
        customGray: '#a8a29e'
      },

    },
  },
  plugins: [],
}

