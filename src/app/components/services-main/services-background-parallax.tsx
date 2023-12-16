import { Box } from '@mui/material';
import Image from 'next/image';
import useScroll from "@/hooks/useScroll";

export default function ServicesBackgroundParallax() {
  const [yPos] = useScroll();

  return(
    <Box 
      sx={{ 
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
          top: `${ -200 + yPos * 12}px`,
        }}
      >
        <Image 
          src="/images/services/static/grassBackground.png" 
          alt="layoutMain" 
          width={800} 
          height={750}/>
      </Box>
    </Box>
  )
} 
