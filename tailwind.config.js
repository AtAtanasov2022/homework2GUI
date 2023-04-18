/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bar-green':'#bfe9dd', //#89d7c0
      'promotion-green':'#6eceb2'
    },
    
    fontFamily: {
      'dm-serif-display': ['DM Serif Display', 'serif'],
      'avenir-book': ['Avenir Book', 'sans-serif'],
    },
    
    fontSize: {
      '40': '40px',
      '32': '32px',
      '30': '30px',
      '20': '20px',
      '18': '18px',
    },
    
    letterSpacing: {
      'tighter': '-0.8px',
      'tight': '-0.6px',
      'normal': '0',
      'wide': '0.6px',
      'wider': '0.8px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}

