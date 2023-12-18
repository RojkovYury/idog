import { Box } from "@mui/material";

export default function ContactsUnderground() {
  return (
    <Box 
      sx={{ 
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%', 
        height: ['535px', '535px', '500px', '500px'], 
        background: [
          `url('/images/underground/mobile/layer.webp')`, 
          `url('/images/underground/mobile/layer.webp')`, 
          `url('/images/underground/layer.webp')`, 
          `url('/images/underground/layer.webp')`
        ], 
        backgroundSize: ['900px 535px', '900px 535px', '2000px 500px', '2000px 500px'], 
        bottom: '0',
      }}
    />
  )
}
