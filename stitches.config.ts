import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        primary: 'blue',
        secondary: 'darkblue',
        backgroundPrimary: 'linear-gradient(to right, blue, darkblue)',
        backgroundSecondary: 'linear-gradient(to right, white, lightblue)'
      },
    },
    media: {
      mobile: '(min-width: 480px)',
      tablet: '(min-width: 720px)',
      desktop: '(min-width: 780px)'
    },
    utils: {
      marginX: (value: any) => ({ marginLeft: value, marginRight: value }),
      size: (value: number | string) => ({
        height: value,
        width: value
      })
    },
  }
);

export const globalCSS = globalCss({
  '@font-face': [
    {
      fontFamily: 'Ubuntu',
      src: "url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')"
    },
    {
      fontFamily: 'Roboto',
      src: "url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')"
    }
  ],

  ':root': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
  
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '$backgroundPrimary',
    overflow: 'hidden',


    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',
  },

  body: {
    margin: 0,
    display: 'flex',
    placeItems: 'center',
    minWidth: '320px',
    minHeight: '100vh',
  },

  '#root': {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center'
  }
});