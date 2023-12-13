import { Box, Typography } from "@mui/material";
import { clr } from "@/app/colors";

interface AboutContentMobileCardProps {
  title: string;
  img: string;
  description: string;
}

export default function AboutContentMobileCard(props: AboutContentMobileCardProps) {
  return(
    <Box 
      sx={{ 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '300px',
        mb: 1,
        zIndex: 10,
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: clr.light, opacity: 0.4, zIndex: 5}} />

      <Typography 
        sx={{ 
          my: 1,
          height: ['24px', '36px', '', ''],
          minHeight: ['24px', '36px', '', ''],
          lineHeight: '1',
          fontSize: ['24px', '32px', '', '', ],                 
          fontWeight: '700',
          textShadow: `1px 1px 1px ${clr.light}`, 
          cursor: 'default',
          color: clr.dark,
          textDecoration: 'underline',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {props.title}
      </Typography>

      <Box 
        sx={{
          display: 'flex',
          height: '100%',
          width: '100%',
          minWidth: '136px',
          borderRadius: '4px',
          backgroundImage: `url(${props.img})`,
          backgroundColor: 'red',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 10,
        }}
      />

      <Typography 
        sx={{ 
          m: 1, 
          lineHeight: '1',  
          fontSize: ['20px', '24px', '', '', ],
          fontWeight: '700',
          // textShadow: `1px 1px 1px ${clr.secondary}`,
          cursor: 'default',
          color: clr.dark,
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        {props.description} 
      </Typography>

    </Box>
  )
} 