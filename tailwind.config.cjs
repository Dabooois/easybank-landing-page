/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        regular: '1.8rem',
      },

      fontWeight: {
        customThin: '300',
        customRegular: '400',
        customBold: '700',
      },
    },
  },
  plugins: [],
};
