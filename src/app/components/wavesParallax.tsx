'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function WavesParallax() {
  const [yPos] = useScroll();

  return (
    <>
      <Box sx={{ position: 'relative', pointerEvents: 'none' }}>
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '293px', 
            background: `url('/images/waves/1_layer.png')`,
            backgroundSize: '1278px 293px',
            zIndex: 6,
            bottom: 0,
            // bottom: `${(70 - (16 * 18) + 150) - yPos * 5 }px`
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
            bottom: 0,
            // bottom: `${(100 - (16 * 18) + 150) - yPos * 10 }px`
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
            bottom: 0,
            // bottom: `${(120 - (16 * 18) + 200) - yPos * 20 }px`
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
            bottom: 0,
            // bottom: `${(140 - (16 * 18) + 250) - yPos * 25 }px`,
          }}
        />
      </Box>
    </>   
  )
}
