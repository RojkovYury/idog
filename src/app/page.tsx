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
import ForestParallax from "./components/aboutUs-main/forestParallax";
import ServicesMain from "./components/services-main";
import Ground from "./components/ground";
import ServicesParallax from "./components/services-main/servicesParallax";

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
        <ForestParallax />
      </Box>

      <Box sx={{ backgroundColor: clr.grass, position: 'relative', zIndex: 30 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head TextColor={clr.dark} HoverColor={clr.primary} TextColorOnHover={clr.light} />
          <ServicesParallax />
          <ServicesMain />
          <Box sx={{height: '200px'}}/>
        </Container>
        <Ground />
      </Box>  

      <Box sx={{ backgroundColor: '#947D59', position: 'relative', zIndex: 40, height: '1000px' }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head TextColor={clr.light} HoverColor={clr.secondary3} TextColorOnHover={clr.dark} />
        </Container>
      </Box>

    </ThemeProvider>
  )
}
