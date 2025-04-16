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

    const [errors, setErrors] = useState({
        id: false,
        nome: false,
        email: false,
        senha: false
    });

    const checar = async (e :React.FocusEvent<HTMLInputElement>)  => {
        const id = e.target.value.trim();
        if (!id) return;        
        try {
            const user = await ServiceUser.findById(id);
            //console.log('Resposta da API:', user);
            if (user) {
                setFormData({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                });
                //console.log('Usuário carregado com sucesso');
                //console.log(user);
            } else {
                alert("Usuário não encontrado");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao buscar o usuário");
        }
}

    const getData = (data: React.ChangeEvent<HTMLInputElement>) => {
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

    const validate = () => {
        const newErrors = {
            id: formData.id.trim() === '',
            nome: formData.name.trim() === '',
            email: !/\S+@\S+\.\S+/.test(formData.email),
            senha: formData.password.trim() === ''
        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };

    const enviarDados = (data: React.FormEvent) => {
        data.preventDefault();
        if (validate()) {
            console.log('Dados enviados:', formData);
            ServiceUser.updateUser(formData);
            alert("Usuário modificado")
        }
    };

    return (
        <Box component="form" onSubmit={enviarDados} style={estiloForm}>
            <Typography variant="h5" mb={2} color="white">Cadastro de Usuário</Typography>

            <TextField
                onBlur={checar}
                label="ID"
                name="id"
                value={formData.id}
                onChange={getData}
                error={errors.id}
                helperText={errors.id ? 'id é obrigatório' : ''}
                fullWidth
                margin="normal"
                autoFocus  
                InputLabelProps={{ style: { color: '#e0d7ff' } }}
                InputProps={{ style: { color: '#e0d7ff' } }}
            />

            <TextField
                label="Nome"
                name="name"
                value={formData.name}
                onChange={getData}
                error={errors.nome}
                helperText={errors.nome ? 'Nome é obrigatório' : ''}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#e0d7ff' } }}
                InputProps={{ style: { color: '#e0d7ff' } }}
            />

            <TextField
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={getData}
                error={errors.email}
                helperText={errors.email ? 'E-mail é inválido' : ''}
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
                onChange={getData}
                error={errors.senha}
                helperText={errors.senha ? 'Senha é obrigatória' : ''}
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#e0d7ff' } }}
                InputProps={{ style: { color: '#e0d7ff' } }}
            />

            <Box className="formBotao" mt={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button type="submit" variant="contained" color="primary">
                Atualizar
                </Button>
            </Box>
        </Box>
    );
};

export default PostUser;

const estiloForm: React.CSSProperties = {
    maxWidth: 550,
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#ffffff'
};
