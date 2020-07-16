module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    colors: {
      primary: '#FFCA2E',
      black: '#191714',
      darker: '#2A2A2A',
      dark: '#363636',
      mid: '#595959',
      light: '#D3D3D3',
      lighter: '#E3E3E3',
      lightest: '#F5F5F5',
      white: '#FFF',
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
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
      padding: '2rem',
    },
    extend: {
      zIndex: {
     '-10': '-10',
     '-20': '-20',
      },
      width: {
        'n1/2': '47.8%',
        'n1/3': '31%',
      },
    },
  },
  variants: {},
  plugins: [],
};
