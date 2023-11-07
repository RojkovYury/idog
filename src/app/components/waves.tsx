import { Box } from "@mui/material";
import { clr } from "../colors";

interface WavesProps {
  yPos: number; 
}

export default function Waves({ yPos }: WavesProps) {

  const waveBaseSXProps = { 
    position: 'absolute', 
    left: '0', 
    width: '100%', 
    height: '100px', 
    background: `url('/images/wave2.png')`, 
    backgroundSize: '1000px 100px' 
  }
 
  return (
    <>
      <Box 
        sx={{ 
          ...waveBaseSXProps, 
          bottom: `${ 400 - ((yPos / 7) * 400) }px`,
          animation: 'waveAnimateReverse 15s linear infinite', 
          zIndex: '6', 
          opacity: 0.25, 
          animationDelay: '-5s' 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          left: '0', 
          bottom: '0px', 
          width: '100%', 
          height: `${ 400 - ((yPos / 7) * 400) }px`, 
          zIndex: '6',
          backgroundColor: clr.secondary4, 
          opacity: 0.25 
        }} 
      />

      <Box 
        sx={{ 
          ...waveBaseSXProps, 
          bottom: `${ 325 - ((yPos / 7) * 325) }px`, 
          animation: 'waveAnimate 30s linear infinite', 
          zIndex: '7', 
          opacity: 0.5, 
          animationDelay: '-15s' 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          left: '0', 
          bottom: '0px', 
          width: '100%', 
          height: `${ 325 - ((yPos / 7) * 325) }px`, 
          zIndex: '7',
          backgroundColor: clr.secondary4, 
          opacity: 0.5
        }} 
      />

      <Box 
        sx={{ 
          ...waveBaseSXProps, 
          bottom: `${ 175 - ((yPos / 7) * 175) }px`,  
          animation: 'waveAnimateReverse 60s linear infinite', 
          zIndex: '8', 
          opacity: 0.75, 
          animationDelay: '-30s' 
        }} 
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          left: '0', 
          bottom: '0px', 
          width: '100%', 
          height: `${ 175 - ((yPos / 7) * 175) }px`,  
          zIndex: '8',
          backgroundColor: clr.secondary4, 
          opacity: 0.75
        }} 
      />

      <Box 
        sx={{ 
          ...waveBaseSXProps, 
          bottom: '0px', 
          animation: 'waveAnimate 90s linear infinite', 
          zIndex: '9', 
          opacity: 1, 
          animationDelay: '0s' 
          }} 
        />
    </>  
  )
}
