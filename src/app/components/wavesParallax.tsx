'use client'

import { Box, keyframes } from "@mui/material";
import useScroll from "@/hooks/useScroll";

const waveAnimate = keyframes`
    0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: 1278px;
  }
`;

const waveAnimateReverse = keyframes`
    0% {
    background-position-x: 0px;
  }

  100% {
    background-position-x: -1278px;
  }
`;

export default function WavesParallax() {
  const [yPos] = useScroll();
  return (
    <>
      <Box 
        sx={{ 
          position: 'relative', 
          pointerEvents: 'none', 
          height: `${600 - yPos * 18}px`,
          zIndex: 50,
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '293px', 
            background: `url('/images/waves/1_layer.png')`,
            backgroundSize: '1278px 293px',
            zIndex: 6,
            bottom: 0,
            animation: `${waveAnimate} 80s linear infinite`,
            animationDelay: '-5s', 
          }}
        />
        
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '293px', 
            background: `url('/images/waves/2_layer.png')`,
            backgroundSize: '1278px 293px',
            zIndex: 5,
            animation: `${waveAnimateReverse} 90s linear infinite`,
            animationDelay: '-25s', 
            bottom: `${100 - yPos * 6 }px`
          }}
        />
      
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '293px', 
            background: `url('/images/waves/3_layer.png')`,
            backgroundSize: '1278px 293px',
            zIndex: 4,
            animation: `${waveAnimate} 100s linear infinite`,
            animationDelay: '-5s', 
            bottom: `${250 - yPos * 14 }px`
          }}
        /> 
        
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '293px', 
            background: `url('/images/waves/4_layer.png')`,
            backgroundSize: '1278px 293px',
            zIndex: 3,
            animation: `${waveAnimateReverse} 110s linear infinite`,
            animationDelay: '-15s', 
            bottom: `${300 - yPos * 18 }px`
          }}
        />
      </Box>
      
    </>   
  )
}
