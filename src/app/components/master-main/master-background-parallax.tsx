'use client';

import Image from 'next/image';
import { Box } from "@mui/material";
import { clr } from "../../colors";
import useScroll from "@/hooks/useScroll";

export default function MasterBackgroundParallax() {
  const [yPos] = useScroll();
  
  return(
    <>
    <Box
        sx={{
          position: 'relative',
          height: `${350 - yPos * 35}px`,
          width: '100%', 
          backgroundColor: clr.light, 
        }}
      />
    <Box>
      <Box 
        sx={{ 
          zIndex: 1,
          width: '100%', 
          position: 'absolute', 
          top: `${150 + yPos * 45}px`, 
          display: 'flex', 
          justifyContent: 'center', 
          overflow: 'hidden' 
        }}
      >
        <Image src="/images/main/layoutMain.png" alt="layoutMain" width={650} height={450} />
      </Box>
      
      <Box 
        sx={{ 
          zIndex: 3, 
          width: '100%', 
          position: 'absolute', 
          pointerEvents: 'none', 
          display: 'flex', 
          justifyContent: 'center', 
          top: `${100 + yPos * 20}px`, 
          overflow: 'hidden' 
        }}
      >
        <Image src="/images/main/mainBull.png" alt="main1" width={432} height={476} />
      </Box>

      
    </Box>
    </>
  )
}
