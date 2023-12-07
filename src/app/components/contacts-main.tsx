import { Box, IconButton, Typography } from "@mui/material";
import { clr } from "../colors";
import ContactsPhone from './contacts-main/contacts-phone';
import ContactsModal from "./contacts-main/contacts-modal";
import ContactsSocial from "./contacts-main/contacts-social";

export default function ContactsMain() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Box sx={{  display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ width: '400px', minWidth: '400px',  height: '400px', minHeight: '400px', border: '3px solid orange', borderRadius: '50%', ml: 1 }}>
          MAP
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', mr: 1 }}>
          <Typography sx={{ color: clr.light, textDecoration: 'underline' }}>г Тула ул Мориса Тореза 14В</Typography>
          <ContactsPhone />
          <ContactsModal />
          <ContactsSocial />
        </Box>
      </Box>

      <Box sx={{  display: 'flex', mt: 10, gap: 16 }}>
        <Box sx={{ backgroundColor: clr.light }}><Typography>Вконтакте</Typography></Box>
        <Box sx={{ backgroundColor: clr.light }}><Typography>Instagram</Typography></Box>
        <Box sx={{ backgroundColor: clr.light }}><Typography>Facebook</Typography></Box>
      </Box>

    </Box>
  )
}
