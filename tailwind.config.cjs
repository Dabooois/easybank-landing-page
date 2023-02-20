/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        regular: '1.8rem',
        title: '4rem',
        normal: '1.6rem',
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
      gridTemplateColumns: {
        footer: '1fr  1fr 1fr',
        banner2xl: '46rem 94rem',
        bannerlg: '39.8rem 74.6rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
