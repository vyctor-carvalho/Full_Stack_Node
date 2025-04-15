import axios from "axios";
import { useEffect } from "react";
import { Usuario } from "../modelos/Usuario";


export class ServiceUsuario {

    static async buscarUsuarios(): Promise<Usuario[]> {
        const usuariosResponse = await axios.get('http://localhost:3300/usuarios')
        return usuariosResponse.data;
    }

    static async buscarPorId(id: string): Promise<Usuario> {
        const usuario = await axios.get(`http://localhost:3300/usuarios/${id}`);
        return usuario.data[0];
    }

    static async colocarUsuario(usuario: Usuario) {
        await axios.post('http://localhost:3300/usuarios', usuario)
            .then(() => {
                alert("Usuário cadastrado")
                window.location.reload();
            })
            .catch(error => {
                console.error(error)
            })
        console.log(`usuario ${usuario.nome}`)
    }

    static async deletarUsuario(id: string) {
        await axios.delete(`http://localhost:3300/usuarios/${id}`)
            .then(() => {
                alert("Usuário deletado")
                window.location.reload();
            })
            .catch(error => {
                console.error(error)
            })
    }

    static async atualizarUsuario(usuario: Usuario) {
        await axios.put(`http://localhost:3300/usuarios/${usuario.id}`, usuario)
            .then(() => {
                alert("Usuário modificado")
                window.location.reload();
            })
            .catch(err => {
                console.error(err)
            })
    }
}

