import { createTheme } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'

export const font = Amatic_SC({ subsets: ['cyrillic'], weight: ['400', '700'] });

export const theme = createTheme({
    typography: {
      fontFamily: font.style.fontFamily,
      fontSize: 32,
    },
  });
  