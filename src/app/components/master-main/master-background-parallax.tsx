'use client';

import { Box } from '@mui/material';
import Image from 'next/image';
import { clr } from "../../colors";

interface MasterBackgroundParallaxProps {
  yPos: number;
}

export default function MasterBackgroundParallax({ yPos }: MasterBackgroundParallaxProps) {
  return(
    <>
      <Box 
        sx={{
          backgroundColor: clr.light,
          width: '100%',
          height: ['100px', '100px', '250px', '250px'], 
          position: 'relative',
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
            display: 'flex', 
            zIndex: 3, 
            width: '100%', 
            position: 'absolute', 
            pointerEvents: 'none', 
            justifyContent: 'center', 
            top: [`${140 + yPos * 20}px`, `${100 + yPos * 20}px`, `${100 + yPos * 20}px`, `${100 + yPos * 20}px`], 
            overflow: 'hidden' 
          }}
        >
          <Box sx={{ display: ['none', 'flex', 'flex', 'flex'] }}>
            <Image loading='eager' src="/images/main/masterBull.webp" alt="main1" width={432} height={476} />
          </Box>

          <Box sx={{ display: ['flex', 'none', 'none', 'none'] }}>
            <Image loading='eager' src="/images/main/mobile/masterBull.webp" alt="main1" width={324} height={357} />
          </Box>

        </Box>

      </div>
    </>
  )
}
