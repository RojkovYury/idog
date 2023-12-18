import Image from 'next/image';
import useScroll from "@/hooks/useScroll";

interface ServicesBackgroundParallaxProps {
  isMobile: boolean;
}

export default function ServicesBackgroundParallax({ isMobile }:ServicesBackgroundParallaxProps) {
  const [yPos] = useScroll();
  return(
    <div 
      style={{ 
        position: 'absolute', 
        display: 'flex', 
        width: '100%', 
        justifyContent: 'center', 
        height: '300px' 
      }}
    >
      <div 
        style={{ 
          position: 'relative', 
          minWidth: '800px', 
          minHeight: '750px', 
          zIndex: 1, 
          top: isMobile ? `${ -210 + yPos * 8}px` : `${ -200 + yPos * 12}px`,
          left: isMobile ? '20px' : '',
        }}
      >
        <Image 
          src="/images/services/static/grassBackground.png" 
          alt="layoutMain" 
          width={800} 
          height={750}/>
      </div>
    </div>
  )
} 
