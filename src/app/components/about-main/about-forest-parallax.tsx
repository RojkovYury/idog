'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function AboutForestParallax() {
  const [yPos] = useScroll();

  return (
    <>
      <Box 
        sx={{ 
          display: ['none', 'none', 'flex', 'flex'], 
          position: 'relative', 
          pointerEvents: 'none', 
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '1080px', 
            background: `url('/images/forest/1_layer.png')`,
            backgroundSize: '1920px 1080px',
            zIndex: 6,
            bottom: `${(70 - (16 * 18) + 150) - yPos * 5 }px`
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
            bottom: `${(100 - (16 * 18) + 150) - yPos * 10 }px`
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
            bottom: `${(120 - (16 * 18) + 200) - yPos * 20 }px`
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
            bottom: `${(140 - (16 * 18) + 250) - yPos * 25 }px`,
          }}
        />
      </Box>

      <Box 
        sx={{ 
          display: ['flex', 'flex', 'none', 'none'], 
          position: 'relative', 
          pointerEvents: 'none', 
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '430px', 
            background: `url('/images/forest/mobile/1_layer.png')`,
            backgroundSize: '900px 430px',
            zIndex: 6,
            bottom: `${(70 - (16 * 18) + 260) - yPos * 5 }px`
          }}
        />
 {/*        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '430px',  
            background: `url('/images/forest/mobile/2_layer.png')`,
            backgroundSize: '900px 430px',
            zIndex: 5,
            bottom: `${(100 - (16 * 18) + 270) - yPos * 10 }px`
          }}
        />
*/}
        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '430px', 
            background: `url('/images/forest/mobile/3_layer.png')`,
            backgroundSize: '900px 430px',
            zIndex: 4,
            bottom: `${(120 - (16 * 18) + 260) - yPos * 20 }px`
          }}
        /> 

        <Box 
          sx={{ 
            position: 'absolute', 
            width: '100%', 
            height: '430px', 
            background: `url('/images/forest/mobile/4_layer.png')`,
            backgroundSize: '900px 430px',
            zIndex: 3,
            bottom: `${(140 - (16 * 18) + 350) - yPos * 25 }px`,
          }}
        />
      </Box>
    </>   
  )
}
