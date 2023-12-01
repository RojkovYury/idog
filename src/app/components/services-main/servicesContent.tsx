import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled'
import { clr } from '../../colors';

const TopOptionText = styled(Typography)({
  display: 'flex', 
  justifyContent: 'center', 
  fontWeight: '700', 
  lineHeight: '1', 
  textDecoration: 'underline', 
  textShadow: `2px 2px 1px ${clr.dark}`, 
  textAlign: 'center',
  marginTop: 15,
})

const BottomOptionText = styled(Typography)({
  display: 'flex', 
  justifyContent: 'center', 
  fontWeight: '400', 
  lineHeight: '1', 
  textShadow: `1px 1px 1px ${clr.dark}`, 
  textAlign: 'center',
  marginTop: 15,
})

interface ServicesContentProps {
  currentContent: any;
}

export default function ServicesContent({ currentContent }: ServicesContentProps) {

  return(
    <Box sx={{ position: 'relative', display: 'flex', width: '100%', justifyContent: 'center', height: '300px' }}>

      <Box sx={{ position: 'absolute', display: 'flex', width: ['800px', '800px', '800px', '800px'], height: '300px', backgroundColor: clr.forest,  opacity: 0.7, zIndex: 10, borderRadius: '25px' }}/>
      
      <Box sx={{ position: 'absolute', display: 'flex', width: ['800px', '800px', '800px', '800px'], height: '300px', zIndex: 11 }}>
        
        <Box sx={{ width: '65%', textAlign: 'center', mx: 1 }}>

          <TopOptionText sx={{ fontSize: '64px', color: clr.light }}>
            {currentContent.title}
          </TopOptionText>

          <BottomOptionText sx={{ fontSize: '38px', color: clr.light }}>
            {currentContent.text}
          </BottomOptionText>

          <Button 
            variant="contained" 
            size='small' 
            sx={{ 
              fontWeight: '700', 
              backgroundColor: clr.primary, 
              borderRadius: '25px', 
              mt: 3, 
              boxShadow: 'none', 
              color: clr.light, 
              width: '200px', 
              height: '40px',
              marginY: '15px',
              "&:hover": { 
                backgroundColor: clr.secondary3, 
                color: clr.light 
              }
            }}
          >
            Узнать больше
          </Button>


        </Box>

        <Box sx={{ width: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: 2 }}>
          <Box 
            sx={{ 
              borderRadius: '50%', 
              width: '100%', 
              height: '100%', 
              background: `url('${currentContent.src}')`,
              backgroundSize: '100% 100%',
              border: `4px solid ${clr.primary}`,
            }}
          />
        </Box>

      </Box>
    </Box>
  )
} 
