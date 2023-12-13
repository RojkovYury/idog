import { Box } from '@mui/material';
import { useState } from 'react';
import useScroll from "@/hooks/useScroll";
import ServicesContent from './services-main/services-content';
import ServicesContentMobile from './services-main/services-content-mobile';
import servicesContentText from './services-main/services-content-texts.js';
import ServicesItems from './services-main/services-items';
import ServicesItemsMobile from './services-main/services-items-mobile';

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
        <ServicesContentMobile currentContent={currentContent} />

        <ServicesItems
          currentContent={currentContent}
          setCurrentContent={setCurrentContent} 
        />


        <ServicesItemsMobile 
          currentContent={currentContent}
          setCurrentContent={setCurrentContent} 
        />
        

      </Box>
      <Box sx={{height: '200px'}}/>
     </>
  )

} 

