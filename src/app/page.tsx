'use client'

import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'
import { clr } from "./colors";
import Head from "../components/head";
import Main from "./components/main/main";
import MainParallax from "./components/main/mainParallax";
import MountansParallax from "./components/main/mountansParallax";
import AboutUs from "./components/aboutUs";
import TreesParallax from "./components/aboutUs-main/treesParallax";
import GrassParallax from "./components/grassParallax";
import ServicesMain from "./components/services-main";
import WavesParallax from "./components/wavesParallax";

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
          <Head TextColor={clr.dark} HoverColor={clr.primary} TextColorOnHover={clr.light} />
          <Main />
        </Container>
        <MainParallax /> 
        <MountansParallax />
      </Box>

      <Box sx={{ backgroundColor: clr.forest, position: 'relative', zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head TextColor={clr.light} HoverColor={clr.secondary3} TextColorOnHover={clr.dark} />
          <TreesParallax/>
          <AboutUs />
        </Container>
        <GrassParallax />
      </Box>

      <Box sx={{ background: 'linear-gradient(#C8CC92, #D0D6B5)', position: 'relative', zIndex: 30 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head TextColor={clr.dark} HoverColor={clr.primary} TextColorOnHover={clr.light} />
          <ServicesMain />
        </Container>
        <WavesParallax/>
      </Box>  

      <Box sx={{ background: 'linear-gradient(#3C6E82, #191e27)', position: 'relative', zIndex: 40, height: '1000px' }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head TextColor={clr.light} HoverColor={clr.secondary3} TextColorOnHover={clr.dark} />
        </Container>
      </Box>

    </ThemeProvider>
  )
}
// #D0D6B5
// #191e27

// #2E5077
// #63B4D1
// #C2EA94
// #87A0B2

// #6D98BA
// #9AADBF

// <Waves />