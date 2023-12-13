import { Box, Typography } from "@mui/material";
import { clr } from "@/app/colors";

export default function AboutTop() {
  return(
    <>
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography 
          sx={{ 
            fontSize: ['40px', '60px', '70px', '80px'],
            fontWeight: '700',
            textShadow: `2px 2px 1px ${clr.dark}`, 
            textAlign: 'center',
            }}
          >
          В нашем центре
        </Typography>
      </Box>

      <Box sx={{ mb: [2, 4, 4, 4] }}>
        <Typography 
          sx={{ 
            fontSize: ['22px', '32px', '38px', '42px'],
            display: 'flex', 
            justifyContent: 'center', 
            fontWeight: '700', 
            lineHeight: '1',  
            textShadow: `2px 2px 1px ${clr.dark}`, 
            textAlign: 'center',
            }}
          >
          самый широкий спектр услуг для собак, начиная от выставочного тренинга и 
          поддержания спортивной формы, заканчивая грумингом
        </Typography>
      </Box>
    </>
  )
}
