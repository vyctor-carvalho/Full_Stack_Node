import React, { useState } from 'react';
import { ServiceUsuario } from '../service/usuarioService';
import { Box, Button, TextField, Typography } from '@mui/material';


const DelUsuarios = () => {
  const [id, setId] = useState('');

  const deletarUsuario = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id.trim()) {
      alert('ID é obrigatório');
      return;
    }

    try {
      await ServiceUsuario.deletarUsuario(id);
      alert('Usuário deletado com sucesso');
    } catch (err) {
      console.error(err);
      alert('Erro ao deletar usuário');
    }
  };

  return (
    <Box component="form" onSubmit={deletarUsuario} style={estiloForm}>
      <Typography variant="h5" mb={2} color="white">Deletar Usuário</Typography>

      <TextField
        label="ID"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        error={!id.trim()}
        helperText={!id.trim() ? 'ID é obrigatório' : ''}
        fullWidth
        margin="normal"
        autoFocus  
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <Box className="formBotao" mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Deletar
        </Button>
      </Box>
    </Box>
  );
};

export default DelUsuarios;

const estiloForm: React.CSSProperties = {
    maxWidth: 550,
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
};
