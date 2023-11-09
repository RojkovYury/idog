'use client';

import { Box, Typography, Button } from "@mui/material";
import { clr } from "@/app/colors";
import { useState } from "react";

interface ServiceRightProps {
  top: number;
}

export default function ServiceRight({ top }: ServiceRightProps) {
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

      <Box
        sx={{
          // border: '1px solid green',
          position: 'absolute',
          zIndex: 2,
          backgroundColor: clr.secondary4,
          top: '0px',
          left: '-600px', //половина аватара + смешение 
          height: '120px',
          width: '800px',
        }}
      />

      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          backgroundColor: clr.primary,
          position: 'absolute',
          left: '150px',
          height: '120px',
          width: '120px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          scale: open ? '1.5' : '1',
          transition: 'all 1s',
        }} 
      >
        <Box
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

      <Box
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          position: 'absolute',
          left: '150px',
          height: '120px',
          width: open ? '800px' : '400px',
          borderRadius: '60px',
          transition: 'all 1s',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }} 
      >
        <Box 
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
            opacity: '0.8',
          }}
        >

          <Box 
            sx={{ 
              display: 'flex', 
              width: '1px' 
            }}
          />
            
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

          <Typography 
            sx={{ 
              fontSize: '42px',             
              fontWeight: '700',
              mr: 4, 
            }}
          >
            Фитнесс
          </Typography>
        </Box>
      </Box>
    </Box>
    )
  } 