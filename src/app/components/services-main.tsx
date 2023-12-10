import { Box } from '@mui/material';
import ServicesItems from './services-main/services-items';
import { useState } from 'react';
import ServicesContent from './services-main/services-content';
import useScroll from "@/hooks/useScroll";
import servicesContentText from './services-main/services-content-texts.js';

export default function ServicesMain() {
  const [currentContent, setCurrentContent] = useState<any>(servicesContentText.fitnes);
  const [yPos] = useScroll();
  return(
    <>
      <Box 
        sx={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column',
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
          <ServicesItems 
            currentContent={currentContent}
            setCurrentContent={setCurrentContent} 
          />
        </Box>
      </Box>
      <Box sx={{height: '200px'}}/>
     </>
  )

} 

