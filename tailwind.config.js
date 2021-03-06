module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    colors: {
      primary: '#FFCA2E',
      black: '#1E1C1A',
      darker: '#2A2A2A',
      dark: '#363636',
      mid: '#595959',
      light: '#D3D3D3',
      lighter: '#E3E3E3',
      lightest: '#F5F5F5',
      white: '#FFF',
    },
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
