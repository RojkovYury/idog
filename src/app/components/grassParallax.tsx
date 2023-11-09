'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function GrassParallax() {
  const [yPos] = useScroll();

  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '863px',
          bottom: '-113px',
          background: `url('/images/services/grass_test.png')`,
          backgroundSize: '1600px 863px',
          // top: `${(350 - yPos * 35)}px`
          zIndex: '1',
        }}
      />
    </>  
  )
}
