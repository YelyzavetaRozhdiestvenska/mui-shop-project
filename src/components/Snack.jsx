import { Snackbar, Alert } from '@mui/material';
import React from 'react';

function Snack({ isOpen, handleClose }) {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert severity="success">Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
}

export default Snack;
