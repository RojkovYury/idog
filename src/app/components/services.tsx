'use client'

import { Box, Typography, Button } from "@mui/material";
import Card from "./services/card";
import { clr } from "../colors";
import { useState } from "react";


export default function Services() {
  const [open, setOpen] = useState(false);
  return(
    <>
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: '-50px',
        }}
      >
        <Typography 
          sx={{
            fontSize: '80px', 
            fontWeight: '700',
          }}  
        >
          Наши услуги
        </Typography>
      </Box>

      <Box 
        
        sx={{ 
          position: 'relative',
          top: '-50px',
         }}
      >
        <Box
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          sx={{
            backgroundColor: 'lightyellow',
            position: 'absolute',
            left: '150px',
            height: '120px',
            width: '120px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            scale: open ? '1.2' : '1',
            transition: 'all 1s',
          }} 
        >
          AVATAR
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
              backgroundColor: 'grey',
              position: 'relative',
              height: '100px',
              width: '740px',
              borderRadius: '50px',
              display: 'flex',
              // justifyContent: open ? 'space-between' : 'flex-end',
              // justifyContent: open ? 'space-between' : 'space-between',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >

            <Box 
              sx={{ 
                display: 'flex', 
                width: '1px' 
              }}
            >
              X
            </Box>
            
            {open }
            <Box 
              sx={{
                display: open ? 'flex' : 'none', 
                opacity: open ? '1' : '0', 
                flexDirection: 'column',
                transition: 'all 1s',
                // ml: 10,
              }}
            >
              <Typography 
                sx={{ 
                  mr: 4,
                  lineHeight: '1',  
                  fontSize: '28px', 
                  fontWeight: '700' 
                }}
              >
                Каждой собаке необходимы физические нагрузки,
              </Typography>

              <Typography 
                sx={{ 
                  mr: 4,
                  lineHeight: '1',  
                  fontSize: '28px', 
                  fontWeight: '700' 
                }}
              >
                чтобы она была здоровой, активной и послушной.
              </Typography>

              <Button
                variant='contained'
                sx={{
                  height: '20px'
                }}
              >
                узнать больше
              </Button>
            </Box>

            <Typography 
              sx={{ 
                mr: 4, 
                fontSize: '42px',             
                fontWeight: '700',
              }}
            >
              Фитнесс
            </Typography>

          </Box>
        </Box>

      </Box>


    </>
  )
}  







/*

    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Box
        sx={{ 
          top: '0px',
          position: 'absolute', 
          width: '100%', 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {-30}
          top={8}
          rotate={12}
        />
        <Card 
          name={'Груминг'}
          src={'/images/services/card_grooming.jpg'}
          left= {-8}
          top={-13}
          rotate={-9}
        />
        <Card 
          name={'Хендлинг'}
          src={'/images/services/card_handling.jpg'}
          left= {20}
          top={6}
          rotate={4}
        />
      </Box>

      <Box
        sx={{ 
          top: '290px',
          position: 'absolute', 
          width: '100%', 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {-18}
          top={15}
          rotate={-7}
        />
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {-12}
          top={10}
          rotate={3}
        />
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {5}
          top={-26}
          rotate={-1}
        />
      </Box>

      <Box
        sx={{ 
          top: '580px',
          position: 'absolute', 
          width: '100%', 
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {-15}
          top={16}
          rotate={2}
        />
        <Card 
          name={'Фитнес'}
          src={'/images/services/card_fitness.jpg'}
          left= {40}
          top={-5}
          rotate={-6}
        />
      </Box>

    </Box>

*/