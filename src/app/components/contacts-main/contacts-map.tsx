import Image from 'next/image';
import { Box } from "@mui/material";
import { clr } from "../../colors";
import { useState, RefObject, useRef, MouseEvent } from "react";
import ContactsPaper from './contacts-paper';

type BoxRefType = RefObject<HTMLDivElement>;

export default function ContactsMap() {

  const [positionX, setPositionX] = useState<number>(-190);
  const [positionY, setPositionY] = useState<number>(100);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<{x: number, y: number}>({ x: 0, y: 0 });
  const boxRef: BoxRefType = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPos({ x: e.pageX - positionX, y: e.pageY - positionY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (
      isDragging 
      && boxRef.current
      && !((e.pageX - startPos.x) < ((2442  - boxRef.current.offsetWidth) / 2) * (-1)) 
      && !((e.pageX - startPos.x) > ((2442  - boxRef.current.offsetWidth) / 2))
    ) {
      setPositionX(e.pageX - startPos.x)
    }
    if (
      isDragging
      && boxRef.current
      && !((e.pageY - startPos.y) < ((1074  - boxRef.current.offsetHeight) / 2) * (-1)) 
      && !((e.pageY - startPos.y) > ((1074  - boxRef.current.offsetHeight) / 2))
    ) {
      setPositionY(e.pageY - startPos.y)
    }
  };

  return (
    <>
      <Box
        ref={boxRef}
        sx={{
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          border: `3px solid ${clr.light}`,
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      
        <Box 
          sx={{ 
            display: ['none', 'flex', 'flex', 'flex' ],
            position: 'absolute', 
            right: 0, 
            height: '100%' 
            }}
          >
          <ContactsPaper />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            transform: `matrix(1, 0, 0, 1, ${positionX}, ${positionY})`,
            backfaceVisibility: 'hidden',
            transformOrigin: '50% 50%',
            cursor: 'grab',
            transition: 'none 0s ease 0s',
            width: '2442px',
            height: '1074px',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <Image
            src="/images/contacts/map.jpg"
            alt="map"
            width={2442}
            height={1075}
          />
        </Box>
      </Box>
    </>
  )
}
