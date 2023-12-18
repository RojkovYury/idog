'use client';

import { useEffect, useState } from "react";

export default function useScroll() {
  const [yPos, setYPos] = useState(0);
  const handleScroll = () => {
    setYPos(window.scrollY / 100);
    // console.log(window.scrollY / 100);
    console.log('use');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return [yPos];
}