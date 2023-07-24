/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        'mycolor': '#B68C5A',
      }
    }
  },
  theme: {
    fontFamily: {
      'primaryFont': ['EB Garamond', 'serif'],
      'secondaryFont': ['Poppins', 'sans-serif'],
    },
  },

}



