'use client';

import { Box } from "@mui/material";
import Image from 'next/image';
import useScroll from "@/hooks/useScroll";


export default function TreesParallax() {
  const [yPos] = useScroll();

  return(
      <>
        <Box sx={{ position: 'absolute', width: '100%', opacity: '0.4', pointerEvents: 'none' }}>
          <Box 
            sx={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              left: '-20px', 
              top: `${ -170 + yPos * 35}px`,
            }}
          >
            <Image src="/images/about/static/forest_layer.png" alt="forest_layer" width={850} height={950} />
          </Box>
        </Box>
      </>
  )
}  
