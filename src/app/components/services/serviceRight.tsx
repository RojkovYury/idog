import { Box, Typography } from "@mui/material";
import { clr } from "@/app/colors";

interface ServiceRightProps {
  top: number;
  title: string;
  lineOne: string;
  image?: string;
}

export default function ServiceRight({ top, title, lineOne, image }: ServiceRightProps) {
  return(
    <Box 
      sx={{ 
        position: 'relative',
        top: `${top}px`,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
        <Box // Круг
          sx={{
            backgroundColor: clr.primary,
            position: 'absolute',
            right: ['-10px', '0px', '', ''], 
            top: '-10px',
            height: '120px',
            width: '120px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
            scale: ['0.9', '1.1', '', ''],
            transition: 'all 1s',
            opacity: 1
          }} 
        >
          <Box // Фото в кругу
            sx={{
              position: 'relative',
              height: '110px',
              width: '110px',
              borderRadius: '50%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
            }}
          />
        </Box>

        <Box // Палка
          sx={{
            backgroundColor: clr.light,
            position: 'relative',
            height: '100px',
            width: '100%',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            opacity: '0.75',
            transition: 'all 1s',
            "&:hover": {  
              opacity: '1',
            },
          }}
        >
          <Box 
            sx={{
              width: '100%',
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 1s',
              overflow: 'hidden',
              m: [2, 16, 0, 0],
              textAlign: 'center',
            }}
          >
            <Typography 
              noWrap
              sx={{ 
                lineHeight: '1',
                fontSize: ['32px', '32px', '', '', ],              
                fontWeight: '700',
                cursor: 'default',
                color: clr.dark,
                textDecoration: 'underline',
              }}
            >
              {title}
            </Typography>

            <Typography 
              sx={{ 
                lineHeight: '1',  
                fontSize: ['20px', '22px', '', '', ], 
                fontWeight: '700',
                cursor: 'default',
                color: clr.dark,
              }}
            >
              {lineOne}
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: ['flex', 'none', '', ''],
              height: '120px',
              width: '120px',
            }}
          />

        </Box>

    </Box>
    )
  } 