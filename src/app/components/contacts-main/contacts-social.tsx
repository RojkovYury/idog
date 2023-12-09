import Link from 'next/link';
import Image from 'next/image';
import { Box } from "@mui/material";
import { clr } from "../../colors";

const socialBoxStyle = {
  width: '93px', 
  height: '93px', 
  borderRadius: '22px', 
  backgroundColor: clr.light,
  boxShadow: `0px 0px 20px 1px ${clr.light}`,
  transition: 'all 0.3s',
  "&:hover": {  
    scale: '1.2',
    boxShadow: `0px 0px 30px 10px ${clr.light}`,
  },
}

export default function ContactsSocial() {
  return (
    <Box 
      sx={{  
        display: 'flex', 
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'center',
        gap: 6,
        mt: 4,
        mb: 8, // для boxShadow
      }}
    >
      
      <Box 
        component={Link}
        href="https://vk.com/idogtula"  
        sx={socialBoxStyle}
      >
        <Image src="/images/contacts/static/vk.png" alt="VK" width={93} height={93} />
      </Box>

      <Box 
        component={Link}
        href="https://instagram.com/tulacenter_idog"  
        sx={socialBoxStyle}
      >
        <Image src="/images/contacts/static/inst.png" alt="Instagramm" width={93} height={93} />
      </Box>
      
      <Box 
        component={Link}
        href="https://www.facebook.com/iDogtula"  
        sx={socialBoxStyle}
      >
        <Image src="/images/contacts/static/fb.png" alt="Facebook" width={93} height={93} />
      </Box>
    </Box>
  )
}