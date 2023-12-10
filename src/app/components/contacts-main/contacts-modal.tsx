import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Modal, Box, Button, TextField } from "@mui/material";
import { clr } from "../../colors";
import ContactsSnackbar from "./contacts-snackbar";
import ContactsEmail from "./contacts-email";

interface FormData {
  email: string;
  message: string;
}

const defaultValues = {
  email: '',
  message: '',
};

const TOKEN = '6788454938:AAG03quDNgHlf_DBZ5GljH4TmI27Lt3nVFs'
const CHAT_ID = '-1002067926393'
const URL_API =`https://api.telegram.org/bot${TOKEN}/sendMessage`

export default function ContactsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const handleCloseSnackbar = () => { setOpenSnackbar(false); };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: false,
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
    let message = `<strong>Сообщение с сайта</strong>\n`
    message +=`<strong>Отправитель: </strong> ${formData.email}\n`
    message +=`<strong>Текст сообщения: </strong> ${formData.message}`
    
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.warn(err)
    })
    .finally(() => {
      setOpen(false)
      reset()
      setOpenSnackbar(true)
    })
  };
  
  return(
    <>
      <ContactsSnackbar open={openSnackbar} onClose={handleCloseSnackbar} />

      <ContactsEmail handleOpen={handleOpen}/>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box 
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            position: 'absolute',
            borderRadius: '15px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: clr.light,
            width: ['70%', '70%', '600px', '600px'],
            boxShadow: 24,
            p: 4,
          }}
        >
          <TextField 
            label='Ваш E-mail'
            type="text"
            variant='filled'
            color="warning"
            fullWidth 
            error={!!errors.email}
            helperText={errors?.email?.message || ' '}
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Некорректный email адрес',
              },
            })}
            InputProps={{  }}
            InputLabelProps={{ 

             }}
            sx={{ 
              "& .MuiInputBase-root": {
                fontSize: ["24px", "30px", "30px", "30px"], 
              },
              "& .MuiFormLabel-root": {
                fontSize: ["20px", "24px", "24px", "24px"], 
              },
              "& .MuiFormHelperText-root": {
                fontSize: ["16px", "20px", "20px", "20px"],
              }
            }}
          />

          <TextField
            label='Сообщение'
            variant='filled'
            color="warning"
            fullWidth 
            multiline
            minRows={5}
            maxRows={15}
            error={!!errors.message}
            helperText={errors?.message?.message || ' '}
            {...register('message', {
              required: 'Сообщение обязательно',
            })}
            sx={{
              my: 1,
              "& .MuiInputBase-root": {
                fontSize: ["24px", "30px", "30px", "30px"], 
              },
              "& .MuiFormLabel-root": {
                fontSize: ["20px", "24px", "24px", "24px"], 
              },
              "& .MuiFormHelperText-root": {
                fontSize: ["16px", "20px", "20px", "20px"],
              }
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Button
              type='submit'
              variant='outlined'
              color="warning"
              sx={{ 
                width: ['100px', '160px', '160px', '160px'],  
                height: ['50px', '60px', '60px', '60px'],
                fontSize: ['20px', '32px', '32px', '32px'], 
              }}
            >
              Отправить
            </Button>
            <Button 
              type='button'
              onClick={handleClose}
              variant='contained'
              color="error"
              sx={{ 
                width: ['100px', '160px', '160px', '160px'], 
                height: ['50px', '60px', '60px', '60px'],
                fontSize: ['20px', '32px', '32px', '32px'], 
                color: clr.light 
              }}
            >
              Закрыть
            </Button>
          </Box>
        </Box>

      </Modal>
    </>
  )
}