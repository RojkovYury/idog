import dynamic from 'next/dynamic';
import { Box } from "@mui/material";

// import ContactsMap from "./contacts-main/contacts-map";
// import ContactsMapMobile from "./contacts-main/contacts-map-mobile";

// const ContactsMap = dynamic(() => import('./contacts-main/contacts-map'), { ssr: false });
// const ContactsMapMobile = dynamic(() => import('./contacts-main/contacts-map-mobile'), { ssr: false });

import ContactsSocial from './contacts-main/contacts-social';
// import useInnerWidth from "@/hooks/useInnerWidth";

export default function ContactsMain() {
  // const [isTinyMobile] = useInnerWidth();
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
      { /*!isTinyMobile && <ContactsMap /> }
      { isTinyMobile && <ContactsMapMobile /> */}

      <ContactsSocial />
    </Box>
  )
}
