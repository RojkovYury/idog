import { Button } from '@mui/material';
import { clr } from '../../colors';

interface ServicesContentButtonProps {
  currentContent: any;
}

export default function ServicesContentButton({ currentContent }: ServicesContentButtonProps) {
  return(
    <Button 
      variant="contained" 
      size='small' 
      sx={{ 
        color: clr.light, 
        backgroundColor: clr.grassPrimary, 
        fontWeight: '700', 
        borderRadius: '25px', 
        mt: 3, 
        boxShadow: 'none', 
        width: ['140px', '200px', '200px', '200px'], 
        height: ['30px', '40px', '40px', '40px'], 
        fontSize: ['24px', '26px', '26px', '26px'],
        marginY: '15px',
        "&:hover": { 
          backgroundColor: clr.grass, 
          color: clr.light 
        }
      }}
    >
      Узнать больше
    </Button>
  )
} 
