import '../estilizacao/estiloForm.css'
import { ServiceUsuario } from '../service/usuarioService'
import { Input, Button, Form } from 'antd';



const postUsuarios = () => {
    const emviarDados = (values: any) => {
        console.log('Dados enviados:', values);
        ServiceUsuario.colocarUsuario(values);
    };



    return (  
        <Form layout="vertical" onFinish={emviarDados} style={estiloForm}>
            <Form.Item name="nome" label="Nome" rules={[{ required: true }]}>
                <Input placeholder="Digite o nome" autoFocus/>
            </Form.Item>
    
            <Form.Item name="email" label="E-mail" rules={[{ type: 'email', required: true }]}>
                <Input placeholder="Digite o e-mail" />
            </Form.Item>
    
            <Form.Item name="senha" label="Senha" rules={[{ required: true }]}>
                <Input.Password placeholder="Digite a senha" />
            </Form.Item>
    
            <Form.Item className='formBotao'>
                <Button type="primary" htmlType="submit">Atializar</Button>
            </Form.Item>
        </Form>
    )    
}

export default postUsuarios;



const estiloForm: React.CSSProperties = { 
    maxWidth: 550, 
    margin: '2rem auto', 
    padding: '2rem', 
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#e0d7ff'
}