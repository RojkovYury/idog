import { Box } from "@mui/material";
import AboutContentMobileCard from "./about-content-mobile-card";

export default function AboutContentMobile() {
  return(
    <>
      <Box 
        sx={{
          position: 'relative',
          display: ['flex', 'flex', 'none', 'none'],
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 1,
        }}
      >
        <AboutContentMobileCard 
          title={'Два хендлинг зала'}
          img={'/images/about/mobile/handling.webp'}
          description={'Cпециальное спортивное покрытие пола и зеркальные стены по периметру'}
        />
        <AboutContentMobileCard 
          title={'Фитнес зал'}
          img={'/images/about/mobile/fitnes.webp'}
          description={'Cиловые и статические тренажеры, профессиональная беговая дорожка'}
        />
      </Box>

      <Box 
        sx={{
          position: 'relative',
          display: ['flex', 'flex', 'none', 'none'],
          flexDirection: 'row',
          justifyContent: 'space-around',
          gap: 1,
        }}
      >
        <AboutContentMobileCard 
          title={'Зона отдыха'}
          img={'/images/about/mobile/relax.webp'}
          description={'Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак'}
        />
        <AboutContentMobileCard 
          title={'Груминг комната'}
          img={'/images/about/mobile/groomer.webp'}
          description={'Специальная ванна для собак, профессиональный стол, мощный компрессор и фен'}
        />
      </Box>
    </>
  )
}         
