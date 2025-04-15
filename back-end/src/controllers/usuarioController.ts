import { Request, Response } from 'express';
import { UsuarioModel } from '../models/usuarioModel';
 
export class UsuarioController {

  static async listarUsuarios(req: Request, res: Response) {
    const usuarios = await UsuarioModel.listarTodos();
    res.json(usuarios);
  }

  static async pegarPorid(req: Request, res: Response) {
    const usuario = await UsuarioModel.pegarPorId(req.params.id);
    res.json(usuario);
  }

  static async criarUsuario(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    const novoUsuario = await UsuarioModel.criar(nome, email, senha);
    res.status(201).json(novoUsuario);
  }

  static async deletarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ erro: 'ID não fornecido' });
    }
    await UsuarioModel.deletar(id);
    res.sendStatus(200);
  }

  static async atualizarUsuario(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, email, senha } = req.body;
    const usuarioAtualizado = await UsuarioModel.atualizar(id, nome, email, senha);
    res.status(200).json(usuarioAtualizado);
  }
}
