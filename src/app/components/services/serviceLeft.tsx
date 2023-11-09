'use client';

import { Box, Typography, Button } from "@mui/material";
import { clr } from "@/app/colors";

interface ServiceLeftProps {
  top: number;
  pright?: number;
  title: string;
  lineOne: string;
  lineTwo: string;
  image: string;
}

export default function ServiceLeft({ top, pright, title, lineOne, lineTwo, image }: ServiceLeftProps) {
  return(
    <Box 
      sx={{ 
        // border: '1px solid red',
        position: 'relative',
        top: `${top}px`,
        left: '0%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >

      <Box // Слой для ховера
        sx={{
          position: 'absolute',
          height: '120px',
          width: '80%',
          borderRadius: '60px',
          transition: 'all 1s',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pr: pright,
        }} 
      >

        <Box // Круг
          sx={{
            backgroundColor: clr.primary,
            position: 'absolute',
            left: '0px',
            height: '120px',
            width: '120px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            scale: '1',
            transition: 'all 1s',
            opacity: 1
          }} 
        >
          <Box // Фото в кругу
            sx={{
              position: 'relative',
              height: '110px',
              width: '110px',
              borderRadius: '50%',
              backgroundImage: 'url("/images/services/fitnes.png")',
              backgroundSize: 'cover',
            }}
          />
        </Box>

        <Box // Палка
          sx={{
            backgroundColor: clr.light,
            position: 'relative',
            height: '100px',
            width: '100%',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            opacity: '0.5',
            transition: 'all 1s',
            "&:hover": {  
              opacity: '1',
            },
          }}
        >

          <Box 
            sx={{ 
              display: 'flex', 
              height: '120px',
              width: '120px',
            }}
          />
            
          <Box 
            sx={{
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 1s',
              overflow: 'hidden',
            }}
          >
            <Typography 
              noWrap
              sx={{ 
                lineHeight: '1',  
                fontSize: '28px', 
                fontWeight: '700',
                cursor: 'default',
              }}
            >
              {lineOne}
            </Typography>

            <Typography 
              noWrap
              sx={{ 
                lineHeight: '1',  
                fontSize: '28px', 
                fontWeight: '700',
                cursor: 'default',
              }}
            >
              {lineTwo}
            </Typography>

            <Button
              variant='contained'
              sx={{
                height: '36px',
                borderRadius: '15px',
                backgroundColor: clr.primary,
                color: clr.light,
                "&:hover": {  
                  backgroundColor: clr.secondary1,
                },
              }}
            >
              узнать больше
            </Button>
          </Box>

          <Typography 
            noWrap
            sx={{ 
              fontSize: '42px',             
              fontWeight: '700',
              mr: 4,
              cursor: 'default',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
    )
  } 