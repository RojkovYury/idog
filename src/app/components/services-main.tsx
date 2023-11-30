import { Box } from '@mui/material';
import ServicesItems from './services-main/servicesItems';
import { useState } from 'react';
import ServicesContent from './services-main/servicesContent';
import useScroll from "@/hooks/useScroll";
import servicesContentMain from './services-main/servicesContentMain.js';

export default function ServicesMain() {
  const [currentContent, setCurrentContent] = useState(servicesContentMain.fitnes);
  const [yPos] = useScroll();
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        height: '950px',
      }}
    >
      <ServicesContent currentContent={currentContent} />
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          height: `${850 - (yPos * 24)}px`, 
          zIndex: 20 
        }}
      >
        <ServicesItems setCurrentContent={setCurrentContent} />
      </Box>
    </Box>
  )

} 

