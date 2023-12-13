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
        height: `${850 - (yPos * 24)}px`, 
        zIndex: 20 
      }}
    >
      <ServicesItemMobile 
        src={'/images/services/fitnes.png'}
        alt={'fitnes'}
        left={'5%'}
        top={'0%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItemMobile 
        src={'/images/services/grooming.png'}
        alt={'grooming'}
        left={'40%'}
        top={'15%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />

      <ServicesItemMobile 
        src={'/images/services/handling.png'}
        alt={'handling'}
        left={'60%'}
        top={'30%'}
        zIndex={'11'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />

      <ServicesItemMobile 
        src={'/images/services/massage.png'}
        alt={'massage'}
        left={'30%'}
        top={'45%'}
        zIndex={'10'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      {/*
      <ServicesItemMobile 
        src={'/images/services/documents.png'}
        alt={'documents'}
        left={'40%'}
        bottom={'20%'}
        zIndex={'12'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItemMobile 
        src={'/images/services/photosession.png'}
        alt={'photosession'}
        left={'20%'}
        bottom={'50%'}
        zIndex={'10'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItemMobile 
        src={'/images/services/rent.png'}
        alt={'rent'}
        left={'65%'}
        bottom={'10%'}
        zIndex={'11'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItemMobile 
        src={'/images/services/training.png'}
        alt={'training'}
        left={'50%'}
        bottom={'0%'}
        setCurrentContent={setCurrentContent}
      />
      */}
    </Box>
  )
} 