import { Theme, ThemeOptions } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    text: {
      primary: 'yellow'
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    text: {
      primary: 'purple'
    },
    primary: {
      main: 'yellow',
    },
    secondary: {
      main: 'yellow',
    },
  },
};

export const darkTheme: Theme = createTheme({
  typography: {
    h1: {
      color: 'blue',
      fontFamily: "'Montserrat', sans-serif",
    },
    s1: {
      color: 'blue',
      fontFamily: "'Montserrat', sans-serif",
    },
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
})

export const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
})