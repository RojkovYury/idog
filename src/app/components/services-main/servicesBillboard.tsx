import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { clr } from '../../colors';

export default function ServicesBillboard() {

  return(
    <Box sx={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center', height: '300px' }}>
      <Box sx={{ position: 'absolute', minWidth: '750px', minHeight: '450px', zIndex: 15 }}>
        <Image src="/images/services/billboard.png" alt="layoutMain" width={750} height={450}/>
      </Box>
      
      <Box sx={{ position: 'absolute', display: 'flex', width: '728px', height: '270px', backgroundColor: clr.light,  zIndex: 10 }}>
        
        <Box sx={{ width: '65%', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '64px', marginLeft: '20px' }}>
            SOME TITLE
          </Typography>
          <Typography sx={{ fontSize: '32px', marginLeft: '20px' }}>
            Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text
          </Typography>
        </Box>

        <Box sx={{ width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'lightblue', width: '80%', height: '80%' }}/>
        </Box>

      </Box>
    </Box>
  )
} 