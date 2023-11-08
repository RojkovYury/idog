import { Box } from "@mui/material";

interface RopeProps {
    top: string; 
  }

export default function Rope({ top }: RopeProps) {
  return(
    <Box sx={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '11', pointerEvents: 'none' }}>
      <Box 
        sx={{
          position: 'relative',
          width: '87%',
          height: '16px',
          top: top,
          left: '-40px',
          background: `url('/images/services/static/rope_fill.png')`, 
          backgroundSize: '157px 16px',
        }} 
      />
    </Box>
  )
}  
