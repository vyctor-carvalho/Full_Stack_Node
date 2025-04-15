import '../estilizacao/loading.css'
import '../estilizacao/lista.css'
import React, {useState, useEffect} from 'react';
import { Flex, Button } from 'antd';
import { Usuario } from '../modelos/Usuario';
import { ServiceUsuario } from '../service/usuarioService'
import { useNavigate} from 'react-router-dom'
  

const Lista: React.FC = () => {
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
            <Flex gap="middle" vertical>
                <Flex vertical={value === 'vertical'} className="usuarios-lista">
                {usuarios.map((usuario, i) => (
                    <>
                        <li key={i} className={`usuario-item ${i % 2 === 0 ? 'par' : 'impar'}`}>
                            <strong className="usuario-nome">{usuario.nome}</strong><br />
                            <small className="usuario-email">{usuario.email}</small><br />
                            <p className="usuario-email">id: {usuario.id}</p>
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