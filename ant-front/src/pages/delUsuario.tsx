import '../estilizacao/estiloForm.css'
import { Usuario } from '../modelos/Usuario';
import { ServiceUsuario } from '../service/usuarioService'
import { Input, Button, Form } from 'antd';

const DelUsuarios = () => {

    const deletarUsuario = (values: Usuario) => {
        console.log(`Dados deletados ${values}`);
        ServiceUsuario.deletarUsuario(values.id);
    } 

    return (
        <Form layout="vertical" onFinish={deletarUsuario} style={estiloForm}>
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                <Input placeholder="Digite o id"  />
            </Form.Item>

            <Form.Item className='formBotao'>
                <Button type="primary" htmlType="submit">Deletar</Button>
            </Form.Item>
        </Form>
    )
} 

export default DelUsuarios;



const estiloForm: React.CSSProperties = { 
    maxWidth: 550, 
    margin: '2rem auto', 
    padding: '2rem', 
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#e0d7ff'
}