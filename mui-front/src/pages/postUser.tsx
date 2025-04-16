import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { ServiceUser } from '../service/ServiceUser';
import { User } from '../models/User';

const PostUser = () => {
  const [formData, setFormData] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: ''
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    password: false
  });

  const inputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    setFieldErrors(prevErrors => ({
      ...prevErrors,
      [name]: false
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      password: formData.password.trim() === ''
    };

    setFieldErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Submitted data:', formData);
      ServiceUser.postUser(formData);
      alert("Usuário cadastrado")
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} style={formStyle}>
      <Typography variant="h5" mb={2} color="white">Create User</Typography>

      <TextField
        label="Nome"
        name="name"
        value={formData.name}
        onChange={inputData}
        error={fieldErrors.name}
        helperText={fieldErrors.name ? 'Nome é obrigatório' : ''}
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
        onChange={inputData}
        error={fieldErrors.email}
        helperText={fieldErrors.email ? 'E-mail invalido' : ''}
        fullWidth
        margin="normal"
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <TextField
        label="Senha"
        name="password"
        type="password"
        value={formData.password}
        onChange={inputData}
        error={fieldErrors.password}
        helperText={fieldErrors.password ? 'Senha é obrigatória' : ''}
        fullWidth
        margin="normal"
        InputLabelProps={{ style: { color: '#e0d7ff' } }}
        InputProps={{ style: { color: '#e0d7ff' } }}
      />

      <Box className="formButton" mt={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default PostUser;

const formStyle: React.CSSProperties = {
  maxWidth: 550,
  margin: '2rem auto',
  padding: '2rem',
  backgroundColor: '#1e1e2f',
  borderRadius: '16px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  color: '#ffffff'
};