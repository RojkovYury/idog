import { Box } from "@mui/material";

export default function ServicesGround() {
  return (
    <Box
      sx={{
        position: 'relative', 
      }} 
    >
      <Box 
        sx={{ 
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%', 
        height: '239px', 
        background: `url('/images/ground/ground.png')`,
        backgroundSize: '1935px 239px',
        zIndex: 2,
        bottom: '-20px',
        }}
      /> 
    </Box>
  )
}
