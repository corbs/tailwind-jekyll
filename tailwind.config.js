module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.2em',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#FFCA2E',
        primaryDark: '#F7BC28',
        primaryLight: '#FFCE55',
      },
      zIndex: {
     '-10': '-10',
     '-20': '-20',
      },
      width: {
        'n1/2': '47.8%',
        'n1/3': '31.8%',
        '9': '2.25rem'
      },
    },
  },
  variants: {},
  plugins: [],
};
