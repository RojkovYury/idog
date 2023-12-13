import { Box } from "@mui/material";
import { clr } from "../colors";
import AboutTop from "./about-main/about-top";
import AboutContentDecktop from "./about-main/about-content-decktop";
import AboutContentMobile from "./about-main/about-content-mobile";
import AboutBottom from "./about-main/about-bottom";

export default function AboutMain() {

  return(
    <Box 
      sx={{ 
        position: 'relative', 
        height: '900px',
        width: '100%',
        color: clr.light,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        top: '-45px',
        zIndex: 10,
      }}
    >

      <AboutTop />
      <AboutContentDecktop />
      <AboutContentMobile />
      <AboutBottom />

    </Box>
  )
} 

