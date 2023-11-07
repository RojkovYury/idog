import { Container, Paper, Box, Typography, Skeleton, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
export default function Rent() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ pt: 1, pb: 1, pl: 4, pr: 4, mt: 2 }}>

        <Typography variant="h3" sx={{ textAlign: 'center', mt: 2, mb: 1 }}>
          Аренда зала
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          для самостоятельных занятий
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
          и семинаров
        </Typography>

        <Typography variant="h6" sx={{ textAlign: 'center', mb: 2  }}>
          Вы можете арендовать наш зал для самостоятельных занятий со своей собакой
        </Typography>

        <Divider variant="middle" sx={{ mt: 3, mb: 3 }}/>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Skeleton variant="rectangular" width={300} height={300} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', ml: 3 }}>
            <Typography sx={{ m: 1 }}>
              Если вы хотите самостоятельно арендовать помещение для занятий, мы предоставим все, что необходимо для этого.
            </Typography>
            <Typography sx={{ m: 1 }}>
              Вы можете выбрать наиболее удобное для Вас время аренды.
            </Typography>
            <Typography sx={{ m: 1 }}>
              Так же предоставляем помещение в аренду для проведение семинаров и мастер классов.
            </Typography>
          </Box>
        </Box>

        <Divider variant="middle" sx={{ mt: 3, mb: 3 }}/>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}> 

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            <Typography sx={{ m: 1, fontWeight: 700 }}>
              Мы можем предоставить:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText primary="стационарные клетки" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText primary="грумерский стол" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText primary="стулья" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText primary="маркерная доска" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText primary="фитнес оборудование" />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Skeleton variant="rectangular" width={450} height={300} />
          </Box>
        </Box> 

        <Divider variant="middle" sx={{ mt: 3, mb: 3 }}/>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ textAlign: 'center' }}>
            Мы заботимся о здоровье наших четвероногих клиентов, 
            поэтому уборка происходит с использованием профессиональных дезинфекторов TH4, 
            а в каждом из залов стоят рециркуляторы, полностью безопасные для людей и животных.
          </Typography>
        </Box>

      </Paper>
    </Container>
  )
}
