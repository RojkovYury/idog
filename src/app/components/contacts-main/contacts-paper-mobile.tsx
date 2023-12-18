import { Box } from "@mui/material";
import { clr } from "../../colors";
import ContactsNavigator from './contacts-navigator';
import ContactsPhone from '../contacts-main/contacts-phone';
import ContactsModal from "../contacts-main/contacts-modal";
import ContactsSocial from "../contacts-main/contacts-messenger";

export default function ContactsPaperMobile() {
  return(
    <Box 
      sx={{
        display: ['flex', 'none', 'none', 'none'], 
        position: 'relative',
        width: '100%',
        height: '355px',
        right: 0,
        zIndex: 10,
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-around',
      }}
    >
      <ContactsNavigator />
      <Box sx={{ display: 'flex', height: '1px', backgroundColor: clr.light, width: '60%', mt: 1 }} />
      <ContactsPhone />
      <Box sx={{ display: 'flex', height: '1px', backgroundColor: clr.light, width: '75%', mt: 1 }} />
      <ContactsModal />
      <Box sx={{ display: 'flex', height: '1px', backgroundColor: clr.light, width: '60%', mt: 1 }} />
      <ContactsSocial />
    </Box>
  )
}
