import { Box } from '@mui/material';
import useScroll from "@/hooks/useScroll";
import ServicesItemMobile from './services-item-mobile';

interface ServicesItemsMobileProps {
  currentContent: any;
  setCurrentContent: any;
}

export default function ServicesItemsMobile({ currentContent, setCurrentContent }: ServicesItemsMobileProps) {
  const [yPos] = useScroll();
  return(
    <Box 
      sx={{ 
        position: 'relative',
        display: ['flex', 'flex', 'none', 'none'], 
        width: '100%', 

        // height: `${680 - (yPos * 24)}px`, 
        height: '150px',
        
        zIndex: 9 
      }}
    >
      <ServicesItemMobile
        zIndex={'1'} 
        src={'/images/services/fitnes.webp'}
        alt={'fitnes'}
        left={'0%'}
        top={'0%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'2'}
        src={'/images/services/grooming.webp'}
        alt={'grooming'}
        left={'35%'}
        top={'18%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />
      <ServicesItemMobile 
        zIndex={'3'}
        src={'/images/services/handling.webp'}
        alt={'handling'}
        left={'70%'}
        top={'0%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />
      <ServicesItemMobile 
        zIndex={'4'}
        src={'/images/services/massage.webp'}
        alt={'massage'}
        left={'0%'}
        top={'36%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'5'}
        src={'/images/services/documents.webp'}
        alt={'documents'}
        left={'35%'}
        top={'54%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'6'}
        src={'/images/services/photosession.webp'}
        alt={'photosession'}
        left={'70%'}
        top={'36%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'7'}
        src={'/images/services/rent.webp'}
        alt={'rent'}
        left={'0%'}
        top={'72%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'8'}
        src={'/images/services/training.webp'}
        alt={'training'}
        left={'70%'}
        top={'72%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
    </Box>
  )
} 
