import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';

import PostUsuarios from './pages/postUsuarios';
import GetUsuarios from './pages/getUsuarios';
import PutUsuarios from './pages/putUsuarios';
import DelUsuarios from './pages/delUsuario';

export default function Layout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/usuarios')}>Usuários</Button>
          <Button color="inherit" onClick={() => navigate('/atualizar')}>Atualizar</Button>
          <Button color="inherit" onClick={() => navigate('/delete')}>Deletar</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path='/' element={<PostUsuarios />} />
          <Route path='/usuarios' element={<GetUsuarios />} />
          <Route path='/atualizar' element={<PutUsuarios />} />
          <Route path='/delete' element={<DelUsuarios />} />
        </Routes>
      </Container>
    </Box>
  );
}
