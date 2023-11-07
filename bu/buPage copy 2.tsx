const waveBaseSXProps = { position: 'absolute', left: '0', width: '100%', height: '100px', background: `url('/images/wave.png')`, backgroundSize: '1000px 100px' }
const buttonProps = {fontFamily: 'Amatic_SC', fontWeight: '700', backgroundColor: 'inherit', borderRadius: '25px', ml: 1, boxShadow: 'none', color: 'black', width: '125px', height: '40px', "&:hover": { backgroundColor: '#ff7c3f', color: 'white' }}
const transitioProps = {  } //transition: 'top 0.5s linear'

const [layout1Y, setLayout1Y] = useState(0);
const [layout2Y, setLayout2Y] = useState(0);
const layout0Hstart = 600;
const [layout0H, setLayout0H] = useState(layout0Hstart);
const [wavePosition, setWavePosition] = useState(0);

const handleScroll = () => {
  const yPos = window.scrollY;
  console.log(yPos);
  setLayout1Y(-yPos / 1);
  setLayout2Y(-yPos / 2);
  // setLayout0H(layout0Hstart + yPos / 4); // заменить в верстке!
  setWavePosition((yPos / 600) * 100);
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => { window.removeEventListener('scroll', handleScroll); };
}, []);
      
      
      {/* page1 */}
      <Box sx={{ position: 'relative', background: '#F8F3F0', height: `${layout0H}px`, overflow: 'hidden', display: 'flex',  justifyContent: 'center', alignItems: 'center' }}>

        <Box sx={{ width: '500px', height: '350px', background: '#F8F3F0' }}></Box>

        
        <Box sx={{ top: `${layout1Y}px`, ...transitioProps, position: 'absolute', zIndex: '15', width: '100%',  height: '100%', display: 'flex',  justifyContent: 'center', alignItems: 'center' }}>
          <Container maxWidth='lg' sx={{ position: 'relative', display: 'flex',  justifyContent: 'space-between', alignItems: 'flex-start' }}>
            
            {/* слева */}
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', pt: 4, height: '100%', width: '100%' }}>

              <Box sx={{ my: 10, height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ fontSize: 72, marginBottom: '0' }}>Центр услуг для собак iDog</h1>
                <h2 style={{ fontSize: 24, width: '100%', color: '#191e27' }}>Самый широкий спектр услуг для Вашей собаки</h2>
                <Button variant="contained" size='small' sx={{ fontFamily: 'Amatic_SC', fontWeight: '700', backgroundColor: '#ff7c3f', borderRadius: '25px', m: 1, boxShadow: 'none', color: '#ffffff', width: '200px', height: '40px' }}>Связаться с нами</Button>
              </Box>
              
            </Box>

            {/* справа */}
            <Box sx={{ pt: 4, height: '100%',  display: 'flex', flexDirection: 'column', width: '100%' }}>

              <Box sx={{ width: "100%", height: "100%", mt: 4, display: "flex", flexDirection: "column", justifyContent: 'flex-start' }}>
                <Image src="/images/main1.png" alt="main1" width={500} height={500}/>
              </Box>
              
            </Box>
          
          </Container>
        </Box>

        {/* середина */}
        <Box sx={{ top: `${layout2Y}px`, ...transitioProps, position: 'absolute', zIndex: '4', width: '100%',  height: '100%', display: 'flex',  justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ m: 10, width: '300px', height: '300px', background: 'lightyellow' }}></Box>
        </Box>

      </Box>