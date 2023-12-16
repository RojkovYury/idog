import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled'
import { clr } from "../../colors";
import servicesContentMain from './services-content-texts';

const pulse = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`

const AnimatedBox = styled(Box)({
  position: 'absolute',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  zIndex: 20,
  backgroundColor: clr.secondary,
  "&:after": {
    content: "''",
    position: 'absolute',
    border: `4px solid ${clr.grassPrimary}`,
    left: '-20px',
    opacity: 0,
    right: '-20px',
    top: '-20px',
    bottom: '-20px',
    borderRadius: '50%',
    animation: `${pulse} 2.5s linear infinite`,
    zIndex: 20,
    animationDelay: '1.25s',
  },
})


interface ServicesItemProps {
  src: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  zIndex?: string;
  alt: string;
  currentContent: any;
  setCurrentContent?: any; //!!!
  buttonRight?: boolean;
}

export default function ServicesItem(props: ServicesItemProps) {
  return (
    <Box
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

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <div 
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${props.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {(props.currentContent.id === props.alt) &&
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            backgroundColor: clr.ground,
            borderRadius: '50%',
            zIndex: -1,
            opacity: '0.25',
            boxShadow: '0 0 0 50px #947D59'
          }}
        />
      }

      <Box
        // @ts-ignore 
        onClick={() => props.setCurrentContent(servicesContentMain[props.alt])}
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          top: '20%',
          left: props.buttonRight ? '' : '20%',
          right: props.buttonRight ? '20%' : '',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          scale: '0.7',
          transition: 'scale 0.25s',
          "&:hover": {
            scale: '1.2',
          },
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 19,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: clr.grassPrimary,
          }}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 19,
            width: '150px',
            height: '150px',
            borderRadius: '50%',
          }}
        />

        <AnimatedBox />
      </Box>
    </Box>
  )
} 