import { Box } from '@mui/material';
import ServicesBillboard from './services-main/servicesBillboard';
import ServicesItems from './services-main/servicesItems';
import { useState } from 'react';
import billboardContent from './services-main/billboardContent.js';

export default function ServicesMain() {

  const [currentBillboardContent, setCurrentBillboardContent] = useState(billboardContent.documents);
  console.log(currentBillboardContent);

  return(
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
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
          height: '600px', 
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

