import { useState } from "react";
import { Modal, Box, Button, TextField, Input } from "@mui/material";
import { clr } from "../../colors";

export default function ContactsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = () => setOpen(false);
  return(
    <>
      <Button 
        onClick={handleOpen}
        variant="contained" 
        size='small' 
        sx={{ 
          fontWeight: '700', 
          backgroundColor: clr.secondary, 
          borderRadius: '25px', 
          mt: 1, 
          boxShadow: 'none', 
          color: clr.light, 
          height: '40px',
          "&:hover": { 
            backgroundColor: clr.primary, 
            color: clr.light 
          }
        }}
      > 
        Написать нам на электронную почту 
      </Button>

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