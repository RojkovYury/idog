import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Modal, Box, Button, TextField } from "@mui/material";
import { clr } from "../../colors";
import ContactsEmail from "./contacts-email";
// import { sendMail } from "@/hooks/messenger";

interface FormData {
  email: string;
  message: string;
}

const defaultValues = {
  email: '',
  message: '',
};

export default function ContactsModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    shouldFocusError: false,
  });

  const onSubmit = (formData: FormData) => {
    console.log(formData);
    // sendMail({email: formData.email, text: formData.message});
  };

  return(
    <>
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
                width: ['100px', '140px', '140px', '140px'], 
                height: ['50px', '70px', '70px', '70px'],
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
                width: ['100px', '140px', '140px', '140px'], 
                height: ['50px', '70px', '70px', '70px'],
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