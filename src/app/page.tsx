'use client'

/*
TODO

крепление веревок
цвет кнопок ховер 2 стр

*/

import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'
import { clr } from "./colors";
import Head from "./components/head";
import Main from "./components/main/main";
import MainParallax from "./components/main/mainParallax";
import MountansParallax from "./components/main/mountansParallax";
import Services from "./components/services";
import Trees from "./components/services/trees";
import Waves from "./components/waves";

const amatic_SC = Amatic_SC({ subsets: ['cyrillic'], weight: ['400', '700'] })
const theme = createTheme({
  typography: {
    fontFamily: amatic_SC.style.fontFamily,
    fontSize: 32,
  },
});

export default function Home() {

  const [yPos, setYPos] = useState(0); 
  const handleScroll = () => {
    setYPos(window.scrollY / 100);
    console.log(window.scrollY / 100);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ backgroundColor: clr.light, position: 'relative', zIndex: 10 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head color='secondary4'/>
          <Main />
        </Container>
        <MainParallax yPos={yPos}/> 
        <MountansParallax yPos={yPos}/>
      </Box>

      <Box sx={{ backgroundColor: clr.secondary4, position: 'relative', zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden', height: '4000px' }}>
          <Head color='secondary4'/>
          <Trees yPos={yPos}/>
          <Services />
        </Container>
      </Box>       

    </ThemeProvider>
  )
}

/*
overflowX: 'hidden', overflowY: 'visible'
transition: 'all 1s'

      <Box sx={{ position: 'relative'}}>
        <Waves yPos={yPos}/>
      </Box>

      <Services />

*/