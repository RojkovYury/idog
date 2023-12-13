import { Box, Typography } from '@mui/material';
import { clr } from '../../colors';
import ServicesContentButton from './services-content-button';

interface ServicesContentMobileProps {
  currentContent: any;
}

export default function ServicesContentMobile({ currentContent }: ServicesContentMobileProps) {

  return(
    <Box 
      sx={{ 
        position: 'relative', 
        display: ['flex', 'flex', 'none', 'none'], 
        width: '100%', 
        justifyContent: 'center', 
        height: ['200px', '200px', '', ''],
        top: '-22px',  
      }}
    >

      <div style={{ position: 'absolute', display: 'flex', width: '100%', height: '200px', backgroundColor: clr.forest,  opacity: 0.65, zIndex: 10, borderRadius: '25px' }}/>
      <div style={{ position: 'absolute', display: 'flex', width: '100%', height: '200px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 11,  }}>
        
        <div style={{ display: 'flex', height: '60px', minHeight: '60px', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Typography 
            sx={{
              display: 'flex', 
              justifyContent: 'center',
              fontSize: ['40px', '32px', '', '', ],
              color: clr.light, 
              fontWeight: '700', 
              lineHeight: '1', 
              textDecoration: 'underline', 
              textShadow: `2px 2px 1px ${clr.dark}`, 
              textAlign: 'center',
            }}
          >
            {currentContent.title}
          </Typography>
        </div>

        <div style={{ display: 'flex', height: '100%', alignItems: 'center'}}>
          <Typography
            sx={{
              fontSize: ['24px', '24px', '', '', ], 
              color: clr.light,
              fontWeight: '400', 
              lineHeight: '1', 
              textShadow: `1px 1px 1px ${clr.dark}`, 
              textAlign: 'center',
            }}
          >
            {currentContent.text}
          </Typography>
        </div>

        <ServicesContentButton currentContent={currentContent}/>

      </div>
    </Box>
  )
} 
