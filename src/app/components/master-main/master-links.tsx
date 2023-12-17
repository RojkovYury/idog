import Image from 'next/image';
import { Box, Typography } from "@mui/material";
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import { clr } from "../../colors";

export default function MasterLinks() {
  return(
    <>
      <Box
        component={Link}
        href={'tel:+79611470303'}
        sx={{
          zIndex: 19,
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          my: [0, 0, 1, 1],
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
        <CallIcon sx={{ fontSize: ['24px', '24px', '38px', '38px'], mr: 1 }}/>
        <Typography 
          fontWeight={700} 
          sx={{ 
            fontSize: ['24px', '24px', '38px', '38px'], 
            textShadow: '2px 2px 1px white' 
            }}
          > 
          +7 (961) 147 03 03 
        </Typography>
      </Box>

      <Box 
        component={Link}
        href={''}
        sx={{ 
          zIndex: 19,
          pointerEvents: 'none',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',  
          my: [0, 0, 1, 1],
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
        <HomeIcon sx={{ fontSize: ['24px', '24px', '38px', '38px'], mr: 1 }}/>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: ['24px', '24px', '38px', '38px'],
            textShadow: '2px 2px 1px white',
            }}
          > 
          Мориса Тореза 14В 
        </Typography>
      </Box>

      <Box 
        component={Link}
        href={'https://vk.com/idogtula'}
        sx={{ 
          zIndex: 19,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', 
          my: [0, 0, 1, 1],
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
         <Image src="/images/main/vkicon.png" alt="vkicon" width={38} height={38} />
        </Box>
        <Typography fontWeight={700} sx={{ fontSize: ['24px', '24px', '38px', '38px'], textShadow: '2px 2px 1px white' }}>
          vk.com/idogtula
        </Typography>
      </Box>
    </>
  )
}