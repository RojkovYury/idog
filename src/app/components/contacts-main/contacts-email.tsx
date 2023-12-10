import { Box, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { clr } from "../../colors";

interface ContactsEmailProps {
  handleOpen: () => void;
}

export default function ContactsEmail({handleOpen}: ContactsEmailProps) {

  return(
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column'  
      }}
    >
      <Typography 
        sx={{ 
          color: clr.light, 
          textShadow: `2px 2px 1px ${clr.dark}`, 
          fontSize: ['20px', '20px', '24px', '24px'], 
          textAlign: 'center', 
          cursor: 'default' 
        }}
      >
        Всегда ответим по нашей
      </Typography>

      <Box
        onClick={handleOpen}
        sx={{
          cursor: 'pointer',
          textDecoration: 'underline',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'inherit',
          color: clr.light,
          transition: 'all 0.3s',
          textShadow: `2px 2px 1px ${clr.dark}`,
          "&:hover": { 
            backgroundColor: 'inherit', 
            color: clr.groundPrimary,
            scale: '1.1',
          }
        }}
      >
        <EmailIcon 
          sx={{ 
            fontSize: ['24px', '24px', '38px', '38px'], 
            mr: 1 
          }}
        />
        <Typography 
          sx={{ 
            fontSize: ['24px', '24px', '38px', '38px'] 
          }}
        >
          Электронной почте
        </Typography> 
      </Box>

    </Box>
  )
}