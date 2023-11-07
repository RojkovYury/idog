import { Container, Paper, Box, Typography, Button } from "@mui/material"
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';

export default function Home() {
  const individualPalette = [
    { bg: '#F8F3F0', layout: '#FAFAFA', dark: '#191e27', light: '#ffebcf', primary: '#ff7c3f', secondary1: '#f4a62c', secondary2: '#F5AF41', secondary3: '#F6B856' }
  ]

  return (
    <Container maxWidth="lg">
      <Paper elevation={20} sx={{ position: "relative", overflow: 'hidden', width: '100%' }}>

        {/* Main */}
        <div style={{background: individualPalette[0].layout, height: '600px', width: 'auto', position: 'relative' }}>

          {/* Info */}
          <Box sx={{ position: 'absolute', top: '80px', marginLeft: ['35%', '50%', '50%'], zIndex: '50', display: 'flex', flexDirection: ['column', 'column', 'row'] }}>
            <Box sx={{ display: "flex", alignItems: 'center', mr: 2 }}>
              <PlaceIcon sx={{ m: 1 }}/>
              <Typography> Тула, ул.М.Тореза, 14В</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: 'center' }}>
              <CallIcon sx={{ m: 1 }}/>
              <Typography> 8(961)147-03-03</Typography>
            </Box>
          </Box>

          {/* Круг верхний */}
          <div style={{border: `1px solid ${individualPalette[0].secondary3}`, height: '600px', width: '600px', borderRadius: '50%', position: 'absolute', top: '-300px', right: '-300px', zIndex: '10' }} />
          <div style={{background: individualPalette[0].secondary3,            height: '300px', width: '300px', borderRadius: '50%', position: 'absolute', top: '-150px', right: '-150px', zIndex: '10' }} />
          <div style={{background: individualPalette[0].secondary2,            height: '250px', width: '250px', borderRadius: '50%', position: 'absolute', top: '-125px', right: '-125px', zIndex: '20' }} />
          <div style={{background: individualPalette[0].secondary1,            height: '200px', width: '200px', borderRadius: '50%', position: 'absolute', top: '-100px', right: '-100px', zIndex: '30' }} />
        
          {/* Круг средний */}
          <div style={{border: `1px solid ${individualPalette[0].secondary3}`, height: '600px', width: '600px', borderRadius: '50%', position: 'absolute', top: '000px', left: '-250px', zIndex: '10' }} />
          <div style={{background: individualPalette[0].secondary3,            height: '300px', width: '300px', borderRadius: '50%', position: 'absolute', top: '150px', left: '-100px', zIndex: '10' }} />
          <div style={{background: individualPalette[0].secondary2,            height: '250px', width: '250px', borderRadius: '50%', position: 'absolute', top: '175px', left: '-75px', zIndex: '20' }} />
          <div style={{background: individualPalette[0].secondary1,            height: '200px', width: '200px', borderRadius: '50%', position: 'absolute', top: '200px', left: '-50px', zIndex: '30' }} />

          {/* Информация */}
          <Box sx={{ position: 'relative', display: "flex", justifyContent: "space-around", alignItems: "center", height: "100%", zIndex: "40" }}>
            {/* text */}
            <Box sx={{width: "100%", ml: 7}}>
              <Typography variant="h3" sx={{color: individualPalette[0].dark, fontWeight: 700, mt: 1, mb: 1}}>
                Центр услуг для собак iDog
              </Typography>
              <Typography variant="inherit" sx={{color: individualPalette[0].dark, fontWeight: 500, mt: 2 }}>
                Самый широкий спектр услуг для Вашей собаки
              </Typography>
              <Typography variant="inherit" sx={{color: individualPalette[0].dark, fontWeight: 500, mb: 4}}>
                в одном месте
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained" size="large" sx={{ backgroundColor: individualPalette[0].primary, m: 1 }}>
                  Связаться с нами
                </Button>
              </Box>
            </Box>
            {/* images/main1 */}
            <Box sx={{ width: "450px", height: "100%", display: "flex", flexDirection: "column", justifyContent: 'flex-end' }}>
              <Image src="/images/main1.png" alt="main1" width={450} height={450}/>
            </Box>
          </Box>
    
        </div>


        <div style={{background: individualPalette[0].light, position: 'relative', zIndex: "45"  }}>

          <div style={{ background: individualPalette[0].bg, width: '100%' }}>Наш центр предоставляет широкий спектр услуг для собак, начиная от выставочного тренинга и поддержания спортивной формы, заканчивая грумингом. </div>

          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ background: individualPalette[0].primary, minWidth: '300px', width: '300px', height: '300px', m: 2 }}>1</Box>
            <Box sx={{ background: individualPalette[0].primary, minWidth: '300px', width: '300px', height: '300px', m: 2 }}>2</Box>
            <Box sx={{ background: individualPalette[0].primary, minWidth: '300px', width: '300px', height: '300px', m: 2 }}>3</Box>
            <Box sx={{ background: individualPalette[0].primary, minWidth: '300px', width: '300px', height: '300px', m: 2 }}>4</Box>
            <Box sx={{ background: individualPalette[0].primary, minWidth: '300px', width: '300px', height: '300px', m: 2 }}>5</Box>
          </Box>

        </div>
          

        {/* 3 */}
        <div style={{background: individualPalette[0].layout, height: '600px' }}>
          3
        </div>

        <div>
          Section 4 Small
        </div>

        <div>
          Section 5 Medium
        </div>

        <div>
          Section 6 Medium
        </div>

      </Paper>
    </Container>
  )
}


/*
      <div>
        <div style={{background: individualPalette[0].dark, color: individualPalette[0].light, width: '100%', height: '20px'}}>dark</div>
        <div style={{background: individualPalette[0].light, color: individualPalette[0].dark, width: '100%', height: '20px'}}>light</div>
        <div style={{background: individualPalette[0].primary, color: individualPalette[0].dark, width: '100%', height: '20px'}}>primary</div>
        <div style={{background: individualPalette[0].secondary1, color: individualPalette[0].dark, width: '100%', height: '20px'}}>secondary1</div>
        <div style={{background: individualPalette[0].secondary2, color: individualPalette[0].dark, width: '100%', height: '20px'}}>secondary2</div>
        <div style={{background: individualPalette[0].secondary3, color: individualPalette[0].dark, width: '100%', height: '20px'}}>secondary3</div>
      </div>

  // borderRadius: '0 0 50% 50%'
  // borderRadius: '50% 50% 0 0'
  // borderRadius: '50% 50% 0 0 / 100% 100% 0 0'
  // borderRadius: '0 0 50% 50% / 0 0 100% 100%'


        <div style={{background: individualPalette[0].light, height: '600px', position: 'relative' }}>
          <div style={{ position: 'absolute', height: '160px', width: '100%', top: '-80px', zIndex: '10' }}>
            <div style={{background: individualPalette[0].light, height: '80px' }} />
          </div>
          <div style={{ position: 'absolute', height: '160px', width: '100%', top: '-80px', zIndex: '15' }}>
            <div style={{background: 'red', height: '80px', borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
            
            <div style={{border: `1px solid ${individualPalette[0].secondary1}`, height: '800px', width: '800px', borderRadius: '50%', position: 'absolute', top: '-620px',  left: '-350px', zIndex: '10' }} />
          </div>






          
*/