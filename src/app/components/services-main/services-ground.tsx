import { Box } from "@mui/material";

export default function ServicesGround() {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: ['none', 'none', 'flex', 'flex'], 
        }} 
      >
        <div 
          style={{ 
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

      {/* mobile */} 
      <Box
      sx={{
        position: 'relative',
        display: ['flex', 'flex', 'none', 'none'], 
      }} 
      >
        <div 
          style={{ 
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%', 
            height: '120px', 
            background: `url('/images/ground/mobile/ground.png')`,
            backgroundSize: '968px 120px',
            zIndex: 2,
            bottom: '-20px',
          }}
        /> 
      </Box>
    </>  
  )
}
