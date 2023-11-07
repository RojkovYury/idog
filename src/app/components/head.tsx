
import { Box, Tooltip, Typography, Button, Divider, IconButton  } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import NextLink from 'next/link';
import { clr } from "../colors";

import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import InfoIcon from '@mui/icons-material/Info';

interface HeadProps {
  color: string;
}

export default function Head({ color }: HeadProps) {

  const dividerProps = {
    my: 3, 
    border: 'none', 
    borderTop: `1px solid ${clr.dark}`,
    width: ['160px', '200px', '320px', '420px'],
    // transition: 'width 2.5s linear'
  }

  const buttonProps = {
    mr: 2,
    fontSize: '2rem',
    fontWeight: '700', 
    backgroundColor: 'inherit', 
    borderRadius: '25px', 
    boxShadow: 'none', 
    height: '40px', 
    color: clr.dark, 
    "&:hover": { 
      backgroundColor: clr.primary, 
      color: clr.light, 
    },
    display: ['none', 'none', 'flex', 'flex']
  }

  const iconButtonProps = {
    mr: 0,
    color: clr.dark,
    display: ['flex', 'flex', 'none', 'none'], 
    "&:hover": { backgroundColor: clr.primary, color: clr.light }
  }

  return (  
    <Box sx={{ px:1, py: 3, position: 'relative', display: 'flex',  justifyContent: 'space-between' }}>

      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
        <Box component={NextLink} href="/" sx={{ position: 'relative', height: '66px', display: 'flex', color: 'inherit', textDecoration: 'none', alignItems: 'center' }}>
          <PetsIcon fontSize='small' sx={{ mx: 2, "&:hover": { color: clr.primary } }}/>
          <Typography noWrap sx={{ fontSize: ['3rem', '3rem', '3.5rem', '3.5rem'], fontWeight: '700' }}>
            iDog
          </Typography>
        </Box>
        <Divider sx={{ ...dividerProps }}/>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Box sx={{ height: '66px', display: 'flex', color: 'inherit', textDecoration: 'none', alignItems: 'center', justifyContent: 'flex-end' }}>
          
          <Tooltip title="Услуги" arrow placement="bottom-start">
            <IconButton size='large' sx={{ ...iconButtonProps }}>
              <DryCleaningIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Tooltip>
          <Button sx={{ ...buttonProps }}>Услуги</Button>

          <Tooltip title="О нас" arrow>
            <IconButton size='large' sx={{ ...iconButtonProps }}>
              <RecentActorsIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Tooltip>
          <Button sx={{ ...buttonProps }}>О нас</Button>

          <Tooltip title="Контакты" arrow placement="bottom-end">
            <IconButton size='large' sx={{ ...iconButtonProps }}>
              <InfoIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Tooltip>
          <Button sx={{ ...buttonProps }}>Контакты</Button>
        </Box>
        <Divider sx={{ ...dividerProps }}/>
      </Box>

    </Box>
  )
}
