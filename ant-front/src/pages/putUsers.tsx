import '../estilizaton/formStyle.css'
import { User } from '../models/User';
import { ServiceUser } from '../service/ServiceUser'
import { Input, Button, Form } from 'antd';



const PutUser = () => {
    const [form] = Form.useForm();

    const dataUpdate = async (values: User) => {
        //console.log('Dados enviados:', values);
        try {
            await ServiceUser.updateUser(values);
            alert('Usuário atualizado com sucesso!');
          } catch (err) {
            console.error(err);
            alert('Erro ao atualizar o usuário');
          }
    };

    const checkId = async (e :React.FocusEvent<HTMLInputElement>)  => {
        const id = e.target.value.trim();
        if (!id) return;        
        try {
            const Users = await ServiceUser.findById(id);
            if (Users) {
                form.setFieldsValue({
                    id: Users.id,
                    name: Users.name,
                    email: Users.email,
                    password: Users.password
                  });
                //console.log('Usuário carregado com sucessocionando')
                //console.log(Users);
            } else {
                alert("Usuário não encontrado");
            }
        } catch (err) {
            console.error(err);
            alert("Erro ao buscar o usuário");
        }
    }

    return (  
        <Form form={form} layout="vertical" onFinish={dataUpdate} style={formStyle}>
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                <Input placeholder="Digite o id"  onBlur={checkId} />
            </Form.Item>

            <Form.Item name="name" label="Nome"  rules={[{ required: true }]}>
                <Input placeholder="Digite o nome" />
            </Form.Item>
    
            <Form.Item name="email" label="E-mail" rules={[{ type: 'email', required: true }]}>
                <Input placeholder="Digite o e-mail" />
            </Form.Item>
    
            <Form.Item name="password" label="Senha" rules={[{ required: true }]}>
                <Input.Password placeholder="Digite a senha" />
            </Form.Item>
    
            <Form.Item className='buttonForm'>
                <Button type="primary" htmlType="submit">Atualizar</Button>
            </Form.Item>
        </Form>
    )    
}

export default PutUser;

const formStyle: React.CSSProperties = { 
    maxWidth: 550, 
    margin: '2rem auto', 
    padding: '2rem', 
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#e0d7ff'
}