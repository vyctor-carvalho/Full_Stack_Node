import React, { useState } from 'react';
import { ServiceUser } from '../service/ServiceUser';
import { Box, Button, TextField, Typography } from '@mui/material';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');
  const [idError, setIdError] = useState(false);

  const handleDeleteUser = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId.trim()) {
      setIdError(true);
      return;
    }

    try {
      await ServiceUser.deleteUser(userId);
      alert('Usuário deletado com sucesso');
    } catch (error) {
      console.error(error);
      alert('Error ao deletar usuário');
    }
  };

  return (
    <Box component="form" onSubmit={handleDeleteUser} style={formStyle}>
      <Typography variant="h5" mb={2} color="white">Delete User</Typography>

      <TextField
        label="ID"
        name="userId"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
          setIdError(false);
        }}
        error={idError}
        helperText={idError ? 'ID é obrigatório' : ''}
        fullWidth
        margin="normal"
        autoFocus
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <Box className="formButton" mt={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="submit" variant="contained" color="primary">
          Deletar
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteUser;

const formStyle: React.CSSProperties = {
    maxWidth: 550,
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
};