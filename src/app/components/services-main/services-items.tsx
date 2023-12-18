'use client'

import useScroll from "@/hooks/useScroll";
import { Box } from "@mui/material";
import ServicesItem from "./services-item"

interface ServicesItemsProps {
  currentContent: any;
  setCurrentContent: any;
}

export default function ServicesItems({ currentContent, setCurrentContent }: ServicesItemsProps) {
  const [ yPos ] = useScroll();
  return(
    <Box 
      sx={{ 
        position: 'relative',
        display: 'flex', 
        width: '100%', 
        height: [
          '150px', 
          '150px', 
          `${850 - (yPos * 24)}px`, 
          `${850 - (yPos * 24)}px`
        ], 
        zIndex: 9 
      }}
    >
      <ServicesItem
        zIndex={'1'} 
        src={'/images/services/fitnes.webp'}
        alt={'fitnes'}
        left={['0%', '0%', '0%', '0%']}
        top={['0%', '0%', '0%', '0%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItem 
        zIndex={'2'}
        src={'/images/services/grooming.webp'}
        alt={'grooming'}
        left={['35%', '35%', '35%', '35%']}
        top={['20%', '20%', '20%', '20%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />
      <ServicesItem 
        zIndex={'3'}
        src={'/images/services/handling.webp'}
        alt={'handling'}
        left={['70%', '70%', '70%', '70%']}
        top={['0%', '0%', '0%', '0%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />
      <ServicesItem 
        zIndex={'4'}
        src={'/images/services/massage.webp'}
        alt={'massage'}
        left={['0%', '0%', '0%', '0%']}
        top={['60%', '60%', '60%', '60%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItem 
        zIndex={'5'}
        src={'/images/services/documents.webp'}
        alt={'documents'}
        left={['35%', '35%', '35%', '35%']}
        top={['90%', '90%', '90%', '90%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItem 
        zIndex={'6'}
        src={'/images/services/photosession.webp'}
        alt={'photosession'}
        left={['70%', '70%', '70%', '70%']}
        top={['60%', '60%', '60%', '60%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItem 
        zIndex={'7'}
        src={'/images/services/rent.webp'}
        alt={'rent'}
        left={['0%', '0%', '0%', '0%']}
        top={['120%', '120%', '120%', '120%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItem 
        zIndex={'8'}
        src={'/images/services/training.webp'}
        alt={'training'}
        left={['70%', '70%', '70%', '70%']}
        top={['120%', '120%', '120%', '120%']}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
    </Box>
    
  )
} 