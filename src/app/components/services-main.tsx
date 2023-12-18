import { useState } from 'react';
import ServicesContent from './services-main/services-content';
import ServicesContentMobile from './services-main/services-content-mobile';
import servicesContentText from './services-main/services-content-texts.js';
import ServicesItems from './services-main/services-items';
import ServicesItemsMobile from './services-main/services-items-mobile';

interface ServicesMainProps {
  isMobile: boolean;
}

export default function ServicesMain({ isMobile }: ServicesMainProps) {
  const [currentContent, setCurrentContent] = useState<any>(servicesContentText.fitnes);
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

        { (!isMobile) && (
          <ServicesItems
            currentContent={currentContent}
            setCurrentContent={setCurrentContent} 
          />
        )}

        { (isMobile) && (
          <ServicesItemsMobile 
            currentContent={currentContent}
            setCurrentContent={setCurrentContent} 
          />
        )}
        

      </div>
      <div 
        style={{height: '200px'}}
      />
     </>
  )

} 

