import { Theme, unstable_createMuiStrictModeTheme } from '@mui/material';
import { VARIANT_DETAILS } from './typography'

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
    fontFamily: 'Montserrat',
    allVariants: {
      fontFamily: 'Montserrat',
    },
    ...VARIANT_DETAILS,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          src: url('https://fonts.googleapis.com/css?family=Montserrat');
        }
      `,
    },
  },
})