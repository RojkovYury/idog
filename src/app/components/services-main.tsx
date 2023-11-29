import { Box } from '@mui/material';
import ServicesBillboard from './services-main/servicesBillboard';
import ServicesItems from './services-main/servicesItems';
import { useState } from 'react';
import billboardContent from './services-main/billboardContent.js';
import useScroll from "@/hooks/useScroll";

export default function ServicesMain() {
  const [currentBillboardContent, setCurrentBillboardContent] = useState(billboardContent.documents);
  const [yPos] = useScroll();
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        // zIndex: 30,
        // height: '1200px',
        // border: '1px solid red'
      }}
    >

      <ServicesBillboard 
        currentBillboardContent={currentBillboardContent}
      />
      
      <Box 
        sx={{ 
          position: 'relative', 
          // border: '1px solid black', 
          width: '100%', 
          height: `${750 - (yPos * 24)}px`, 
          zIndex: 20 
        }}
      >

        <ServicesItems 
          setCurrentBillboardContent={setCurrentBillboardContent}
        />

      </Box>
    </Box>
  )

} 

