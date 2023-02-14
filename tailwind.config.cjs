/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        regular: '1.8rem',
      },
      colors: {
        //primary
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        //neutral
        greyishBlue: 'hsl(233, 8%, 62%)',
        lightGreyishBlue: 'hsl(220, 16%, 96%)',
        lightGray: 'hsl(0, 0%, 98%)',
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
