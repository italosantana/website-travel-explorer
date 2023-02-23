import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
const defaultTheme = createTheme();

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      dark: '#5245E0',
      main: '#6359EC',
      light: '#F5F5F5',
    },
    secondary: {
      dark: '#404042',
      main: '#7E7E80',
      light: '#CACACC',
      contrastText: '#F1F1F4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FAF8ED',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      mobile: 520,
      tablet: 771,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;