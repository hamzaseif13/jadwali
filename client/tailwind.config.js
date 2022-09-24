module.exports = {
  safelist: [
    'text-red-400',
    'text-orange-400',
    'text-green-400',
    
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm':"400px",
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {colors:{
      mydark:"#191d21",
      mylight:"#343A40",
      overlay:'rgba(0,0,0,0.5)'
    }},
  },
  plugins: [ require('tailwindcss-rtl'),],
}
