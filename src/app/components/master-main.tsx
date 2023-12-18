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
          component={'h1'}
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
          component={'h1'}
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
          component={'h2'}
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
          component={'h2'}
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
          onClick={() => window.scrollTo(({ top: 1830, behavior: "smooth"}))}
          variant="contained" 
          size='small' 
          sx={{ 
            fontWeight: '700', 
            backgroundColor: clr.primary, 
            borderRadius: '25px', 
            mt: 3, 
            boxShadow: 'none', 
            color: clr.light,
            textShadow: `1px 1px 1px ${clr.dark}`,
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
          position: 'relative',
          display: 'flex',
          zIndex: '20', 
          mx: [0, 0, 3, 6],
          height: ['100px', '100px', '470px', '470px'],
          width: ['auto', 'auto', '420px', '420px'],
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: ['center', 'center', 'flex-end', 'flex-end'],
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: ['flex', 'flex', 'none', 'none'],
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: clr.light,
            opacity: 0.3,
            zIndex: 18,
            px: 2,
            borderRadius: '10px'
          }}
        />
        
        <MasterLinks/> 
      
      </Box>

    </Box>
  )
}
