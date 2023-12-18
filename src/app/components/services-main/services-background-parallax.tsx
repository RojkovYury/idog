import { Box } from '@mui/material';
import Image from 'next/image';

interface ServicesBackgroundParallaxProps {
  yPos: number;
}

export default function ServicesBackgroundParallax({ yPos }: ServicesBackgroundParallaxProps) {
  return(
    <div 
      style={{ 
        position: 'absolute', 
        display: 'flex', 
        width: '100%', 
        justifyContent: 'center', 
        height: '300px' 
      }}
    >
      <Box 
        sx={{ 
          position: 'relative', 
          minWidth: '800px', 
          minHeight: '750px', 
          zIndex: 1, 
          top: [
            `${ -210 + yPos * 8}px`, 
            `${ -210 + yPos * 8}px`, 
            `${ -200 + yPos * 12}px`,
            `${ -200 + yPos * 12}px`
          ],
          left: ['20px', '20px', '', ''], 
        }}
      >
        <Image 
          src="/images/services/static/grassBackground.png" 
          alt="layoutMain" 
          width={800} 
          height={750}/>
      </Box>
    </div>
  )
} 
