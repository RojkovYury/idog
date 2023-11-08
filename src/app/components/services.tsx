import { Box, Typography } from "@mui/material";
import Card from "./services/card";
import { clr } from "../colors";

export default function Services() {
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
         }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '150px',
            height: '120px',
            width: '120px',
            border: '1px solid black',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} 
        >
          AVATAR
        </Box>

        <Box
          sx={{
            position: 'absolute',
            left: '150px',
            height: '120px',
            width: '400px',
            border: '1px solid black',
            borderTopLeftRadius: '60px',
            borderBottomLeftRadius: '60px',
            transition: 'all 1s',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            "&:hover": { 
              width: '800px',
            },
          }} 
        >
          <Box 
            sx={{
              position: 'relative',
              border: '1px solid red',
              height: '100px',
              width: '740px',
              borderTopRightRadius: '50px',
              borderBottomRightRadius: '50px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Typography sx={{ mr: 4, fontSize: '30px', fontWeight: '700' }}>
              Груминг
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