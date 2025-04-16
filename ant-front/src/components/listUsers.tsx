import '../estilizaton/loading.css'
import '../estilizaton/list.css'
import React, {useState, useEffect} from 'react';
import { Flex, Button } from 'antd';
import { User } from '../models/User';
import { ServiceUser } from '../service/ServiceUser'
import { useNavigate} from 'react-router-dom'
  

const Lista: React.FC = () => {
    const [ value ] = useState<string>('vertical');
    const [ user, setUser] =  useState<User[]>([]);
    const [ loading, setLoadind ] = useState(true);
    const navgate = useNavigate();


    useEffect(() => {
        loadingData();
    }, [])

    const loadingData = async () => {
        try {
            const dados = await ServiceUser.findAllUsers();
            setUser(dados);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadind(false);
        }
    }

    if (loading) {
        return  ( 
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
      )
    
    }

    return (
        <>
            <Flex gap="middle" vertical>
                <Flex vertical={value === 'vertical'} className="users-list">
                {user.map((usuario, i) => (
                    <>
                        <li key={i} className={`user-item ${i % 2 === 0 ? 'even' : 'odd'}`}>
                            <strong className="user-name">{usuario.name}</strong><br />
                            <small className="user-p">{usuario.email}</small><br />
                            <p className="user-p">id: {usuario.id}</p>
                            <Button style={{backgroundColor: 'green', margin: '5px'}} onClick={() => navgate('/atualizar')} >Atualizar</Button>
                            <Button style={{backgroundColor: 'red', margin: '5px'}} onClick={() => navgate('/delete')} >Deletar</Button>
                        </li>
                    </>
                ))}
                </Flex>
            </Flex>
   
        </>
    );
};

export default Lista;