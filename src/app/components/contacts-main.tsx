import Link from 'next/link';
import { Box, IconButton, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import { clr } from "../colors";
import ContactsModal from "./contacts-main/contacts-modal";
import Image from 'next/image';

export default function ContactsMain() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Box sx={{ color: clr.light }}>

        <Box sx={{ display: 'flex' }}>
          <Typography>Свяжитесь с нами по телефону:</Typography>
          <Box 
            component={Link}
            href={'tel:+79611470303'}
            sx={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'inherit',
              color: clr.light,
              transition: 'all 0.3s',
              textShadow: `2px 2px 1px ${clr.dark}`,
              ml: 2,
              "&:hover": { 
                backgroundColor: 'inherit', 
                color: clr.groundPrimary,
                scale: '1.1',
              }
            }}
          >
            <CallIcon sx={{ fontSize: ['24px', '24px', '38px', '38px'], mr: 1, color: clr.groundPrimary }}/>
            <Typography> +7 (961) 147 03 03</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Typography>Сообщением в удобный мессенджер:</Typography>

          <IconButton 
            href='https://t.me/Elizaveta_Rozhkova'
            target='_blank'
            size='small' 
            sx={{ 
              ml: 1, 
              backgroundColor: clr.light, 
              "&:hover": { 
                scale: '1.2',
                transition: 'all 0.3s',
                zIndex: 50, 
                backgroundColor: clr.light,
              } 
            }}
          >
            <Box 
              sx={{ 
                width: '50px', 
                height: '50px', 
                background: `url('/images/contacts/static/tg.png')`,
                backgroundSize: '50px 50px',
              }}
            />
          </IconButton>

          <IconButton 
            href='https://wa.me/79611470303'
            target='_blank'
            size='small' 
            sx={{ 
              ml: 1, 
              backgroundColor: clr.light, 
              "&:hover": { 
                scale: '1.2',
                transition: 'all 0.3s',
                zIndex: 50, 
                backgroundColor: clr.light,
              } 
            }}
          >
            <Box 
              sx={{ 
                width: '50px', 
                height: '50px', 
                background: `url('/images/contacts/static/wa.png')`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </IconButton>

          <IconButton
            href='viber://chat?number=%2B79611470303'
            target='_blank'
            size='small' 
            sx={{ 
              ml: 1, 
              backgroundColor: clr.light, 
              "&:hover": { 
                scale: '1.2',
                transition: 'all 0.3s',
                zIndex: 50, 
                backgroundColor: clr.light,
              } 
            }}
          >
            <Box 
              sx={{ 
                width: '50px', 
                height: '50px', 
                background: `url('/images/contacts/static/vb.png')`,
                backgroundSize: '50px 50px',
              }}
            />
          </IconButton>

        </Box>

        <ContactsModal />

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>

        <Box sx={{ width: '400px', minWidth: '400px',  height: '400px', minHeight: '400px', border: '3px solid orange', borderRadius: '50%' }}></Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
          <Typography>VKontakte</Typography>
          <Typography>Instagram</Typography>
          <Typography>Facebook</Typography>
        </Box>

      </Box>
      
      <Typography>г Тула ул Мориса Тореза 14В</Typography>

    </Box>
  )
}
