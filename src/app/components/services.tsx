
import { Box,Typography } from "@mui/material";
import { clr } from "../colors";
import styled from '@emotion/styled'

export default function Services() {

  const TitleText = styled(Typography)({
    fontSize: '80px', 
    fontWeight: '700',
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const TopText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '700', 
    fontSize: '42px', 
    lineHeight: '1',  
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const TopOptionText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '700', 
    fontSize: '42px', 
    lineHeight: '1', 
    textDecoration: 'underline', 
    textShadow: `2px 2px 1px ${clr.dark}`, 
    textAlign: 'center',
  })

  const BottomOptionText = styled(Typography)({
    display: 'flex', 
    justifyContent: 'center', 
    fontWeight: '400', 
    fontSize: '30px', 
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

  const optionsTextsContainerProps = {
    position: 'relative',
    background: 'rgb(0, 0, 0, 0.2)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    m: 1,
    p: 1,
    width: ['350px', '350px', '350px', '420px'],
    zIndex: 3,
  } 

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
        <TitleText>В нашем центре</TitleText>
    </Box>

      {/* Top */}
      <Box sx={{ mb: 4 }}>
        <TopText>
          самый широкий спектр услуг для собак, начиная от выставочного тренинга и 
          поддержания спортивной формы, заканчивая грумингом
        </TopText>
      </Box>

      {/* Optional texts */}
      <Box 
        sx={{ 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%',
          top: ['50px', '50px', '50px', '50px']
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
          }}
        >
          <Box 
            sx={{ 
              borderRadius: '50%', 
              width: '250px', 
              height: '250px', 
              background: `url('/images/services/testAbout.jpg')`, 
              backgroundSize: '360px 260px', 
              border: `8px solid ${clr.secondary1}`,
              scale: ['1.1', '1.1', '1.1', '1.3']
            }}
          />
        </Box>
        
        {/* Left side */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Box sx={{ ...optionsTextsContainerProps, top: ['-20px', '-20px', '-20px', '-25px'] }}>
            <TopOptionText>Два хендлинг зала</TopOptionText>
            <BottomOptionText>Cпециальное спортивное покрытие пола и зеркальные стены по периметру</BottomOptionText>
          </Box>
          
          <Box sx={{ ...optionsTextsContainerProps, top: ['20px', '20px', '20px', '25px'] }}>
            <TopOptionText>Фитнес зал</TopOptionText>
            <BottomOptionText>Cиловые и статические тренажеры, профессиональная беговая дорожка для собак</BottomOptionText>
          </Box>
        </Box>

        {/* Right side */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end', 
            width: '100%' 
          }}
        >
          <Box sx={{ ...optionsTextsContainerProps, top: ['-20px', '-20px', '-20px', '-25px'] }}>
            <TopOptionText>Зона отдыха</TopOptionText>
            <BottomOptionText>Уютная зона ожидания, чай и кофе для вас. Просторные клетки для собак</BottomOptionText>
          </Box>

          <Box sx={{ ...optionsTextsContainerProps, top: ['20px', '20px', '20px', '25px']  }}>
            <TopOptionText>Груминг комната</TopOptionText>
            <BottomOptionText>Специальная ванна для собак, профессиональный стол, мощный компрессор и фен</BottomOptionText>
          </Box>
        </Box>

      </Box>

      {/* Buttom */}
      <Box 
        sx={{ 
          position: 'relative', 
          top: '140px' 
        }}
      >
        <BottomText>Делаем Ваших питомцев счастливыми с 2017 года</BottomText>
      </Box>
      
    </Box>
  )
} 

{/*
import ServiceLeft from "./services/serviceLeft";
import ServiceRight from "./services/serviceRight";

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
      */}
