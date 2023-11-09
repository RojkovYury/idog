'use server';

import { Box, Container } from "@mui/material";
import { clr } from "./colors";
import Head from "./components/head";
import Main from "./components/main/main";
import MainParallax from "./components/main/mainParallax";
import MountansParallax from "./components/main/mountansParallax";
import Services from "./components/services";
import Trees from "./components/services/trees";
import Waves from "./components/waves";


export default async function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: clr.light, position: 'relative', zIndex: 10 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <Head color='secondary4'/>
          <Main />
        </Container>
        <MainParallax /> 
        <MountansParallax />
      </Box>

      <Box sx={{ backgroundColor: clr.secondary4, position: 'relative', zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden', height: '4000px' }}>
          <Head color='secondary4'/>
          <Trees />
          <Services />
        </Container>
      </Box>       
    </>
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