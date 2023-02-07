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
        primary: '#3a3a3a',
        secondary: '#bfbfbf',
        backgroundPrimary: '#242424',
        backgroundSecondary: '#616161'
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
  ':root': {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
  
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '$backgroundPrimary',
  
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