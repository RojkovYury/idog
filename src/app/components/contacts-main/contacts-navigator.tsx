import Link from 'next/link';
import { Box, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import { clr } from "../../colors";

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s',
  color: clr.light,
  textDecoration: 'none',
  "&:hover": { 
    backgroundColor: 'inherit', 
    color: clr.groundPrimary,
    scale: '1.2',
  }
};

const logoStyle = {
  width: '30px',
  height: '30px',
  mr: 1,
  backgroundSize: '30px 30px',
  borderRadius: '5px',
}

export default function ContactsNavigator() {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography 
        sx={{ 
          color: clr.light, 
          textDecoration: 'underline',
          textShadow: `2px 2px 1px ${clr.dark}`,
          cursor: 'default',
          fontSize: '36px',
        }}
      >
        г Тула ул Мориса Тореза 14В
      </Typography>

      <Typography sx={{ color: clr.light, textShadow: `2px 2px 1px ${clr.dark}`, fontSize: '24px', mt: 1, textAlign: 'center'  }}>
        Ждем в гости по маршруту:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>

        <Box
          component={Link}
          href="https://yandex.ru/maps/?rtext=~54.178708,37.604377" 
          target="_blank"
          sx={linkStyle}
        >
          <Box sx={{ background: `url('/images/contacts/static/ya.jpg')`, ...logoStyle }} />
          <Typography sx={{ textShadow: `2px 2px 1px ${clr.dark}`, fontSize: '28px' }}>
            Яндекс.карты
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', ml: 4 }}>
        
          <Box
            component={Link}
            href="https://2gis.ru/tula/directions/points/%7C37.604344%2C54.178678%3B70000001030483602?m=37.630429%2C54.211213%2F13.72" 
            target="_blank"
            sx={linkStyle}
          >
            <Box sx={{ background: `url('/images/contacts/static/2gis.jpg')`, ...logoStyle }} />
            <Typography sx={{ textShadow: `2px 2px 1px ${clr.dark}`, fontSize: '28px' }}>
              2Гис
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}