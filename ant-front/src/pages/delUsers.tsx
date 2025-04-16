import '../estilizaton/formStyle.css'
import { User } from '../models/User';
import { ServiceUser } from '../service/ServiceUser'
import { Input, Button, Form } from 'antd';

const DeleteUser = () => {

    const deleteUserForm = (values: User) => {
        console.log(`Dados deletados ${values}`);
        ServiceUser.deleteUser(values.id);
        alert("Usuário deletado")
    } 

    return (
        <Form layout="vertical" onFinish={deleteUserForm} style={formStyle}>
            <Form.Item name="id" label="ID" rules={[{ required: true }]}>
                <Input placeholder="Digite o id"  />
            </Form.Item>

            <Form.Item className='buttonForm'>
                <Button type="primary" htmlType="submit">Deletar</Button>
            </Form.Item>
        </Form>
    )
} 

export default DeleteUser;



const formStyle: React.CSSProperties = { 
    maxWidth: 550, 
    margin: '2rem auto', 
    padding: '2rem', 
    backgroundColor: '#1e1e2f',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    color: '#e0d7ff'
}