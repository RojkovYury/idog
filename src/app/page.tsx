'use client'

import { Container } from "@mui/material";
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Amatic_SC } from 'next/font/google'
import { clr } from "./colors";
import HeadMain from "./components/head-main";
import MasterMain from "./components/master-main";
import MasterBackgroundParallax from "./components/master-main/master-background-parallax";
import MasterMountansParallax from "./components/master-main/master-mountans-parallax";
import AboutMain from "./components/about-main";
import AboutBackgroundParallax from "./components/about-main/about-background-parallax";
import AboutForestParallax from "./components/about-main/about-forest-parallax";
import ServicesBackgroundParallax from "./components/services-main/services-background-parallax";
import ServicesMain from "./components/services-main";
import ServicesGround from "./components/services-main/services-ground";
import ContactsMain from "./components/contacts-main";
import ContactsUnderground from "./components/contacts-main/contacts-underground";

const amatic_SC = Amatic_SC({ subsets: ['cyrillic'], weight: ['400', '700'] })
const theme = createTheme({
  typography: {
    fontFamily: amatic_SC.style.fontFamily,
    fontSize: 32,
  },
});

export default function Main() {
  return (
    <ThemeProvider theme={theme}>

      <div style={{ backgroundColor: clr.light, position: 'relative', zIndex: 10 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <HeadMain TextColor={clr.dark} HoverColor={clr.primary} TextColorOnHover={clr.light} selected='main'/>
          <MasterMain />
        </Container>
        <MasterBackgroundParallax />
        <MasterMountansParallax />
      </div>

      <div style={{ backgroundColor: clr.forest, position: 'relative', zIndex: 20 }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <HeadMain TextColor={clr.light} HoverColor={clr.forestPrimary} TextColorOnHover={clr.dark} selected='about' />
          <AboutBackgroundParallax />
          <AboutMain />
        </Container>
        <AboutForestParallax />
      </div>

      <div style={{ backgroundColor: clr.grass, position: 'relative', zIndex: 30 }}>
        <Container id='box' maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden' }}>
          <HeadMain TextColor={clr.dark} HoverColor={clr.grassPrimary} TextColorOnHover={clr.light} selected='services' />
          <ServicesBackgroundParallax />
          <ServicesMain />
        </Container>
        <ServicesGround />
      </div>  

      <div style={{ backgroundColor: clr.ground, position: 'relative', zIndex: 40, height: '1000px' }}>
        <Container maxWidth='lg' sx={{ position: 'relative', overflow: 'hidden', zIndex: 40 }}>
          <HeadMain TextColor={clr.light} HoverColor={clr.secondary} TextColorOnHover={clr.dark} selected='contacts' />
          <ContactsMain />
        </Container>
        <ContactsUnderground />
      </div>

    </ThemeProvider>
  )
}
