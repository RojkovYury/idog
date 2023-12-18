'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function MasterMountansParallax() {
  const [yPos] = useScroll();
  return (
    <>
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
          top: [``, ``, `${(350 - yPos * 35)}px`, `${(350 - yPos * 35)}px`],
          bottom: ['-60px', '-60px', '', ''],
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
          top: [``, ``, `${(350 - yPos * 35)}px`, `${(350 - yPos * 35)}px`],
          bottom: [`${(-70) - (yPos * 12) }px`, `${(-70) - (yPos * 12) }px`, '', ''],
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
          top: [``, ``, `${(350 - yPos * 35)}px`, `${(350 - yPos * 35)}px`],
          bottom: [`${(-50) - (yPos * 20) }px`, `${(-50) - (yPos * 20) }px`, '', ''],
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
          top: [``, ``, `${(350 - yPos * 35)}px`, `${(350 - yPos * 35)}px`],
          bottom: [`${(-75) - (yPos * 30) }px`, `${(-75) - (yPos * 30) }px`, '', ''],
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
          top: [``, ``, `${(350 - yPos * 35)}px`, `${(350 - yPos * 35)}px`],
          bottom: [`${(-25) - (yPos * 40) }px`, `${(-25) - (yPos * 40) }px`, '', ''],
        }}
      /> 
    </>
  )
}
