'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function GrassParallax() {
  const [yPos] = useScroll();

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '1080px', 
            background: `url('/images/forest/1_layer.png')`,
            backgroundSize: '1920px 1080px',
            zIndex: 6,
            bottom: '-150px',
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '1080px', 
            background: `url('/images/forest/2_layer.png')`,
            backgroundSize: '1920px 1080px',
            zIndex: 5,
            bottom: `${(150 - (16 * 18) + 150) - yPos * 15 }px`
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '1080px', 
            background: `url('/images/forest/3_layer.png')`,
            backgroundSize: '1920px 1080px',
            zIndex: 4,
            bottom: `${(150 - (16 * 18) + 250) - yPos * 20 }px`
          }}
        /> 
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '1080px', 
            background: `url('/images/forest/4_layer.png')`,
            backgroundSize: '1920px 1080px',
            zIndex: 3,
            bottom: `${(150 - (16 * 17) + 300) - yPos * 25 }px`
          }}
        /> 
      </Box>
    </>   
  )
}
