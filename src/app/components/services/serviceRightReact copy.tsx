'use client';

import { Box, Typography, Button } from "@mui/material";
import { clr } from "@/app/colors";
import { useState } from "react";

interface ServiceRightProps {
  top: number;
}

export default function ServiceRightReact({ top }: ServiceRightProps) {
  const [open, setOpen] = useState(false);
  return(
    <Box 
      sx={{ 
        // border: '1px solid red',
        position: 'relative',
        top: `${top}px`,
        left: '60%'
      }}
    >

      <Box // скрывающая заслонка
        sx={{
          // border: '1px solid green',
          position: 'absolute',
          zIndex: 3,
          backgroundColor: clr.forest,
          top: '0px',
          left: '200px', //половина аватара + смешение (-600) 
          height: '120px',
          width: '800px',
        }}
      />

      <Box // Круг
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          backgroundColor: clr.primary,
          position: 'absolute',
          left: '150px', // !
          height: '120px',
          width: '120px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          scale: open ? '1.5' : '1',
          transition: 'all 1s',
          // opacity: 0.2
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

      <Box // Слой для ховера
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          // border: '1px solid black',
          position: 'absolute',
          left: open ? '-540px' : '-150px',
          height: '120px',
          width: open ? '800px' : '400px',
          borderRadius: '60px',
          transition: 'all 1s',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }} 
      >
        <Box // Палка
          sx={{
            backgroundColor: clr.light,
            position: 'relative',
            height: '100px',
            width: '740px',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            opacity: open ? '1' : '0.7',
            transition: 'all 1s',
          }}
        >

          <Typography 
            sx={{ 
              fontSize: '42px',             
              fontWeight: '700',
              ml: 4, 
            }}
          >
            Фитнесс
          </Typography>
            
          <Box 
            sx={{
              display: open ? 'flex' : 'none', 
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
              }}
            >
              Каждой собаке необходимы физические нагрузки,
            </Typography>

            <Typography 
              noWrap
              sx={{ 
                lineHeight: '1',  
                fontSize: '28px', 
                fontWeight: '700',
              }}
            >
              чтобы она была здоровой, активной и послушной.
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


          <Box 
            sx={{ 
              display: 'flex', 
              width: '1px'
            }}
          />

        </Box>
      </Box>
    </Box>
    )
  } 