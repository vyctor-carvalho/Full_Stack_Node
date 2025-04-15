import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { ServiceUsuario } from '../service/usuarioService';
import { Usuario } from '../modelos/Usuario';

const PostUsuarios = () => {
  const [formData, setFormData] = useState<Usuario>({
    id: '',
    nome: '',
    email: '',
    senha: ''
  });

  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    senha: false
  });

  const pegarDados = (data: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = data.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: false
    }));
  };

  const validar = () => {
    const newErrors = {
      nome: formData.nome.trim() === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      senha: formData.senha.trim() === ''
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const enviarDados = (data: React.FormEvent) => {
    data.preventDefault();
    if (validar()) {
      console.log('Dados enviados:', formData);
      ServiceUsuario.colocarUsuario(formData);
    }
  };

  return (
    <Box component="form" onSubmit={enviarDados} style={estiloForm}>
      <Typography variant="h5" mb={2} color="white">Cadastro de Usuário</Typography>

      <TextField
        label="Nome"
        name="nome"
        value={formData.nome}
        onChange={pegarDados}
        error={errors.nome}
        helperText={errors.nome ? 'Nome é obrigatório' : ''}
        fullWidth
        margin="normal"
        autoFocus  
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <TextField
        label="E-mail"
        name="email"
        type="email"
        value={formData.email}
        onChange={pegarDados}
        error={errors.email}
        helperText={errors.email ? 'E-mail inválido' : ''}
        fullWidth
        margin="normal"
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <TextField
        label="Senha"
        name="senha"
        type="password"
        value={formData.senha}
        onChange={pegarDados}
        error={errors.senha}
        helperText={errors.senha ? 'Senha é obrigatória' : ''}
        fullWidth
        margin="normal"
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <Box className="formBotao" mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default PostUsuarios;

const estiloForm: React.CSSProperties = {
  maxWidth: 550,
  margin: '2rem auto',
  padding: '2rem',
  backgroundColor: '#1e1e2f',
  borderRadius: '16px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  color: '#ffffff'
};
