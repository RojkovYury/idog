'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

interface AboutBackgroundParallaxProps {
  yPos: number;
}

export default function AboutBackgroundParallax({ yPos }: AboutBackgroundParallaxProps) {
  return(
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          opacity: '0.4', 
          pointerEvents: 'none' 
        }}
      >
        <Box 
          sx={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            left: '-20px', 
            top: [
              `${ -170 + yPos * 10}px`, 
              `${ -170 + yPos * 20}px`, 
              `${ -170 + yPos * 20}px`, 
              `${ -170 + yPos * 20}px`
            ], 
          }}
        >
          <Image src="/images/about/static/forest_layer.png" alt="forest_layer" width={850} height={950} />
        </Box>
      </div>
  )
}  
