import { Snackbar, Alert } from '@mui/material';

interface TelegramSnackbarProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactsSnackbar({open, onClose}: TelegramSnackbarProps) {

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={4000}
    >
      <Alert
        severity='success'
        variant="filled"
        elevation={6}
        sx={{ 
          width: '100%',
          alignItems: 'center',
          fontSize: ['24px', '28px', '28px', '28px'], 
        }}
      >
        Ваше сообщение отправлено
      </Alert>
    </Snackbar>
  );
}