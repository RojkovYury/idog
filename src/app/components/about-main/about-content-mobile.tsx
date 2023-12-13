import { Box } from "@mui/material";
import AboutLeft from './about-left';
import AboutRight from './about-right';

export default function AboutContentMobile() {
  return(
    <Box 
        sx={{
          position: 'relative',
          display: ['flex', 'flex', 'none', 'none'],
          flexDirection: 'column',
        }}
      >
        <AboutLeft 
          top={0}  
          title={'Два хендлинг зала'}
          lineOne={'Cпециальное спортивное покрытие пола и зеркальные стены по периметру'}
          image={'/images/about/tempMobileTest/handling.jpg'}
        />
        <AboutRight 
          top={30}  
          title={'Фитнес зал'}
          lineOne={'Cиловые и статические тренажеры, профессиональная беговая дорожка для собак'}
          image={'/images/about/tempMobileTest/fitnes.jpg'}
        />
        <AboutLeft 
          top={60}  
          title={'Зона отдыха'}
          lineOne={'Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак'}
          image={'/images/about/tempMobileTest/relax.jpg'}
        />
        <AboutRight 
          top={90}  
          title={'Груминг комната'}
          lineOne={'Специальная ванна для собак, профессиональный стол, мощный компрессор и фен'}
          image={'/images/about/tempMobileTest/groomer.jpg'}
        />
      </Box>
    )
  } 