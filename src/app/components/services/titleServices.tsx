import { Box, Typography } from "@mui/material";

export default function TitleServices() {
  return(
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
          fontSize: '80px', 
          fontWeight: '700',
        }}  
      >
        О нас
      </Typography>
    </Box>
  )
} 