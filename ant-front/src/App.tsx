import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate} from 'react-router-dom';
import './estilizaton/App.css';

import PostUsers from './pages/postUsers';
import GetUsers from './pages/getUsers';
import PutUsers from './pages/putUsers';
import DelUsers from './pages/delUsers';

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
            { key: '1', label: 'Cadastro' },
            { key: '2', label: 'Usuários' },
            { key: '3', label: 'Atualizar'},
            { key: '4', label: 'Deletar'}
          ]}
        />
      </Header>

      <Content style={estiloContent}>
        <Routes>
          <Route path='/' element={<PostUsers />} />
          <Route path='/usuarios' element={<GetUsers />} />
          <Route path='/atualizar' element={<PutUsers />} />
          <Route path='/delete' element={<DelUsers />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;

const estiloContent: React.CSSProperties = { 
  padding: '24px',
  backgroundColor: '#1a1a2e',
  color: '#e0d7ff',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  transition: 'background-color 0.3s ease, color 0.3s ease'
}
