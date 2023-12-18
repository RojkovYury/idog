'use client'

import useScroll from "@/hooks/useScroll";
import { Box } from "@mui/material";

export default function MasterMountansParallax() {
  const [ yPos ] = useScroll();
  return (
    <div style={{ display: 'flex' }}>
      <Box 
        sx={{
          position: 'absolute', 
          width: '100%', 
          height: ['540px', '540px', '720px', '720px'], 
          background: [
            `url('/images/mountans/mobile/1_layer.webp')`, 
            `url('/images/mountans/mobile/1_layer.webp')`, 
            `url('/images/mountans/1_layer.webp')`, 
            `url('/images/mountans/1_layer.webp')`
          ], 
          backgroundSize: ['960px 540px', '960px 540px', '1280px 720px', '1280px 720px'], 
          zIndex: 6,
          bottom: '-60px',
        }}
      />

      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['540px', '540px', '720px', '720px'],  
          background: [
            `url('/images/mountans/mobile/2_layer.webp')`, 
            `url('/images/mountans/mobile/2_layer.webp')`, 
            `url('/images/mountans/2_layer.webp')`, 
            `url('/images/mountans/2_layer.webp')`
          ], 
          backgroundSize: ['960px 540px', '960px 540px', '1280px 720px', '1280px 720px'], 
          zIndex: 5,
          bottom: `${(-70) - (yPos * 12) }px`,
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['540px', '540px', '720px', '720px'],  
          background: [
            `url('/images/mountans/mobile/3_layer.webp')`, 
            `url('/images/mountans/mobile/3_layer.webp')`, 
            `url('/images/mountans/3_layer.webp')`, 
            `url('/images/mountans/3_layer.webp')`
          ], 
          backgroundSize: ['960px 540px', '960px 540px', '1280px 720px', '1280px 720px'], 
          zIndex: 4,
          bottom: `${(-50) - (yPos * 20) }px`,
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['540px', '540px', '720px', '720px'],  
          background: [
            `url('/images/mountans/mobile/4_layer.webp')`, 
            `url('/images/mountans/mobile/4_layer.webp')`, 
            `url('/images/mountans/4_layer.webp')`, 
            `url('/images/mountans/4_layer.webp')`
          ], 
          backgroundSize: ['960px 540px', '960px 540px', '1280px 720px', '1280px 720px'], 
          zIndex: 3,
          bottom: `${(-75) - (yPos * 30) }px`,
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%',
          height: ['540px', '540px', '720px', '720px'],  
          background: [
            `url('/images/mountans/mobile/5_layer.webp')`, 
            `url('/images/mountans/mobile/5_layer.webp')`, 
            `url('/images/mountans/5_layer.webp')`, 
            `url('/images/mountans/5_layer.webp')`
          ], 
          backgroundSize: ['960px 540px', '960px 540px', '1280px 720px', '1280px 720px'], 
          zIndex: 2,
          bottom: `${(-25) - (yPos * 40) }px`,
        }}
      /> 
    </div>
  )
}
