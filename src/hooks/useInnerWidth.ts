'use client';

import { useEffect, useState } from "react";

export default function useInnerWidth() {
  const [isTinyMobile, setIsTinyMobile] = useState<boolean>(true)

  const handleResize = () => { setIsTinyMobile(window.innerWidth < 600) }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return [isTinyMobile];
}







