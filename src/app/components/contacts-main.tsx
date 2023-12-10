import { Box } from "@mui/material";
import { clr } from "../colors";
import Map from "./contacts-main/map";
import MapMobile from "./contacts-main/map-mobile";
import ContactsNavigator from "./contacts-main/contacts-navigator";
import ContactsPhone from './contacts-main/contacts-phone';
import ContactsModal from "./contacts-main/contacts-modal";
import ContactsMessenger from "./contacts-main/contacts-messenger";
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
      <Box 
        sx={{ 
          width: '100%', 
          height: '600px', 
          mx: 1,
          display: ['none', 'flex', 'flex', 'flex'], 
        }}
      >
        <Map />
      </Box>

      <Box 
        sx={{ 
          width: '100%', 
          height: '300px', 
          display: ['flex', 'none', 'none', 'none'],
          flexDirection: 'column'
        }}
      >
        <MapMobile />
      </Box>

      <Box 
        sx={{ 
          width: '100%', 
          height: '355px',
          display: ['flex', 'none', 'none', 'none'],
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <ContactsNavigator />
        <Box sx={{ height: '1px', backgroundColor: clr.light, width: '60%', mt: 1 }} />
        <ContactsPhone />
        <Box sx={{ height: '1px', backgroundColor: clr.light, width: '75%', mt: 1 }} />
        <ContactsModal />
        <Box sx={{ height: '1px', backgroundColor: clr.light, width: '60%', mt: 1 }} />
        <ContactsMessenger />
      </Box>

      <ContactsSocial />
    </Box>
  )
}
