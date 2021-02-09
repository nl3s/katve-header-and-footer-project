const Color = require('color');
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();
// const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();

const colorPrimaryHex = '#1A99A5';
const colorSecondaryHex = '#11abc1';
const colorAccent1Hex = '#304543';
const colorAccent2Hex = '#b58676';

module.exports = {
  important: 'html',
  purge: {
    content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    options: {
      // safelist: [''],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          '300': lighten(colorPrimaryHex, 0.2),
          '400': lighten(colorPrimaryHex, 0.1),
          '500': colorPrimaryHex,
          '600': darken(colorPrimaryHex, 0.1),
          '700': darken(colorPrimaryHex, 0.2),
        },
        secondary: {
          '500': colorSecondaryHex,
        },
        'accent-1': {
          '500': colorAccent1Hex,
          '600': darken(colorAccent1Hex, 0.1),
          '700': darken(colorAccent1Hex, 0.2),
        },
        'accent-2': {
          '500': colorAccent2Hex,
        },
      },
      screens: {
        tiny: '250px',
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
