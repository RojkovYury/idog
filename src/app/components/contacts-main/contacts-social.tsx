import { Box, IconButton } from "@mui/material";
import { clr } from "../../colors";

const iconButtonStyle = {
  ml: 1, 
  backgroundColor: clr.light, 
  "&:hover": { 
    scale: '1.2',
    transition: 'all 0.3s',
    zIndex: 50, 
    backgroundColor: clr.light,
  }
}

const iconButtonBoxStyle = {
  width: '50px', 
  height: '50px', 
  backgroundSize: '40px 40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export default function ContactsSocial() {
  return(
    <Box sx={{ display: 'flex' }}>

      <IconButton 
        href='https://t.me/Elizaveta_Rozhkova'
        target='_blank'
        size='small' 
        sx={iconButtonStyle}
      >
        <Box 
          sx={{ 
            background: `url('/images/contacts/static/tg.png')`, ...iconButtonBoxStyle }}
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
            background: `url('/images/contacts/static/wa.png')`, ...iconButtonBoxStyle }}
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
  )
}