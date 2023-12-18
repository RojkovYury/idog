import { Box } from "@mui/material";

import ContactsMap from "./contacts-main/contacts-map";
import ContactsMapMobile from "./contacts-main/contacts-map-mobile";
import ContactsPaper from "./contacts-main/contacts-paper";
import ContactsPaperMobile from "./contacts-main/contacts-paper-mobile";
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
      <ContactsMap />
      <ContactsPaperMobile />
      <ContactsSocial />
    </Box>
  )
}
