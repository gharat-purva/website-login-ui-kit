/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'darkblue': '#023aae',
      'darkgray': '#acb0b8',
      'realwhite': "#ffffff",
      'grafhi-blue': '#023aae',
      'grafhi-orange': '#f08a5d',
      'grafhi-light-blue': '#40c4ff',
      'grafhi-red': '#b83b5e',
      'grafhi-green': '#81c784',
      'grafhi-gray': '#d9d9d9',
      'structblue': '#0779ff',
      'mint': '#96ffec',
      'burgundy':'#6a2c70',
      'highlight-yellow': '#f9ed69',
      'input-grey':"#f8f9fb",
      'black':"#000",
      'turbo-blue':'#0b57f5'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
      },
      spacing: {
        'full': '100%', 
        '140': '44rem'
      },
    },
  },
  plugins: [],
}
