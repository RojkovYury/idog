import { Box } from "@mui/material";

export default function Underground() {
  return (
    <>
      <Box 
        sx={{ 
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%', 
          height: '1000px', 
          background: `url('/images/underground/1_layer.png')`,
          backgroundSize: '2000px 1000px',
          bottom: '0',
          zIndex: 5,
        }}
      />
      <Box 
        sx={{ 
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%', 
          height: '1000px', 
          background: `url('/images/underground/2_layer.png')`,
          backgroundSize: '2000px 1000px',
          bottom: '0',
          zIndex: 4,
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%', 
          height: '1000px', 
          background: `url('/images/underground/3_layer.png')`,
          backgroundSize: '2000px 1000px',
          bottom: '0',
          zIndex: 3,
        }}
      /> 
      <Box 
        sx={{ 
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%', 
          height: '1000px', 
          background: `url('/images/underground/4_layer.png')`,
          backgroundSize: '2000px 1000px',
          bottom: '0',
          zIndex: 7,
        }}
      /> 
    </>
  )
}

/*
      <Box 
        sx={{ 
          position: 'absolute',
          pointerEvents: 'none',
          width: '100%', 
          height: '1000px', 
          background: `url('/images/underground/5_layer.png')`,
          backgroundSize: '2000px 1000px',
          bottom: '0',
          zIndex: 6,
        }}
      /> 
*/