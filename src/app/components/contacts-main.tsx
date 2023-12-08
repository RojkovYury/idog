import { Box } from "@mui/material";
import Image from 'next/image';
import Map from "./contacts-main/map";

export default function ContactsMain() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>

      <Map />

      <Box sx={{  display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', mt: 6, gap: 3 }}>
        
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
