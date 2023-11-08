import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import { clr } from "@/app/colors";

export default function Card() {
  return(
    <>
      <Box
        sx={{
          width: '240px',
          height: '256px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          p: 2,
          opacity: 0.8,
          transition: 'all 0.3s',
          "&:hover": {  
            color: clr.primary,
            opacity: 1,
            scale: '1.1',
          },
          backgroundImage: 'url("/images/services/card_layout.jpg")',
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            width: '240px',
            height: '200px',
            backgroundColor: 'grey',
          }}
        >
          <Image src="/images/services/card_fitness.jpg" alt="card_fitness" width={240} height={200} />
        </Box>

        <Typography 
          sx={{
            width: '240px',
            height: '56px',
            textAlign: 'center',
          }}
        >
          Фитнес
        </Typography>
        
      </Box>
    </>
  )
}  
