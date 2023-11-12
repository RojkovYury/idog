
import { Box,Typography } from "@mui/material";
import { clr } from "../colors";
import styled from '@emotion/styled'
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";

export default function Services() {

  const TitleText = styled(Typography)({
    fontWeight: '700',
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const TopText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '700', 
    lineHeight: '1',  
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const TopOptionText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '700', 
    lineHeight: '1', 
    textDecoration: 'underline', 
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const BottomOptionText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '400', 
    lineHeight: '1', 
    textShadow: `1px 1px 1px ${clr.dark}`, 
    textAlign: 'center'
  })

  const BottomText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center',
    fontWeight: '400', 
    fontSize: '32px',
    textShadow: `1px 3px 1px ${clr.dark}`, 
  })

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
        zIndex: 10,
      }}
    >

      {/* Title */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TitleText sx={{ fontSize: ['50px', '60px', '70px', '80px'] }}>В нашем центре</TitleText>
    </Box>

      {/* Top */}
      <Box sx={{ mb: 4 }}>
        <TopText sx={{ fontSize: ['28px', '32px', '38px', '42px'] }}>
          самый широкий спектр услуг для собак, начиная от выставочного тренинга и 
          поддержания спортивной формы, заканчивая грумингом
        </TopText>
      </Box>

      {/* Optional texts */}
      <Box 
        sx={{ 
          position: 'relative', 
          display: ['none', 'none', 'flex', 'flex'],
          justifyContent: 'center',
          width: '100%',
          top: ['50px', '50px', '50px', '50px'],
        }}
      >

        {/* Center */}
        <Box 
          sx={{ 
            position: 'absolute',
            display: 'flex', 
            alignItems: 'center',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            zIndex: 5,
            visibility: ['hidden', 'hidden', 'visible', 'visible'],
          }}
        >
          <Box 
            sx={{ 
              borderRadius: '50%', 
              width: '250px', 
              height: '250px', 
              background: `url('/images/services/tempMobileTest/handling.jpg')`, 
              backgroundSize: '250px 250px',
              border: `8px solid ${clr.secondary1}`,
              scale: ['', '', '1.1', '1.3'],
              display: ['none', 'none', 'flex', 'flex'],
            }}
          />
        </Box>

        {/* Left side */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: ['', '', 'flex-end', 'flex-start'],
            width: '100%',
            zIndex: 4,
          }}
        >
          <Box 
            sx={{ 
              position: 'relative',
              background: 'rgb(0, 0, 0, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              m: 1,
              p: 1,
              width: ['350px', '350px', '300px', '420px'],
              height: ['100px', '100px', '116px', '100%'],
              zIndex: 3,
              top: ['0px', '0px', '-25px', '-25px'],
              right: ['0px', '0px', '90px', '0px'], 
            }}
          >
            <TopOptionText sx={{ fontSize: ['42px', '42px', '36px', '42px'] }}>Два хендлинг зала</TopOptionText>
            <BottomOptionText sx={{ fontSize: ['30px', '30px', '24px', '30px'] }}>Cпециальное спортивное покрытие пола и зеркальные стены по периметру</BottomOptionText>
          </Box>
          
          <Box 
            sx={{ 
              position: 'relative',
              background: 'rgb(0, 0, 0, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              m: 1,
              p: 1,
              width: ['350px', '350px', '300px', '420px'],
              height: ['100px', '100px', '116px', '100%'],
              zIndex: 3,
              top: ['0px', '0px', '25px', '25px'],
              right: ['0px', '0px', '90px', '0px'], 
            }}
          >
            <TopOptionText sx={{ fontSize: ['42px', '42px', '36px', '42px'] }}>Фитнес зал</TopOptionText>
            <BottomOptionText sx={{ fontSize: ['30px', '30px', '24px', '30px'] }}>Cиловые и статические тренажеры, профессиональная беговая дорожка для собак</BottomOptionText>
          </Box>
        </Box>

        {/* Right side */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: ['', '', 'flex-start', 'flex-end'],
            width: '100%' 
          }}
        >
          <Box 
            sx={{ 
              position: 'relative',
              background: 'rgb(0, 0, 0, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              m: 1,
              p: 1,
              width: ['350px', '350px', '300px', '420px'],
              height: ['100px', '100px', '116px', '100%'],
              zIndex: 3, 
              top: ['0px', '0px', '-25px', '-25px'],
              left: ['0px', '0px', '90px', '0px'], 
            }}
          >
            <TopOptionText sx={{ fontSize: ['42px', '42px', '36px', '42px'] }}>Зона отдыха</TopOptionText>
            <BottomOptionText sx={{ fontSize: ['30px', '30px', '24px', '30px'] }}>Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак</BottomOptionText>
          </Box>

          <Box 
            sx={{ 
              position: 'relative',
              background: 'rgb(0, 0, 0, 0.2)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              m: 1,
              p: 1,
              width: ['350px', '350px', '300px', '420px'],
              height: ['100px', '100px', '116px', '100%'],
              zIndex: 3, 
              top: ['0px', '0px', '25px', '25px'],
              left: ['0px', '0px', '90px', '0px'],   
            }}
          >
            <TopOptionText sx={{ fontSize: ['42px', '42px', '36px', '42px'] }}>Груминг комната</TopOptionText>
            <BottomOptionText sx={{ fontSize: ['30px', '30px', '24px', '30px'] }}>Специальная ванна для собак, профессиональный стол, мощный компрессор и фен</BottomOptionText>
          </Box>
        </Box>

      </Box>

      {/* Mobile */}
      <Box 
        sx={{
          position: 'relative',
          display: ['flex', 'flex', 'none', 'none'],
          flexDirection: 'column',
        }}
      >
        <ServiceLeft 
          top={0}  
          title={'Два хендлинг зала'}
          lineOne={'Cпециальное спортивное покрытие пола и зеркальные стены по периметру'}
          image={'/images/services/tempMobileTest/handling.jpg'}
        />
        <ServiceRight 
          top={30}  
          title={'Фитнес зал'}
          lineOne={'Cиловые и статические тренажеры, профессиональная беговая дорожка для собак'}
          image={'/images/services/tempMobileTest/fitnes.jpg'}
        />
        <ServiceLeft 
          top={60}  
          title={'Зона отдыха'}
          lineOne={'Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак'}
          image={'/images/services/tempMobileTest/relax.jpg'}
        />
        <ServiceRight 
          top={90}  
          title={'Груминг комната'}
          lineOne={'Специальная ванна для собак, профессиональный стол, мощный компрессор и фен'}
          image={'/images/services/tempMobileTest/groomer.jpg'}
        />
      </Box>

      {/* Buttom */}
      <Box 
        sx={{ 
          position: 'relative', 
          top: '120px' 
        }}
      >
        <BottomText sx={{ fontSize: ['24px', '28px', '30px', '36px']} }>
          Делаем Ваших питомцев счастливыми с 2017 года
        </BottomText>
      </Box>




    </Box>
  )
} 

