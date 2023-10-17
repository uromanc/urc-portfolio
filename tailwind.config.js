/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        // light colors
        'alice-blue': '#F5FCFF',
        'air-force-blue': '#4F8CA6',
        'columbia-blue': '#D0DEE4',
        // dark colors
        'gunmetal-gray': '#25363E',
        'charcoal-gray': '#394E58',
        'paynes-gray': '#456270',
        'slate-gray': '#6C838F',
        'cadet-gray': '#89A4B0'
    },
    extend: {},
  },
  plugins: [],
}

