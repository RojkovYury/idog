import Link from 'next/link';
import { Box, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import { clr } from "../../colors";

export default function ContactsPhone() {

  return(
      <Box sx={{ display: 'flex' }}>
          <Box 
            component={Link}
            href={'tel:+79611470303'}
            sx={{
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center', 
              backgroundColor: 'inherit',
              color: clr.light,
              transition: 'all 0.3s',
              textShadow: `2px 2px 1px ${clr.dark}`,
              ml: 2,
              "&:hover": { 
                backgroundColor: 'inherit', 
                color: clr.groundPrimary,
                scale: '1.1',
              }
            }}
          >
            <CallIcon sx={{ fontSize: ['24px', '24px', '38px', '38px'], mr: 1, color: clr.groundPrimary }}/>
            <Typography> +7 (961) 147 03 03</Typography>
          </Box>
        </Box>
  )
}