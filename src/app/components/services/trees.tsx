import { Box } from "@mui/material";
import Image from 'next/image';

interface TreesProps {
    yPos: number; 
  }

export default function Trees({ yPos }: TreesProps) {
  return(
      <>
        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10' }}>
          <Box sx={{ position: 'relative', left: '-50px' }}>
            <Image src="/images/services/static/tree_1_fill.png" alt="tree_1_fill" width={260} height={1000} />
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10' }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', right: '20px' }}>
            <Image src="/images/services/static/tree_2_fill.png" alt="tree_2_fill" width={260} height={1000} />
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', zIndex: '11'  }}>
          <Box 
            sx={{
            position: 'relative',
            width: '87%',
            height: '16px',
            top: '60px',
            left: '-40px',
            background: `url('/images/services/static/rope_fill.png')`, 
            backgroundSize: '157px 16px' 
            }} 
          />
        </Box>

        <Box sx={{ position: 'absolute', width: '100%', opacity: '0.4' }}>
          <Box 
            sx={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              left: '-20px', 
              // top: '100px' 
              top: `${ 0 + yPos * 20}px`,
            }}
          >
            <Image src="/images/services/static/forest_layer.png" alt="forest_layer" width={750} height={750} />
          </Box>
        </Box>

      </>
  )
}  

/*
`${150 + yPos * 45}px`,
*/