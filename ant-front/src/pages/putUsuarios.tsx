import '../estilizacao/estiloForm.css'
import { Usuario } from '../modelos/Usuario';
import { ServiceUsuario } from '../service/usuarioService'
import { Input, Button, Form } from 'antd';



const PutUsuarios = () => {
    const [form] = Form.useForm();

    const atualizarDados = (values: Usuario) => {
        console.log('Dados enviados:', values);
        ServiceUsuario.atualizarUsuario(values);
    };

    const checar = async (e :React.FocusEvent<HTMLInputElement>)  => {
        const id = e.target.value.trim();
        if (!id) return;        
        try {
            const usuario = await ServiceUsuario.buscarPorId(id);
            if (usuario) {
                setTimeout(() => {
                    form.setFieldsValue({
                        id: usuario.id,
                        nome: usuario.nome,
                        email: usuario.email,
                        senha: usuario.senha
                    });
                }, 100);
                console.log('Usuário carregado com sucessocionando')
                console.log(usuario);
            } else {
                alert("Usuário não encontrado");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao buscar o usuário");
        }
    }

    return (  
        <Form form={form} layout="vertical" onFinish={atualizarDados} style={estiloForm}>
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                <Input placeholder="Digite o id"  onBlur={checar} />
            </Form.Item>

            <Form.Item name="nome" label="Nome"  rules={[{ required: true }]}>
                <Input placeholder="Digite o nome" />
            </Form.Item>
    
            <Form.Item name="email" label="E-mail" rules={[{ type: 'email', required: true }]}>
                <Input placeholder="Digite o e-mail" />
            </Form.Item>
    
            <Form.Item name="senha" label="Senha" rules={[{ required: true }]}>
                <Input.Password placeholder="Digite a senha" />
            </Form.Item>
    
            <Form.Item className='formBotao'>
                <Button type="primary" htmlType="submit">Cadastrar</Button>
            </Form.Item>
        </Form>
    )    
}

export default PutUsuarios;

const estiloForm: React.CSSProperties = { 
    maxWidth: 550, 
    margin: '2rem auto', 
    padding: '2rem', 
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#e0d7ff'
}