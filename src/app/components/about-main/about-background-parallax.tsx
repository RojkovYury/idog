'use client';

import Image from 'next/image';
import useScroll from "@/hooks/useScroll";

interface AboutBackgroundParallaxProps {
  isTinyMobile: boolean;
}

export default function AboutBackgroundParallax({ isTinyMobile }: AboutBackgroundParallaxProps) {
  const [yPos] = useScroll();
  return(
      <div style={{ position: 'absolute', width: '100%', opacity: '0.4', pointerEvents: 'none' }}>
        <div 
          style={{ 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center', 
            left: '-20px', 
            top: isTinyMobile ? `${ -170 + yPos * 10}px` : `${ -170 + yPos * 20}px`,
          }}
        >
          <Image src="/images/about/static/forest_layer.png" alt="forest_layer" width={850} height={950} />
        </div>
      </div>
  )
}  
