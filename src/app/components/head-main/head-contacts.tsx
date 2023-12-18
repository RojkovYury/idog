import { Tooltip, Button, IconButton } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

interface HeadContactsProps {
  TextColor: string
  HoverColor: string
  TextColorOnHover: string
  selected: string
  buttonProps: any
  iconButtonProps: any
}

export default function HeadContacts({ TextColor, HoverColor, TextColorOnHover, selected, buttonProps, iconButtonProps }: HeadContactsProps) {
  return (
    <>
      <Tooltip title="Контакты" arrow placement="bottom-end">
        <IconButton 
          onClick={() => window.scrollTo(({ top: 2547, behavior: "smooth"}))} 
          size='small'
          sx={{ 
            ...iconButtonProps,
            backgroundColor: selected === 'contacts' ? HoverColor : 'inherit',
            color: selected === 'contacts' ? TextColorOnHover : TextColor, 
          }}
        >
          <InfoIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Tooltip>
      <Button 
        onClick={() => window.scrollTo(({ top: 2600, behavior: "smooth"}))} 
        sx={{ 
          ...buttonProps, 
          backgroundColor: selected === 'contacts' ? HoverColor : 'inherit',
          color: selected === 'contacts' ? TextColorOnHover : TextColor, 
        }}
      >
        Контакты
      </Button>
    </>
  )
}
        