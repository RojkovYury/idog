import { Box, Button, Typography } from "@mui/material";
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { clr } from "../colors";
import Image from 'next/image';

export default function Links() {
  return(
    <>
      <Box
        component={Link}
        href={'tel:+79611470303'}
        sx={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          my: 1, 
          backgroundColor: 'inherit',
          color: clr.dark,
          transition: 'all 0.3s',
          "&:hover": { 
            backgroundColor: 'inherit', 
            color: clr.primary,
            scale: '1.1',
          }
        }}
      >
        <CallIcon sx={{ fontSize: '38px', mr: 1 }}/>
        <Typography fontWeight={700} sx={{ fontSize: '38px' }}> 
          +7 (961) 147 03 03 
        </Typography>
      </Box>

      <Box 
        component={Link}
        href={''}
        sx={{ 
          pointerEvents: 'none',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',  
          my: 1, 
          backgroundColor: 'inherit',
          color: clr.dark,
          transition: 'all 0.3s',
          "&:hover": { 
            backgroundColor: 'inherit', 
            color: clr.primary,
            scale: '1.1',
          }
        }}
      >
        <HomeIcon sx={{ fontSize: '38px', mr: 1 }}/>
        <Typography fontWeight={700} sx={{ fontSize: '38px' }}> 
          Мориса Тореза 14В 
        </Typography>
      </Box>

      <Box 
        component={Link}
        href={'https://vk.com/idogtula'}
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', 
          my: 1,
          backgroundColor: 'inherit',
          color: clr.dark,
          transition: 'all 0.3s',
          "&:hover": { 
            backgroundColor: 'inherit', 
            color: clr.primary,
            scale: '1.1',
          }
        }}
      >
        <Box 
          sx={{ 
            width: '38px', 
            height: '38px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            mr: 1 
          }}
        >
         <Image src="/images/vkicon.png" alt="vkicon" width={38} height={38} />
        </Box>
        <Typography fontWeight={700} sx={{ fontSize: '38px' }}>
          vk.com/idogtula
        </Typography>
      </Box>
    </>
  )
}