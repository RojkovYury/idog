import { Box, Button, Typography } from "@mui/material";
import ContactsModal from "./contacts-main/contacts-modal";

export default function ContactsMain() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <Typography>7 905 123 45 67</Typography>

      <ContactsModal />

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
