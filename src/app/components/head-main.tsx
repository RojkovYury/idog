import { Box, Divider } from "@mui/material";
import HeadIdog from "./head-main/head-idog";
import HeadAbout from "./head-main/head-about";
import HeadServices from "./head-main/head-services";
import HeadContacts from "./head-main/head-contacts";

interface HeadMainProps {
  TextColor: string;
  HoverColor: string;
  TextColorOnHover: string;
  selected: 'main' | 'about' | 'services' | 'contacts'
}

export default function HeadMain({ TextColor, HoverColor, TextColorOnHover, selected }: HeadMainProps) {

  const dividerProps = {
    my: 3, 
    border: 'none', 
    borderTop: `1px solid ${TextColor}`,
    width: ['140px', '200px', '320px', '420px'],
  }

  const buttonProps = {
    display: ['none', 'none', 'flex', 'flex'],
    mr: 2,
    fontSize: '2rem',
    fontWeight: '700', 
    backgroundColor: 'inherit', 
    borderRadius: '25px', 
    boxShadow: 'none', 
    height: '40px', 
    color: TextColor, 
    "&:hover": { 
      backgroundColor: HoverColor, 
      color: TextColorOnHover, 
    },
  }

  const iconButtonProps = {
    display: ['flex', 'flex', 'none', 'none'], 
    mr: 0,
    color: TextColor,
    "&:hover": { backgroundColor: HoverColor, color: TextColorOnHover }
  }

  return (  
    <Box 
      sx={{ 
        px:1, 
        py: 3, 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'space-between', 
        zIndex: 25 
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '100%', 
          alignItems: 'flex-start' 
        }}
      >
        <HeadIdog TextColor={TextColor} HoverColor={HoverColor} selected={selected} />
        <Divider sx={{ ...dividerProps }}/>

      </Box>
      
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end' 
        }}
      >

        <Box 
          sx={{ 
            height: '66px', 
            display: 'flex', 
            color: 'inherit', 
            textDecoration: 'none', 
            alignItems: 'center', 
            justifyContent: 'flex-end' 
          }}
        >
          <HeadAbout TextColor={TextColor} HoverColor={HoverColor} TextColorOnHover={TextColorOnHover} selected={selected} buttonProps={buttonProps} iconButtonProps={iconButtonProps}/>
          <HeadServices TextColor={TextColor} HoverColor={HoverColor} TextColorOnHover={TextColorOnHover} selected={selected} buttonProps={buttonProps} iconButtonProps={iconButtonProps}/>
          <HeadContacts TextColor={TextColor} HoverColor={HoverColor} TextColorOnHover={TextColorOnHover} selected={selected} buttonProps={buttonProps} iconButtonProps={iconButtonProps}/>
        </Box>

        <Divider sx={{ ...dividerProps }}/>
      </Box>

    </Box>
  )
}
