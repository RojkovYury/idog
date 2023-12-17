'use client'

import useScroll from "@/hooks/useScroll";

export default function AboutForestParallaxMobile() {
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
          background: `url('/images/forest/1_layer.png')`,
          backgroundSize: '1920px 1080px',
          zIndex: 6,
          bottom: `${(-68) - (yPos * 5) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/2_layer.png')`,
          backgroundSize: '1920px 1080px',
          zIndex: 5,
          bottom: `${(-38) - (yPos * 10) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/3_layer.png')`,
          backgroundSize: '1920px 1080px',
          zIndex: 4,
          bottom: `${(32) - (yPos * 20) }px`
        }}
      /> 
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '1080px', 
          background: `url('/images/forest/4_layer.png')`,
          backgroundSize: '1920px 1080px',
          zIndex: 3,
          bottom: `${(102) - (yPos * 25) }px`,
        }}
      />
    </div>
  )
}
