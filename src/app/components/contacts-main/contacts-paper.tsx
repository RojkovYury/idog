import { Box, Typography } from "@mui/material";
import { clr } from "../../colors";
import ContactsPhone from '../contacts-main/contacts-phone';
import ContactsModal from "../contacts-main/contacts-modal";
import ContactsSocial from "../contacts-main/contacts-messenger";

export default function ContactsPaper() {
  return(
    <Box 
      sx={{ 
        position: 'absolute',
        width: ['160px', '200px', '320px', '420px'],
        minWidth: ['160px', '200px', '320px', '420px'],
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        right: 0,
        backgroundColor: clr.bg,  
        opacity: 0.8, 
        zIndex: 10, 
        // borderRadius: '25px',
      }}
    >
      <Typography sx={{ color: clr.ground, textDecoration: 'underline' }}>г Тула ул Мориса Тореза 14В</Typography>
      <ContactsPhone />
      <ContactsModal />
      <ContactsSocial />
  </Box>
  )
}