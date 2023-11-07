import { Box, Button, Typography } from "@mui/material";
import { clr } from "../colors";
import Links from "./links";

export default function Main() {
  return(
    <Box 
      sx={{ 
        // border: '3px solid black',
        position: 'relative', 
        width: '100%',
        display: 'flex', 
        justifyContent: ['center', 'center', 'space-between', 'space-between'],
      }}
    >
      <Box
        sx={{  
          // border: '1px solid black',
          zIndex: '20', 
          mx: 2,
          mb: 1, 
          height: '470px', 
          width: ['320px', '420px', '420px', '420px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography noWrap sx={{ fontSize: [45, 45, 65, 65], fontWeight: 'bold', color: clr.dark, lineHeight: '1', textShadow: '2px 2px 1px white'  }}>
          Центр услуг для собак
        </Typography>

        <Typography noWrap sx={{ fontSize: [65, 65, 80, 80], fontWeight: 'bold', color: clr.dark, lineHeight: '1.2', textShadow: '2px 2px 1px white'  }}>
          iDog
        </Typography>

        <Typography noWrap sx={{ fontSize: [28, 28, 36, 36], fontWeight: ['bold', 'bold', 'normal', 'normal'], color: clr.dark, lineHeight: '1', textShadow: '2px 2px 1px white' }}>
          Самый широкий спектр услуг
        </Typography>

        <Typography noWrap sx={{ fontSize: [28, 28, 36, 36], fontWeight: ['bold', 'bold', 'normal', 'normal'], color: clr.dark, lineHeight: '1', textShadow: '2px 2px 1px white' }}>
          для Вашей собаки
        </Typography>

        <Button 
          variant="contained" 
          size='small' 
          sx={{ 
            fontWeight: '700', 
            backgroundColor: clr.primary, 
            borderRadius: '25px', 
            mt: 3, 
            boxShadow: 'none', 
            color: clr.light, 
            width: '200px', 
            height: '40px',
            "&:hover": { 
               backgroundColor: clr.secondary1, 
               color: clr.light 
            }
          }}
        >
          Связаться с нами
         </Button>
      </Box>

      <Box
        sx={{  
          // border: '1px solid black',
          display: ['none', 'none', 'flex', 'flex'],
          zIndex: '20', 
          mx: [0, 0, 3, 6],
          height: '470px', 
          width: ['320px', '420px', '420px', '420px'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <Links/> 
      </Box>

    </Box>
  )
}


/*

*/