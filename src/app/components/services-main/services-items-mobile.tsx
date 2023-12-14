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
        height: `${680 - (yPos * 24)}px`, 
        zIndex: 9 
      }}
    >
      <ServicesItemMobile
        zIndex={'1'} 
        src={'/images/services/fitnes.png'}
        alt={'fitnes'}
        left={'0%'}
        top={'0%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'2'}
        src={'/images/services/grooming.png'}
        alt={'grooming'}
        left={'35%'}
        top={'18%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />
      <ServicesItemMobile 
        zIndex={'3'}
        src={'/images/services/handling.png'}
        alt={'handling'}
        left={'70%'}
        top={'0%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />
      <ServicesItemMobile 
        zIndex={'4'}
        src={'/images/services/massage.png'}
        alt={'massage'}
        left={'0%'}
        top={'36%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'5'}
        src={'/images/services/documents.png'}
        alt={'documents'}
        left={'35%'}
        top={'54%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'6'}
        src={'/images/services/photosession.png'}
        alt={'photosession'}
        left={'70%'}
        top={'36%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'7'}
        src={'/images/services/rent.png'}
        alt={'rent'}
        left={'0%'}
        top={'72%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <ServicesItemMobile 
        zIndex={'8'}
        src={'/images/services/training.png'}
        alt={'training'}
        left={'70%'}
        top={'72%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
    </Box>
  )
} 
