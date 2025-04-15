import '../estilizacao/loading.css'
import '../estilizacao/lista.css'
import React, {useState, useEffect} from 'react';
import { Usuario } from '../modelos/Usuario';
import { ServiceUsuario } from '../service/usuarioService'
import { useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
  

const Lista = () => {
    const [ value ] = useState<string>('vertical');
    const [ usuarios, setUsuarios] =  useState<Usuario[]>([]);
    const [ loading, setLoadind ] = useState(true);
    const navgate = useNavigate();


    useEffect(() => {
        carregandoDados();
    }, [])

    const carregandoDados = async () => {
        try {
            const dados = await ServiceUsuario.buscarUsuarios();
            setUsuarios(dados);
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
            <div>
                {usuarios.map((usuario, i) => (
                    <>
                        <div key={i} className={`usuario-item ${i % 2 === 0 ? 'par' : 'impar'}`}>
                            <strong className="usuario-nome">{usuario.nome}</strong><br />
                            <small className="usuario-email">{usuario.email}</small><br />
                            <p className="usuario-email">id: {usuario.id}</p>
                            <Button variant="contained" color="success" style={{margin: '5px'}} onClick={() => navgate('/atualizar')} >Atualizar</Button>
                            <Button variant="outlined" color="error" style={{margin: '5px'}} onClick={() => navgate('/delete')} >Deletar</Button>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};

export default Lista;