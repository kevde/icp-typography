import { Theme, unstable_createMuiStrictModeTheme } from '@mui/material';

export const darkTheme: Theme = unstable_createMuiStrictModeTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3fb543',
      light: '#2e542f',
      dark: '#325033',
      contrastText: 'rgba(119,88,88,0.87)',
    },
    secondary: {
      main: '#00f55a',
      contrastText: 'rgba(86,49,49,0.87)',
    },
    text: {
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.21)',
    },
    error: {
      main: '#291d1c',
      light: '#5c3d39',
      dark: '#856865',
      contrastText: '#582020',
    },
  },
  typography: {
    h1: {
      fontSize: '48pt',
    },
    h2: {
      fontSize: '40pt',
    },
    h3: {
      fontSize: '32pt',
    },
    h4: {
      fontSize: '24pt',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    caption: {
      fontFamily: 'Montserrat',
    },
    fontFamily: 'Montserrat',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          src: local('Montserrat'), url('https://fonts.googleapis.com/css?family=Montserrat');
        }
      `,
    },
  },
})