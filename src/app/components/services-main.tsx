'use client'

import useScroll from "@/hooks/useScroll";
import { useState } from 'react';
import ServicesContent from './services-main/services-content';
import ServicesContentMobile from './services-main/services-content-mobile';
import servicesContentText from './services-main/services-content-texts.js';
import ServicesItems from './services-main/services-items';

export default function ServicesMain() {
  const [currentContent, setCurrentContent] = useState<any>(servicesContentText.fitnes);
  const [ yPos ] = useScroll();
  return(
    <>
      <div 
        style={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column',
        }}
      >
        <ServicesContent currentContent={currentContent} />
        <ServicesContentMobile currentContent={currentContent} />

        <ServicesItems currentContent={currentContent} setCurrentContent={setCurrentContent} />

      </div>
      <div 
        style={{height: '200px'}}
      />
     </>
  )

} 

