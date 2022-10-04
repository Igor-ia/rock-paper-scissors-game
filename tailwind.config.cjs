/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif']
      },
      backgroundImage: {
        'image-pentagon': "url('/bg-pentagon.svg')",
        'image-triangle': "url('/bg-triangle.svg')",
        'radial-gradient': 'linear-gradient(#1f3756,#141539)',
        'scissors-gradient': 'linear-gradient(#ec9e0e,#eca922)',
        'paper-gradient': 'linear-gradient(#4865f4,#5671f5)',
        'rock-gradient': 'linear-gradient(#dc2e4e,#dd405d)',
        'lizard-gradient': 'linear-gradient(#834fe3,#8c5de5)',
        'cyan': 'linear-gradient(#40b9ce,#52bed1)',
      },
      textColor: {
        'dark': '#3b4363',
        'score': '#2a46c0',
      },
      borderColor: {
        'header-outline': '#606e85',
      }
    },
  },
  plugins: [],
}
