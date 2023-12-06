import { useState } from "react";
import Link from 'next/link';
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { clr } from "../../colors";

export default function ContactsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = () => setOpen(false);
  return(
    <>
      <Box sx={{ display: 'flex' }}>

        <Typography>Или письмом на нашу</Typography>
        <Box
          onClick={handleOpen}
          sx={{
            cursor: 'pointer',
            textDecoration: 'underline',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'inherit',
            color: clr.light,
            transition: 'all 0.3s',
            textShadow: `2px 2px 1px ${clr.dark}`,
            ml: 2,
            "&:hover": { 
              backgroundColor: 'inherit', 
              color: clr.groundPrimary,
              scale: '1.1',
            }
          }}
        >
          <EmailIcon sx={{ fontSize: ['24px', '24px', '38px', '38px'], mr: 1, color: clr.groundPrimary }}/>
          <Typography>электронную почту</Typography> 
        </Box>

      </Box>

      <Modal
        open={open}
        onClose={handleClose}
      >

        <Box 
          component='form'
          sx={{
            position: 'absolute',
            borderRadius: '15px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: clr.ground,
            width: 600,
            boxShadow: 24,
            p: 4,
          }}
        >

          <TextField 
            label='Ваш E-mail'
            helperText=' '
            variant='filled'
            fullWidth 
            sx={{
              mt: 1,
            }}
          />

          <TextField
            label='Сообщение'
            helperText=' '
            variant='outlined'
            fullWidth 
            multiline
            minRows={5}
            maxRows={15}
            sx={{
              mt: 1,
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button
              type='submit'
              variant='outlined'
            >
              Отправить
              </Button>
            <Button 
              type='button'
              onClick={handleClose}
              variant='contained'
            >
              Закрыть
            </Button>
          </Box>
        </Box>

      </Modal>
    </>
  )
}