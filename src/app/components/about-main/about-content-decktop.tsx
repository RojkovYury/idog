import styled from '@emotion/styled'
import { Box, Typography } from "@mui/material";
import { clr } from "@/app/colors";

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

export default function AboutContentDecktop() {
  return(
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
            background: `url('/images/about/tempMobileTest/handling.jpg')`, 
            backgroundSize: '250px 250px',
            border: `8px solid ${clr.secondary}`,
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
  )
} 