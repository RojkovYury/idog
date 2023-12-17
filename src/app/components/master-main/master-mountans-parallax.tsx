'use client'

import useScroll from "@/hooks/useScroll";

export default function MasterMountansParallax() {
  const [yPos] = useScroll();
  return (
    <div 
      style={{
        display: 'flex', 
      }}
    >
      <div 
        style={{
          position: 'absolute', 
          width: '100%', 
          height: '720px', 
          background: `url('/images/mountans/1_layer.webp')`,
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
          background: `url('/images/mountans/2_layer.webp')`,
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
          background: `url('/images/mountans/3_layer.webp')`,
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
          background: `url('/images/mountans/4_layer.webp')`,
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
          background: `url('/images/mountans/5_layer.webp')`,
          backgroundSize: '1280px 720px',
          zIndex: 2,
          top: `${(350 - yPos * 35) + (yPos * 50)}px`
        }}
      /> 
    </div>
  )
}
