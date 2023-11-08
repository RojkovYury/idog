import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import { clr } from "@/app/colors";

interface CardProps {
    name: string; 
    src: string; 
    left?: number;
    top?: number;
    rotate?: number;
  }

export default function Card({ name, src, left, top, rotate }: CardProps) {
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        left: `${left}px`,  
        top: `${top}px`,
        transition: 'top 0.3s',
        zIndex: '1',
        "&:hover": {  
          zIndex: '20',
          top: '0px',
          // top: '70px',
          // left: '0px',
        },
      }}
    >
      <Box
        sx={{
          width: '180px',
          height: '192px', //256
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          opacity: 0.7,
          transition: 'all 0.3s',
          backgroundImage: 'url("/images/services/static/card_layout.jpg")',
          backgroundSize: 'cover',
          p: 2,
          transform: `rotate(${rotate}deg)`,
          "&:hover": {  
            color: clr.primary,
            opacity: 1,
            scale: '2',
            transform: 'rotate(0deg)',
          },
        }}
      >
        <Box
          sx={{
            width: '180px',
            height: '150px',
            backgroundColor: 'grey',
          }}
        >
          <Image 
            src={src} 
            alt="card_fitness" 
            width={240} 
            height={200}
            style={{ width: '180px', height: '150px' }}
          />
        </Box>

        <Typography 
          sx={{
            width: '180px',
            height: '56px',
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>

      </Box>
    </Box>
  )
}  

/*

240 = 160 = 180
200 = 130 = 150
 // backgroundPosition: 'center',
*/