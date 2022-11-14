import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['S-CoreDream-3Light'],
  },
  palette: {
    primarybut: {
      main: '#fff',
      contrastText: '#ff4400'
    },
    neutral: {
      main: '#fff',
      contrastText: '#1976d2',
    },
  }
});

export default theme;