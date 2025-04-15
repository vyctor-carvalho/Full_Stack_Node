import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate} from 'react-router-dom';import './estilizacao/App.css';

import PostUsuarios from './pages/postUsuarios';
import GetUsuarios from './pages/getUsuarios';
import PutUsuarios from './pages/putUsuarios';
import DelUsuarios from './pages/delUsuario';

const { Header, Content } = Layout;

function App() {

  const navigate = useNavigate();

  return (
  
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === '1') navigate('/');
            if (key === '2') navigate('/usuarios');
            if (key === '3') navigate('/atualizar');
            if (key === '4') navigate('/delete');
          }}
          items={[
            { key: '1', label: 'Home' },
            { key: '2', label: 'Usuários' },
            { key: '3', label: 'Atualizar'},
            { key: '4', label: 'Deletar'}
          ]}
        />
      </Header>

      <Content style={estiloContent}>
        <Routes>
          <Route path='/' element={<PostUsuarios />} />
          <Route path='/usuarios' element={<GetUsuarios />} />
          <Route path='/atualizar' element={<PutUsuarios />} />
          <Route path='/delete' element={<DelUsuarios />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;

const estiloContent: React.CSSProperties = { 
  padding: '24px',
  backgroundColor: '#1a1a2e', // tom roxo escuro
  color: '#e0d7ff', // roxo claro
  minHeight: '100vh',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease'
}
