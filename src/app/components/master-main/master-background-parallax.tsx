'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { clr } from "../../colors";
import useScroll from "@/hooks/useScroll";

export default function MasterBackgroundParallax() {
  const [yPos] = useScroll();
  return(
    <>
      <Box
        sx={{
          position: 'relative',
          height: ['100px', '100px', `${350 - yPos * 35}px`, `${350 - yPos * 35}px`],
          width: '100%', 
          backgroundColor: clr.light, 
        }}
      />

      <div>
        <div 
          style={{ 
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
        </div>
        
        <Box 
          sx={{ 
            display: ['none', 'flex', 'flex', 'flex'], 
            zIndex: 3, 
            width: '100%', 
            position: 'absolute', 
            pointerEvents: 'none', 
            justifyContent: 'center', 
            top: `${100 + yPos * 20}px`, 
            overflow: 'hidden' 
          }}
        >
          <Image loading='eager' src="/images/main/masterBull.webp" alt="main1" width={432} height={476} />
        </Box>

        <Box 
          sx={{
            display: ['flex', 'none', 'none', 'none'], 
            zIndex: 3, 
            width: '100%', 
            position: 'absolute', 
            pointerEvents: 'none', 
            justifyContent: 'center', 
            top: `${140 + yPos * 20}px`, 
            overflow: 'hidden' 
          }}
        >
          <Image loading='eager' src="/images/main/mobile/masterBull.webp" alt="main1" width={324} height={357} />
        </Box>
      </div>
    </>
  )
}
