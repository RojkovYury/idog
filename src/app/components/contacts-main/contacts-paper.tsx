import { Box } from "@mui/material";
import { clr } from "../../colors";
import ContactsNavigator from './contacts-navigator';
import ContactsPhone from '../contacts-main/contacts-phone';
import ContactsModal from "../contacts-main/contacts-modal";
import ContactsSocial from "../contacts-main/contacts-messenger";

export default function ContactsPaper() {
  return(
    <>
      <Box 
        sx={{ 
          position: 'absolute',
          width: ['160px', '200px', '320px', '420px'],
          minWidth: ['160px', '200px', '320px', '420px'],
          height: '100%',
          right: 0,
          backgroundColor: clr.ground,  
          zIndex: 9,
          opacity: 0.75, 
        }}
      />

      <Box 
        sx={{ 
          position: 'absolute',
          width: ['160px', '200px', '320px', '420px'],
          minWidth: ['160px', '200px', '320px', '420px'],
          height: '100%',
          right: 0,
          zIndex: 10,
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-around', 
        }}
      >
        <ContactsNavigator />
        <ContactsPhone />
        <ContactsModal />
        <ContactsSocial />
      </Box>
    </>
  )
}
