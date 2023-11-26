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
            <Image src="/images/services/static/forest_layer.png" alt="forest_layer" width={850} height={950} />
          </Box>
        </Box>
      </>
  )
}  

/*

        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10', pointerEvents: 'none' }}>
          <Box sx={{ position: 'relative', left: '-50px', top: `${ -80 + yPos * 15}px` }}>
            <Image src="/images/services/static/tree_1_fill.png" alt="tree_1_fill" width={260} height={1000} />
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10', pointerEvents: 'none',  }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', right: '0px', top: `${ -80 + yPos * 15}px` }}>
            <Image src="/images/services/static/tree_2_fill.png" alt="tree_2_fill" width={260} height={1000} />
          </Box>
        </Box>

*/