import { AppBar, Toolbar, Button, Box, Container, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Widgets';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import PostUser from './pages/postUser';
import GetUsers from './pages/getUsers';
import PutUser from './pages/putUser';
import DelUser from './pages/delUser';

export default function Layout() {
  const navigate = useNavigate();
  const [nav, setNav] = useState<null | HTMLElement>(null);

  const OpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNav(event.currentTarget);
  };

  const CloseMenu = () => {
    setNav(null);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            Front_end com Mui
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' , md: 'flex'} }}>
            <Button color="inherit" onClick={() => navigate('/')}>Cadastrar</Button>
            <Button color="inherit" onClick={() => navigate('/usuarios')}>Usuários</Button>
            <Button color="inherit" onClick={() => navigate('/atualizar')}>Atualizar</Button>
            <Button color="inherit" onClick={() => navigate('/delete')}>Deletar</Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'flex', sm: 'none', lg: 'none'} }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-expanded={Boolean(nav)}
              onClick={OpenMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={nav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(nav)}
              onClose={CloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={() => { navigate('/'); CloseMenu(); }}>Cadastrar</MenuItem>
              <MenuItem onClick={() => { navigate('/usuarios'); CloseMenu(); }}>Usuários</MenuItem>
              <MenuItem onClick={() => { navigate('/atualizar'); CloseMenu(); }}>Atualizar</MenuItem>
              <MenuItem onClick={() => { navigate('/delete'); CloseMenu(); }}>Deletar</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path='/' element={<PostUser />} />
          <Route path='/usuarios' element={<GetUsers />} />
          <Route path='/atualizar' element={<PutUser />} />
          <Route path='/delete' element={<DelUser />} />
        </Routes>
      </Container>
    </Box>
  );
}