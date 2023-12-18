import { Tooltip, Button, IconButton } from "@mui/material";
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

interface HeadServicesProps {
  TextColor: string
  HoverColor: string
  TextColorOnHover: string
  selected: string
  buttonProps: any
  iconButtonProps: any
}

export default function HeadServices({ TextColor, HoverColor, TextColorOnHover, selected, buttonProps, iconButtonProps }: HeadServicesProps) {
  return (
    <>
      <Tooltip title="Услуги" arrow placement="bottom-start">
        <IconButton 
          onClick={() => window.scrollTo(({ top: 1830, behavior: "smooth"}))}
          size='small' 
          sx={{ 
            ...iconButtonProps,
            backgroundColor: selected === 'services' ? HoverColor : 'inherit', 
            color: selected === 'services' ? TextColorOnHover : TextColor,  
          }}
        >
          <DryCleaningIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Tooltip>

      <Button 
        onClick={() => window.scrollTo(({ top: 1713, behavior: "smooth"}))} 
        sx={{ 
          ...buttonProps,
          backgroundColor: selected === 'services' ? HoverColor : 'inherit', 
          color: selected === 'services' ? TextColorOnHover : TextColor,  
        }}
      >
        Услуги
      </Button>
    </>
  )
}
        