import { Box, IconButton, Typography } from "@mui/material";
import { clr } from "../colors";
import ContactsPhone from './contacts-main/contacts-phone';
import ContactsModal from "./contacts-main/contacts-modal";
import ContactsSocial from "./contacts-main/contacts-social";

export default function ContactsMain() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Box sx={{ color: clr.light, width: '100%', display: 'flex', justifyContent: 'space-around', mb: 4 }}>
        <ContactsPhone />
        <ContactsSocial />
        <ContactsModal />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%' }}>

        <Box sx={{ width: '400px', minWidth: '400px',  height: '400px', minHeight: '400px', border: '3px solid orange', borderRadius: '50%' }}>
          MAP
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
          
          <Box sx={{ backgroundColor: clr.light }}><Typography>Вконтакте</Typography></Box>
          <Box sx={{ backgroundColor: clr.light }}><Typography>Instagram</Typography></Box>
          <Box sx={{ backgroundColor: clr.light }}><Typography>Facebook</Typography></Box>

        </Box>

      </Box>
      
      <Box sx={{ color: clr.light, width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Typography>г Тула ул Мориса Тореза 14В</Typography>
      </Box>

    </Box>
  )
}
