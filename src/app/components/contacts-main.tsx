import { Box } from "@mui/material";
import Map from "./contacts-main/map";
import ContactsSocial from './contacts-main/contacts-social';

export default function ContactsMain() {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        mx: 1,
      }}
    >
      <Map />
      <ContactsSocial />
    </Box>
  )
}
