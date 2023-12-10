import { Box, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

interface HeadIdogProps {
  TextColor: string
  HoverColor: string
  selected: string
}

export default function HeadIdog({ TextColor, HoverColor, selected }: HeadIdogProps) {
  return (
    <Box 
      onClick={() => window.scrollTo(({ top: 0, behavior: "smooth"}))}  
      sx={{ 
        cursor: 'pointer', 
        position: 'relative', 
        height: '66px', 
        display: 'flex', 
        color: TextColor, 
        textDecoration: 'none', 
        alignItems: 'center' 
      }}
    >
      <PetsIcon 
        sx={{ 
          mx: [1, 2, 2, 2], 
          color: selected === 'main' ? HoverColor : TextColor,
          fontSize: ['36px', '44px', '44px', '44px'], 
          "&:hover": { 
            color: HoverColor 
          } 
        }}
      />
      <Typography 
        noWrap 
        sx={{ 
          fontSize: ['42px', '48px', '56px', '56px'], 
          fontWeight: '700' 
        }}
      >
        iDog
      </Typography>
    </Box>
  )
}
        