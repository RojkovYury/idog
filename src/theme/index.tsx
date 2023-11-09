'use client';

import { ThemeProvider  } from '@mui/material/styles';
import { font, theme } from '@/theme/create';



export default function Theme({ children }: { children:any }) {
    return(
        <body className={font.className} style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    )
}