'use client'

import useScroll from "@/hooks/useScroll";

export default function AboutForestParallax() {
  const [yPos] = useScroll();
  return (
    <div 
      style={{ 
        display: 'flex',
        position: 'relative', 
        pointerEvents: 'none', 
      }}
    >
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/1_layer.webp')`,
          backgroundSize: '1920px 1080px',
          zIndex: 6,
          bottom: `${(-70) - (yPos * 5) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/2_layer.webp')`,
          backgroundSize: '1920px 1080px',
          zIndex: 5,
          bottom: `${(0) - (yPos * 15) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/3_layer.webp')`,
          backgroundSize: '1920px 1080px',
          zIndex: 4,
          bottom: `${(60) - (yPos * 20) }px`
        }}
      /> 
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/4_layer.webp')`,
          backgroundSize: '1920px 1080px',
          zIndex: 3,
          bottom: `${(120) - (yPos * 25) }px`,
        }}
      />
    </div>
  )
}
