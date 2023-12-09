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
        opacity: 0.85, 
        zIndex: 10, 
        // borderRadius: '25px',
      }}
    >
      <Typography sx={{ color: clr.ground, textDecoration: 'underline' }}>
        г Тула ул Мориса Тореза 14В
      </Typography>

      <Typography sx={{ color: clr.ground, textDecoration: 'underline', fontSize: '24px' }}>
        проложить маршрут на Яндекс.карты
      </Typography>

      <a 
        href="https://yandex.ru/maps/?rtext=~54.178708,37.604377" 
        target="_blank"
      >
        Проложить маршрут на карте
      </a>

      <a 
        href="https://2gis.ru/tula/firm/70000001030483602?m=37.604344%2C54.178678%2F18.62" 
        target="_blank"
      >
        Проложить маршрут на карте 2гис
      </a>

      <a 
        href="https://2gis.ru/tula/directions/points/%7C37.604344%2C54.178678%3B70000001030483602?m=37.630429%2C54.211213%2F13.72" 
        target="_blank"
      >
        Проложить маршрут на карте 2гис директ
      </a>


      <Typography sx={{ color: clr.ground, textDecoration: 'underline', fontSize: '24px' }}>
      проложить маршрут на 2гис
      </Typography>

      <ContactsPhone />
      <ContactsModal />
      <ContactsSocial />
  </Box>
  )
}
