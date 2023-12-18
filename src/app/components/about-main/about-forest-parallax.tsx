'use client'

import { Box } from "@mui/material";
import useScroll from "@/hooks/useScroll";

export default function AboutForestParallax() {
  const [yPos] = useScroll();
  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['600px', '600px', '1080px', '1080px'], 
          background: [
            `url('/images/forest/mobile/1_layer.webp')`, 
            `url('/images/forest/mobile/1_layer.webp')`, 
            `url('/images/forest/1_layer.webp')`, 
            `url('/images/forest/1_layer.webp')`
          ], 
          backgroundSize: ['900px 600px', '900px 600px', '1920px 1080px', '1920px 1080px'], 
          zIndex: 6,
          bottom: `${(-70) - (yPos * 5) }px`
        }}
      />

      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['600px', '600px', '1080px', '1080px'], 
          background: [
            `url('/images/forest/mobile/2_layer.webp')`, 
            `url('/images/forest/mobile/2_layer.webp')`, 
            `url('/images/forest/2_layer.webp')`, 
            `url('/images/forest/2_layer.webp')`
          ], 
          backgroundSize: ['900px 600px', '900px 600px', '1920px 1080px', '1920px 1080px'], 
          zIndex: 5,
          bottom: [
            `${(-55) - (yPos * 10) }px`, 
            `${(-55) - (yPos * 10) }px`, 
            `${(0) - (yPos * 15) }px`, 
            `${(0) - (yPos * 15) }px`
          ], 
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['600px', '600px', '1080px', '1080px'], 
          background: [
            `url('/images/forest/mobile/3_layer.webp')`, 
            `url('/images/forest/mobile/3_layer.webp')`, 
            `url('/images/forest/3_layer.webp')`, 
            `url('/images/forest/3_layer.webp')`
          ], 
          backgroundSize: ['900px 600px', '900px 600px', '1920px 1080px', '1920px 1080px'], 
          zIndex: 4,
          bottom: [
            `${(50) - (yPos * 20) }px`, 
            `${(50) - (yPos * 20) }px`, 
            `${(60) - (yPos * 20) }px`, 
            `${(60) - (yPos * 20) }px`
          ], 
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: ['600px', '600px', '1080px', '1080px'], 
          background: [
            `url('/images/forest/mobile/4_layer.webp')`, 
            `url('/images/forest/mobile/4_layer.webp')`, 
            `url('/images/forest/4_layer.webp')`, 
            `url('/images/forest/4_layer.webp')`
          ], 
          backgroundSize: ['900px 600px', '900px 600px', '1920px 1080px', '1920px 1080px'], 
          zIndex: 3,
          bottom: [
            `${(102) - (yPos * 25) }px`, 
            `${(102) - (yPos * 25) }px`, 
            `${(120) - (yPos * 25) }px`, 
            `${(120) - (yPos * 25) }px`
          ], 
        }}
      />
    </>
  )
}
