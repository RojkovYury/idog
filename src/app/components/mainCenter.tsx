import { Box } from "@mui/material";
import Image from 'next/image';
import { clr } from "../colors";

interface MainCenterProps {
  yPos: number; 
}

export default function MainCenter({ yPos }: MainCenterProps) {
  return(
    <>
      <Box 
        sx={{ 
          zIndex: 2, 
          height: '700px', 
          width: '100%', 
          position: 'absolute', 
          top: `${150 + yPos * 25}px`, 
          display: 'flex', 
          justifyContent: 'center', 
          overflow: 'hidden' 
        }}
      >
        <Image src="/images/layoutMain.png" alt="layoutMain" width={650} height={450} />
      </Box>
      
      <Box 
        sx={{ 
          zIndex: 3, 
          width: '100%', 
          position: 'absolute', 
          pointerEvents: 'none', 
          display: 'flex', 
          justifyContent: 'center', 
          top: `${100 + yPos * 15}px`, 
          overflow: 'hidden' 
        }}
      >
        <Image src="/images/mainBull2.png" alt="main1" width={432} height={476} />
      </Box>

      <Box
        sx={{ 
          height: `${350 - yPos * 35}px`,
          width: '100%', 
          backgroundColor: clr.light, 
          zIndex: 1 
        }}
      />

    </>
  )
}