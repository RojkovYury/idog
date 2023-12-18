import { Box } from "@mui/material";
import { clr } from "../colors";
import ContactsMap from "./contacts-main/contacts-map";
import ContactsMapMobile from "./contacts-main/contacts-map-mobile";
import ContactsNavigator from "./contacts-main/contacts-navigator";
import ContactsPhone from './contacts-main/contacts-phone';
import ContactsModal from "./contacts-main/contacts-modal";
import ContactsMessenger from "./contacts-main/contacts-messenger";
import ContactsSocial from './contacts-main/contacts-social';

interface ContactsMainProps {
  isTinyMobile: boolean;
}

export default function ContactsMain({isTinyMobile}: ContactsMainProps) {
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
      {!isTinyMobile && (
        <Box 
          sx={{ 
            width: '100%', 
            height: '600px', 
            display: 'flex', 
            mx: 1,
          }}
        >
          <ContactsMap />
        </Box>
      )}

      {isTinyMobile && (
        <>
          <div 
            style={{ 
              width: '100%', 
              height: '300px', 
              display: 'flex', 
              flexDirection: 'column'
            }}
          >
            <ContactsMapMobile />
          </div>
        
          <div 
            style={{ 
              width: '100%', 
              height: '355px',
              display: 'flex', 
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
          </div>
        </>
      )}

      <ContactsSocial />
    </Box>
  )
}
