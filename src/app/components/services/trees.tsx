import { Box } from "@mui/material";
import Image from 'next/image';
import Rope from "./rope";

interface TreesProps {
    yPos: number; 
  }

export default function Trees({ yPos }: TreesProps) {
  return(
      <>
        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10', pointerEvents: 'none' }}>
          <Box sx={{ position: 'relative', left: '-50px' }}>
            <Image src="/images/services/static/tree_1_fill.png" alt="tree_1_fill" width={260} height={1000} />
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', width: '100%', zIndex: '10', pointerEvents: 'none',  }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', right: '20px' }}>
            <Image src="/images/services/static/tree_2_fill.png" alt="tree_2_fill" width={260} height={1000} />
          </Box>
        </Box>

        <Rope top={'0px'}/>
        <Rope top={'290px'}/>
        <Rope top={'580px'}/>

        <Box sx={{ position: 'absolute', width: '100%', opacity: '0.4', pointerEvents: 'none' }}>
          <Box 
            sx={{ 
              position: 'relative', 
              display: 'flex', 
              justifyContent: 'center', 
              left: '-20px', 
              top: `${ -120 + yPos * 25}px`,
            }}
          >
            <Image src="/images/services/static/forest_layer.png" alt="forest_layer" width={750} height={750} />
          </Box>
        </Box>
      </>
  )
}  
