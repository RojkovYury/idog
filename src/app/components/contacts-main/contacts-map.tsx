import Image from 'next/image';
import { Box } from "@mui/material";
import { clr } from "../../colors";
import ContactsPaper from './contacts-paper';


export default function ContactsMap() {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: ['300px', '600px', '600px', '600px'], 
        display: 'flex',
        flexDirection: ['column', 'row', 'row', 'row'], 
        mx: [0, 1, 1, 1], 
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          border: `3px solid ${clr.light}`,
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box 
          sx={{ 
            display: ['none', 'flex', 'flex', 'flex'],
            position: 'absolute', 
            right: 0, 
            height: '100%' 
            }}
          >
          <ContactsPaper />
        </Box>

        <Box
          sx={{
            width: '100%',
            height: ['300px', '600px', '600px', '600px'], 
            position: 'relative',
            background: [
              `url('/images/contacts/mobile/map.webp') center`,
              `url('/images/contacts/map.webp')`, 
              `url('/images/contacts/map.webp')`, 
              `url('/images/contacts/map.webp')`, 
            ],
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

    </Box>
  )
}
