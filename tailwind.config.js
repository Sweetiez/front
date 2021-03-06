module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        birthstone: ["'Birthstone', cursive"],
        pompiere: ["'Pompiere', cursive"],
      },
      fontSize: {
        xxs: '.60rem',
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        gold: {
          100: '#dba970',
        },
        beige: {
          100: '#F5F5DC',
        },
        grayBlue: {
          200: '#94A3B8',
          400: '#475569'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
