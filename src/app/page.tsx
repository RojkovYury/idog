'use client'

import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'
import { clr } from "./colors";
import Head from "../components/head";
import Main from "./components/main/main";
import MainParallax from "./components/main/mainParallax";
import MountansParallax from "./components/main/mountansParallax";
import Services from "./components/services";
import TreesParallax from "./components/services/treesParallax";
import GrassParallax from "./components/grassParallax";

const amatic_SC = Amatic_SC({ subsets: ['cyrillic'], weight: ['400', '700'] })
const theme = createTheme({
  typography: {
    fontFamily: amatic_SC.style.fontFamily,
    fontSize: 32,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ backgroundColor: clr.light, position: 'relative', zIndex: 10 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head color='forest'/>
          <Main />
        </Container>
        <MainParallax /> 
        <MountansParallax />
      </Box>

      <Box sx={{ backgroundColor: clr.forest, position: 'relative', zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head color='forest'/>
          <TreesParallax/>
          <Services />
        </Container>
        { /*<GrassParallax /> */}
      </Box>

      <Box sx={{ backgroundColor: clr.grass, position: 'relative', zIndex: 30 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden', height: '4000px' }}>
          <Head color='forest'/>
        </Container>
      </Box>  

    </ThemeProvider>
  )
}
