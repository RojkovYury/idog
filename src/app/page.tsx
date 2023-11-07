'use client'

import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'
import { clr } from "./colors";
import Head from "./components/head";
import Main from "./components/main";
import MainCenter from "./components/mainCenter";
import Waves from "./components/waves";
import Services from "./components/services";

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

      <Box sx={{ height: '700px', backgroundColor: clr.light, zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head color='secondary4'/>
          <Main />
        </Container>
      </Box>

      <MainCenter yPos={yPos}/>

      <Box sx={{ position: 'relative'}}>
        <Waves yPos={yPos}/>
      </Box>

      <Box sx={{ height: '1000px', backgroundColor: clr.secondary4, zIndex: 10 }}>
        <Container maxWidth='lg' sx={{ overflow: 'hidden' }}>
          <Head color='secondary4'/>
          <Services />
        </Container>
      </Box>       

    </ThemeProvider>
  )
}

/*
overflowX: 'hidden', overflowY: 'visible'
transition: 'all 1s'
*/