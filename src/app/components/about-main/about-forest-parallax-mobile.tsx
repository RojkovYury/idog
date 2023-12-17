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
          height: '600px', 
          background: `url('/images/forest/mobile/1_layer.webp')`,
          backgroundSize: '900px 600px',
          zIndex: 6,
          bottom: `${(-68) - (yPos * 5) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '600px', 
          background: `url('/images/forest/mobile/2_layer.webp')`,
          backgroundSize: '900px 600px',
          zIndex: 5,
          bottom: `${(-55) - (yPos * 10) }px`
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '600px', 
          background: `url('/images/forest/mobile/3_layer.webp')`,
          backgroundSize: '900px 600px',
          zIndex: 4,
          bottom: `${(50) - (yPos * 20) }px`
        }}
      /> 
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '600px', 
          background: `url('/images/forest/mobile/4_layer.webp')`,
          backgroundSize: '900px 600px',
          zIndex: 3,
          bottom: `${(102) - (yPos * 25) }px`,
        }}
      />
    </div>
  )
}
