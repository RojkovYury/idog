
import { Box,Typography } from "@mui/material";
import TitleServices from "./services/titleServices";
import { clr } from "../colors";
import Image from 'next/image';
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";


export default function Services() {
  return(
    <Box 
      sx={{ 
        position: 'relative', 
        height: '900px',
        width: '100%',
        color: clr.light,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

        top: '-45px',
        zIndex: 10
      }}
    >

      <TitleServices />

      <Box>
        <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '48px', lineHeight: '1',  textShadow: `2px 2px 1px ${clr.dark}`, textAlign: 'center' }}> 
          Наш центр предоставляет широкий спектр услуг для собак, начиная от выставочного тренинга и поддержания спортивной формы, заканчивая грумингом. 
          Отличительной чертой нашего центра является команда профессионалов, готовая помочь в решении вопросов любой сложности.
        </Typography>
      </Box>

      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'space-around'}}>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>

          <Box sx={{ }}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '48px', lineHeight: '1', textDecoration: 'underline', textShadow: `2px 2px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Два больших хендлинг зала
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '32px', lineHeight: '1', textShadow: `1px 1px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Cпециальное спортивное покрытием пола и зеркальные стены по периметру
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '48px', lineHeight: '1', textDecoration: 'underline', textShadow: `2px 2px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Фитнес зал
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '32px', lineHeight: '1', textShadow: `1px 1px 1px ${clr.dark}`, textAlign: 'center'  }}>
              Cиловые и статические тренажеры профессиональная беговая дорожка для собак 
            </Typography>
          </Box>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ borderRadius: '50%', width: '300px', height: '300px', background: `url('/images/services/testAbout.jpg')`, backgroundSize: '400px 300px', border: `5px solid ${clr.primary}` }}/>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>

          <Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '48px', lineHeight: '1', textDecoration: 'underline', textShadow: `2px 2px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Зона отдыха для владельцев
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '32px', lineHeight: '1', textShadow: `1px 1px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак  
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: '48px', lineHeight: '1', textDecoration: 'underline', textShadow: `2px 2px 1px ${clr.dark}`, textAlign: 'center'  }}> 
              Груминг комната
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontWeight: '400', fontSize: '32px', lineHeight: '1', textShadow: `1px 1px 1px ${clr.dark}`, textAlign: 'center'  }}>
              Специальная ванна для собак, профессиональный стол, мощный компрессор, фен и полотенца.
            </Typography>
          </Box>

        </Box>

      </Box>

      <Box>
        <Typography sx={{ display: 'flex', justifyContent: 'center' }}> Делаем Ваших питомцев счастливыми с 2017 года</Typography>
      </Box>
      
    </Box>
  )
} 









{/*
      <ServiceLeft 
        top={-50}  
        pright={10}
        title={'Фитнесс'}
        lineOne={'Каждой собаке необходимы физические нагрузки,'}
        lineTwo={'чтобы она была здоровой, активной и послушной'}
        image={''}
      />

      <ServiceRight 
        top={70}  
        pleft={10}
        title={'Хендлинг'}
        lineOne={'Подготовить собаку и выступить на дог-шоу, а также построить правильную карьеру'}
        lineTwo={'вам поможет профессиональный хендлер'}
        image={''}
      />

      <ServiceLeft 
        top={190}  
        pright={10}
        title={'Дрессировка'}
        lineOne={'Научим спокойно ходить на поводке, приходить по первому зову и носить тапочки,'}
        lineTwo={'поможем справиться с проблемами и воспитать щенка'}
        image={''}
      />

      <ServiceRight 
        top={310} 
        pleft={10}
        title={'Грумминг'}
        lineOne={'Комплекс по уходу за питомцем'}
        lineTwo={'(мойка и укладка шерсти, стрижка когтей и другие процедуры в зависимости от породы)'}
        image={''}
      />

      <ServiceLeft 
        top={430}  
        pright={10}
        title={'Массаж'}
        lineOne={'Массаж улучшает состояние связок и суставов, снимает напряжение,'}
        lineTwo={'улучшает кровообращение и работу пищеварительной системы'}
        image={''}
      />
      <ServiceRight 
        top={550} 
        pleft={10}
        title={'Фото-студия'}
        lineOne={'Экстерьерная и художественная фотосъемка, '}
        lineTwo={'фоторепортажи с выставки, фотосъемка щенков'}
        image={''}
      />

      <ServiceLeft 
        top={670}  
        pright={10}
        title={'Аренда'}
        lineOne={'Индивидуальная и групповая аренда,'}
        lineTwo={'проведение семинаров и мастер классов'}
        image={''}
      />

      <ServiceRight 
        top={790} 
        pleft={10}
        title={'Оформление документов'}
        lineOne={'Помощь в оформлении чемпионских дипломов и родословных'}
        lineTwo={''}
        image={''}
      /> 
      */}
