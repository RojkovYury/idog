import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { clr } from '../colors';
import ServicesBillboard from './services-main/servicesBillboard';

export default function ServicesMain() {


  return(
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <ServicesBillboard />

      <Box sx={{ position: 'relative', border: '1px solid black', width: '100%', height: '600px', zIndex: 20, transition: 'height 0.3s', "&:hover": { height: '350px' }, }}>
        
        <Box sx={{ position: 'absolute', border: '1px solid black', width: '200px', height: '200px', left: '10%', bottom: '20%', transition: 'all 0.3s', "&:hover": { scale: '1.3' },  }}>
          <Image src="/images/services/dr.png" alt="layoutMain" width={200} height={200}/>
        </Box>

        <Box sx={{ position: 'absolute', border: '1px solid black', width: '200px', height: '200px', left: '50%', bottom: '40%', transition: 'all 0.3s', "&:hover": { scale: '1.3' }, }}>
          <Image src="/images/services/fitnes.png" alt="layoutMain" width={200} height={200}/>
        </Box>

      </Box>
    </Box>
  )

} 

