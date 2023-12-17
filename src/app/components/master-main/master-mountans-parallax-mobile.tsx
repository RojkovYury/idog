'use client'

import useScroll from "@/hooks/useScroll";

export default function MasterMountansParallaxMobile() {
  const [yPos] = useScroll();
  return (
    <>
      <div 
        style={{
          position: 'absolute', 
          width: '100%', 
          height: '540px', 
          background: `url('/images/mountans/mobile/1_layer.webp')`,
          backgroundSize: '960px 540px',
          zIndex: 6,
          bottom: '-60px',
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '540px', 
          background: `url('/images/mountans/mobile/2_layer.webp')`,
          backgroundSize: '960px 540px',
          zIndex: 5,
          bottom: `${(-70) - (yPos * 12) }px`,
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '540px', 
          background: `url('/images/mountans/mobile/3_layer.webp')`,
          backgroundSize: '960px 540px',
          zIndex: 4,
          bottom: `${(-50) - (yPos * 20) }px`,
        }}
      /> 
      <div 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '540px', 
          background: `url('/images/mountans/mobile/4_layer.webp')`,
          backgroundSize: '960px 540px',
          zIndex: 3,
          bottom: `${(-75) - (yPos * 30) }px`,
        }}
      /> 
      <div  
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '540px', 
          background: `url('/images/mountans/mobile/5_layer.webp')`,
          backgroundSize: '960px 540px',
          zIndex: 2,
          bottom: `${(-25) - (yPos * 40) }px`,
        }}
      /> 
    </> 
  )
}
