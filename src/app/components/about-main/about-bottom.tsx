import { Box, Typography } from "@mui/material";
import { clr } from "@/app/colors";

export default function AboutBottom() {
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        top: ['10px', '10px', '120px', '120px'], 
        background: ['rgb(0, 0, 0, 0.2)', 'rgb(0, 0, 0, 0.2)', 'none', 'none'],
        borderRadius: '10px',
        p: 1,
      }}
    >
      <Typography 
        sx={{ 
          fontSize: ['24px', '28px', '30px', '36px'],
          textAlign: 'center',
          display: 'flex', 
          justifyContent: 'center',
          fontWeight: '400', 
          textShadow: `1px 3px 1px ${clr.dark}`,
        }}
      >
        Делаем Ваших питомцев счастливыми с 2017 года
      </Typography>
    </Box>
  )
}
