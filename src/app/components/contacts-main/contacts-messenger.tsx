import { Box, IconButton, Typography } from "@mui/material";
import { clr } from "../../colors";

const iconButtonStyle = {
  mx: 1,
  backgroundColor: clr.light,
  transition: 'all 0.3s',
  "&:hover": {
    scale: '1.2',
    zIndex: 50,
    backgroundColor: clr.light,
  }
}

const iconButtonBoxStyle = {
  width: ['30px', '35px', '50px', '50px'], 
  height: ['30px', '35px', '50px', '50px'],
  backgroundSize: ['25px 25px', '25px 25px', '40px 40px', '40px 40px'], 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export default function ContactsMessenger() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column'  }}>

        <Typography 
          sx={{ 
            color: clr.light, 
            textShadow: `2px 2px 1px ${clr.dark}`, 
            fontSize: ['20px', '20px', '24px', '24px'], 
            mb: 1, 
            textAlign: 'center', 
            cursor: 'default' 
          }}
        >
          Или другим удобным Вам способом:
        </Typography>
      
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>

          <IconButton
            href='https://t.me/Elizaveta_Rozhkova'
            target='_blank'
            size='small'
            sx={iconButtonStyle}
          >
            <Box
              sx={{
                background: `url('/images/contacts/static/tg.png')`, ...iconButtonBoxStyle
              }}
            />
          </IconButton>

          <IconButton
            href='https://wa.me/79611470303'
            target='_blank'
            size='small'
            sx={iconButtonStyle}
          >
            <Box
              sx={{
                background: `url('/images/contacts/static/wa.png')`, ...iconButtonBoxStyle
              }}
            />
          </IconButton>

          <IconButton
            href='viber://chat?number=%2B79611470303'
            target='_blank'
            size='small'
            sx={iconButtonStyle}
          >
            <Box
              sx={{ background: `url('/images/contacts/static/vb.png')`, ...iconButtonBoxStyle }}
            />
          </IconButton>

        </Box>
      </Box>
    </>
  )
}