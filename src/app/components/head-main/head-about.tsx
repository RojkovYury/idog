import { Tooltip, Button, IconButton } from "@mui/material";
import RecentActorsIcon from '@mui/icons-material/RecentActors';

interface HeadAboutProps {
  TextColor: string
  HoverColor: string
  TextColorOnHover: string
  selected: string
  buttonProps: any
  iconButtonProps: any
}

export default function HeadAbout({ TextColor, HoverColor, TextColorOnHover, selected, buttonProps, iconButtonProps }: HeadAboutProps) {
  return (
    <>
      <Tooltip title="О нас" arrow>
        <IconButton 
          onClick={() => window.scrollTo(({ top: 760, behavior: "smooth"}))} 
          size='small' 
          sx={{ 
            ...iconButtonProps, 
            backgroundColor: selected === 'about' ? HoverColor : 'inherit', 
            color: selected === 'about' ? TextColorOnHover : TextColor, 
          }}
        >
          <RecentActorsIcon sx={{ fontSize: '2rem' }} />
        </IconButton>
      </Tooltip>

      <Button 
        onClick={() => window.scrollTo(({ top: 742, behavior: "smooth"}))} 
        sx={{ 
          ...buttonProps, 
          backgroundColor: selected === 'about' ? HoverColor : 'inherit',
          color: selected === 'about' ? TextColorOnHover : TextColor, 
        }}
      >
        О нас
      </Button>
    </>
  )
}
        