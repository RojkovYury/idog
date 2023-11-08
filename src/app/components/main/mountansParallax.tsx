import { Box } from "@mui/material";
import { clr } from "../../colors";

interface MountansParallaxProps {
  yPos: number; 
}

export default function MountansParallax({ yPos }: MountansParallaxProps) {
 
  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/1_layer.png')`,
          backgroundSize: '1280px 720px',
          zIndex: 6,
          top: `${(350 - yPos * 35)}px`
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/2_layer.png')`,
          backgroundSize: '1280px 720px',
          zIndex: 5,
          top: `${(350 - yPos * 35) + (yPos * 20)}px`
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/3_layer.png')`,
          backgroundSize: '1280px 720px',
          zIndex: 4,
          top: `${(350 - yPos * 35) + (yPos * 30)}px`
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/4_layer.png')`,
          backgroundSize: '1280px 720px',
          zIndex: 3,
          top: `${(350 - yPos * 35) + (yPos * 40)}px`
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/5_layer.png')`,
          backgroundSize: '1280px 720px',
          zIndex: 2,
          top: `${(350 - yPos * 35) + (yPos * 50)}px`
        }}
      /> 
    </>  
  )
}
