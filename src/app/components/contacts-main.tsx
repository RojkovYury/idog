import { Box, Typography } from "@mui/material";
import Image from 'next/image';
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

      <Box sx={{  display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', mt: 6, gap: 3 }}>
        <Box sx={{ width: '265px', height: '75px', borderRadius: '25px' }}>
          <Image src="/images/contacts/static/vk.jpg" alt="layoutMain" width={265} height={75} />
        </Box>

        <Box sx={{ width: '265px', height: '75px', borderRadius: '25px' }}>
          <Image src="/images/contacts/static/inst.jpg" alt="layoutMain" width={265} height={75} />
        </Box>
        
        <Box sx={{ width: '265px', height: '75px', borderRadius: '25px' }}>
          <Image src="/images/contacts/static/fb.jpg" alt="layoutMain" width={265} height={75} />
        </Box>
      </Box>

    </Box>
  )
}
