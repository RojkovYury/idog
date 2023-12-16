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
        src={'/images/services/fitnes.png'}
        alt={'fitnes'}
        left={'5%'}
        bottom={'50%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/grooming.png'}
        alt={'grooming'}
        left={'40%'}
        bottom={'20%'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent} 
        buttonRight
      />

      <ServicesItem 
        src={'/images/services/handling.png'}
        alt={'handling'}
        left={'70%'}
        bottom={'-10%'}
        zIndex={'11'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
        buttonRight
      />

      <ServicesItem 
        src={'/images/services/massage.png'}
        alt={'massage'}
        left={'60%'}
        bottom={'50%'}
        zIndex={'10'}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />

      {/*
      <ServicesItem 
        src={'/images/services/documents.png'}
        alt={'documents'}
        left={'40%'}
        bottom={'20%'}
        zIndex={'12'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/photosession.png'}
        alt={'photosession'}
        left={'20%'}
        bottom={'50%'}
        zIndex={'10'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
        src={'/images/services/rent.png'}
        alt={'rent'}
        left={'65%'}
        bottom={'10%'}
        zIndex={'11'}
        setCurrentContent={setCurrentContent}
      />

      <ServicesItem 
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