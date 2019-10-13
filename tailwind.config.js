module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        purple: {
          100: '#CEC3ED',
          200: '#AD9BE1',
          300: '#8C73D5',
          400: '#7355CC',
          500: '#5A37C3',
          600: '#5231BD',
          700: '#482AB5',
          800: '#3F23AE',
          900: '#2E16A1',
        },
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
