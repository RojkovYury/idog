import { Box, Button, Typography } from "@mui/material";
import { clr } from "../colors";
import MasterLinks from "./master-main/master-links";

export default function MasterMain() {
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%',
        display: 'flex', 
        flexDirection: ['column', 'column', 'row', 'row'],
        justifyContent: ['center', 'center', 'space-between', 'space-between'],
        alignItems: "center",
      }}
    >

      <Box sx={{ border: '1px solid black', height: ['100px', '100px', '0', '0' ], opacity: 0, display: ['flex', 'flex', 'none', 'none'] }}/>

      <Box
        sx={{  
          zIndex: '20', 
          mx: 2,
          mb: 1, 
          height: ['270px', '270px', '470px', '470px'],
          width: ['320px', '420px', '420px', '420px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography 
          noWrap 
          sx={{ 
            fontSize: [45, 45, 65, 65], 
            fontWeight: 'bold', 
            color: clr.dark, 
            lineHeight: '1', 
            textShadow: '2px 2px 1px white'
          }}
        >
          Центр услуг для собак
        </Typography>

        <Typography 
          noWrap 
          sx={{ 
            fontSize: [65, 65, 80, 80], 
            fontWeight: 'bold', 
            color: clr.dark, 
            lineHeight: '1.2', 
            textShadow: '2px 2px 1px white'  
          }}
        >
          iDog
        </Typography>

        <Typography 
          noWrap 
          sx={{ 
            fontSize: [28, 28, 36, 36], 
            fontWeight: ['bold', 'bold', 'normal', 'normal'], 
            color: clr.dark, 
            lineHeight: '1', 
            textShadow: '2px 2px 1px white' 
          }}
        >
          Самый широкий спектр услуг
        </Typography>

        <Typography 
          noWrap 
          sx={{ 
            fontSize: [28, 28, 36, 36], 
            fontWeight: ['bold', 'bold', 'normal', 'normal'], 
            color: clr.dark, 
            lineHeight: '1', 
            textShadow: '2px 2px 1px white' 
            }}
          >
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
              backgroundColor: clr.secondary, 
              color: clr.light 
            }
          }}
        >
          Связаться с нами
         </Button>
      </Box>

      <Box
        sx={{  
          display: ['flex', 'flex', 'flex', 'flex'],
          zIndex: '20', 
          mx: [0, 0, 3, 6],
          height: ['100px', '100px', '470px', '470px'],
          width: ['320px', '420px', '420px', '420px'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: ['center', 'center', 'flex-end', 'flex-end'],
        }}
      >
        <MasterLinks/> 
      </Box>

    </Box>
  )
}
