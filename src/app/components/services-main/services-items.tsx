import { Box } from '@mui/material';
import useScroll from "@/hooks/useScroll";
import ServicesItem from "./services-item"

interface ServicesItemsProps {
  currentContent: any;
  setCurrentContent: any;
}

export default function ServicesItems({ currentContent, setCurrentContent }: ServicesItemsProps) {
  const [yPos] = useScroll();
  return(
    <Box 
      sx={{ 
        position: 'relative',
        display: ['none', 'none', 'flex', 'flex'], 
        width: '100%', 
        height: `${850 - (yPos * 24)}px`, 
        zIndex: 20 
      }}
    >
      <ServicesItem 
        src={'/images/services/fitnes.webp'}
        alt={'fitnes'}
        left={'5%'}
        bottom={'50%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/grooming.webp'}
        alt={'grooming'}
        left={'40%'}
        bottom={'20%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />

      <ServicesItem 
        src={'/images/services/handling.webp'}
        alt={'handling'}
        left={'70%'}
        bottom={'-10%'}
        zIndex={'11'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />

      <ServicesItem 
        src={'/images/services/massage.webp'}
        alt={'massage'}
        left={'60%'}
        bottom={'50%'}
        zIndex={'10'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      {/*
      <ServicesItem 
        src={'/images/services/documents.webp'}
        alt={'documents'}
        left={'40%'}
        bottom={'20%'}
        zIndex={'12'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/photosession.webp'}
        alt={'photosession'}
        left={'20%'}
        bottom={'50%'}
        zIndex={'10'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/rent.webp'}
        alt={'rent'}
        left={'65%'}
        bottom={'10%'}
        zIndex={'11'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/training.webp'}
        alt={'training'}
        left={'50%'}
        bottom={'0%'}
        setCurrentContent={setCurrentContent}
      />
      */}
    </Box>
    
  )
} 