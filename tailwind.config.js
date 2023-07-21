/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    } ,
    ".prespective":{
     perspective:"1000px"
    },
    ".backface-hiiden":{
      backfaceVisibility :"hidden",
      
    }
  })
}) 
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./index.html'],
  theme: {
    extend: {
      keyframes:{
        fullSpin:{
          '100%': {
            transform:'rotate(-360deg)'
          }
        }
      },
      animation:{
        fullSpin:'fullSpin 3s linear infinite'
      }
    },
  },
  plugins: [Myclass],
}

