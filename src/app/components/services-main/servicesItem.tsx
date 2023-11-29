import { Box } from '@mui/material';
import Image from 'next/image';
import billboardContent from './billboardContent';

interface ServicesItemProps {
  src: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  zIndex?: string;
  alt: string;
  setCurrentBillboardContent?: any;
}

export default function ServicesItem(props: ServicesItemProps) {

  return(
    <>
      <Box 
        // @ts-ignore 
        onClick={() => props.setCurrentBillboardContent(billboardContent[props.alt])}
        sx={{ 
          position: 'absolute', 
          // border: '1px solid black', 
          width: '200px', 
          height: '200px', 
          left: props.left ? props.left : '', 
          right: props.right ? props.right : '',
          bottom: props.bottom ? props.bottom : '', 
          top: props.top ? props.top : '',
          zIndex: props.zIndex ? props.zIndex : '',
        }}
      >
        <Image src={props.src} alt={props.alt} width={250} height={250}/>
      </Box>
    </>
  )
} 

/*

          transition: 'scale 0.3s',
          "&:hover": { 
            scale: '1.3', 
            zIndex: 20,
          },  

*/