import '../stylization/loading.css'
import '../stylization/lista.css'
import React, {useState, useEffect} from 'react';
import { User } from '../models/User';
import { ServiceUser } from '../service/ServiceUser'
import { useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';


const UserList = () => {
    const [ layoutDirection ] = useState<string>('vertical');
    const [ users, setUsers] =  useState<User[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await ServiceUser.findAllUsers();
            setUsers(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return  (
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
      )

    }

    return (
        <>
            <div>
                {users.map((user, index) => (
                    <>
                        <div key={index} className={`usuario-item ${index % 2 === 0 ? 'par' : 'impar'}`}>
                            <strong className="usuario-nome">{user.name}</strong><br />
                            <small className="usuario-email">{user.email}</small><br />
                            <p className="usuario-email">id: {user.id}</p>
                            <Button variant="contained" color="success" style={{margin: '5px'}} onClick={() => navigate('/atualizar')} >Atualizar</Button>
                            <Button variant="outlined" color="error" style={{margin: '5px'}} onClick={() => navigate('/delete')} >Deletar</Button>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default UserList;