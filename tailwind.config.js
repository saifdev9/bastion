/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily:{
        secondary :'Inter , sans-serif',
        showcase :'Vina Sans, cursive',
        montserrat: 'Montserrat, sans-serif',
        poppins : 'Poppins, sans-serif'
      },

      height:{
        '97':"26rem",
        '98':"30rem",
        '100':'40rem'
      },

      width:{
        '97':"26rem",
        '98':"30rem",
        '100':'40.5rem'
      },

      screens:{
        'xs':"350px"
      }

      // scale:{
      //   "200":"transform-scale-x: 10 transform-scale-y: 10"
      // }
    },
  },
  plugins: [],
}

