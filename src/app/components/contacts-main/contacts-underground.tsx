import { Box } from "@mui/material";

export default function ContactsUnderground() {
  return (
    <>
      <Box 
        sx={{
          display: ['none', 'none', 'flex', 'flex'],
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%', 
            height: '500px', 
            background: `url('/images/underground/layer.png')`,
            backgroundSize: '2000px 500px',
            bottom: '0',
          }}
        />
      </Box>

      {/* mobile */}
      <Box 
        sx={{
          display: ['flex', 'flex', 'none', 'none'],
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            pointerEvents: 'none',
            width: '100%', 
            height: '535px', 
            background: `url('/images/underground/mobile/layer.webp')`,
            backgroundSize: '900px 535px',
            bottom: '0',
          }}
        />
      </Box>
    </>
  )
}
