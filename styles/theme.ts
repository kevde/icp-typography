import { Theme, unstable_createMuiStrictModeTheme } from '@mui/material';
import basic from './colors/basic';
import info from './colors/info';
import primary from './colors/primary';
import success from './colors/success';
import transparency from './colors/transparency';
import warning from './colors/warning';
import { VARIANT_DETAILS } from './typography'

export const createTheme = (prefersDarkMode: boolean): Theme => unstable_createMuiStrictModeTheme({
  palette: {
    background: {
      default: prefersDarkMode ? basic[500] : 'fff',
    },
    mode: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: primary[500],
      light: '#2e542f',
      dark: '#325033',
      contrastText: 'rgba(119,88,88,0.87)',
    },
    secondary: {
      main: '#00f55a',
      contrastText: 'rgba(86,49,49,0.87)',
    },
    success: {
      main: success[500],
      light: success[500],
      dark: success[500],
    },
    info: {
      main: info[500],
      light: info[500],
      dark: info[500],
    },
    warning: {
      main: warning[500],
      light: warning[500],
      dark: warning[500],
    },
    text: {
      secondary: 'rgba(0,0,0,0.54)',
      disabled: `${basic[400]}${prefersDarkMode ? transparency[64] : transparency[58]}`,
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