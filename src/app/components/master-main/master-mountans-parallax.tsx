'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function MasterMountansParallax() {
  const [yPos] = useScroll();

  return (
    <>
      <Box 
        sx={{
          display: ['none', 'none', 'flex', 'flex'], 
        }}
      >
        <div 
          style={{
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/1_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 6,
            top: `${(350 - yPos * 35)}px`
          }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/2_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 5,
            top: `${(350 - yPos * 35) + (yPos * 20)}px`
          }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/3_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 4,
            top: `${(350 - yPos * 35) + (yPos * 30)}px`
          }}
        /> 
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/4_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 3,
            top: `${(350 - yPos * 35) + (yPos * 40)}px`
          }}
        /> 
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%',
            height: '720px', 
            background: `url('/images/mountans/5_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 2,
            top: `${(350 - yPos * 35) + (yPos * 50)}px`
          }}
        /> 
      </Box> 

      {/* mobile */}
      <Box 
        sx={{
          display: ['flex', 'flex', 'none', 'none'], 
        }}
      >
        <div 
          style={{
            position: 'absolute', 
            width: '100%', 
            height: '540px', 
            background: `url('/images/mountans/mobile/1_layer.png')`,
            backgroundSize: '960px 540px',
            zIndex: 6,
            // top: `${(520 - yPos * 35)}px`
            bottom: '-60px',
          }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/mobile/2_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 5,
            bottom: `${(-50) - (yPos * 20) }px`,
          }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/mobile/3_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 4,
            bottom: `${(-50) - (yPos * 30) }px`,
          }}
        /> 
        <div 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/mobile/4_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 3,
            bottom: `${(-75) - (yPos * 40) }px`,
          }}
        /> 
        <div  
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '720px', 
            background: `url('/images/mountans/mobile/5_layer.png')`,
            backgroundSize: '1280px 720px',
            zIndex: 2,
            bottom: `${(-25) - (yPos * 55) }px`,
          }}
        /> 
      </Box> 
    </>
  )
}
