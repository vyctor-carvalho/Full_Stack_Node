import { Request, Response } from 'express';
import { UserRepository } from '../repository/UserRepository';

const repository = new UserRepository();

(async () => {
  await repository.initializer();
})();
 
export class UserController {

  static async listUsers(req: Request, res: Response) {
    const users = await repository.listAll();
    res.json(users);
  }

  static async getById(req: Request, res: Response) {
    const user = await repository.getById(req.params.id);
    res.json(user);
  }

  static async postUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const newUser = await repository.postUser(name, email, password);

    if (!newUser) return res.status(400).json(newUser);
    res.status(201).json(newUser);
  }

  static async deleteUser(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ erro: 'ID não fornecido' });
    }

    await repository.deleteUser(id);
    res.sendStatus(200);
  }

  static async putUser(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ erro: 'ID não fornecido' });
    }

    const { name, email, password } = req.body;

    const pustUser = await repository.updateUser(id, name, email, password);

    if (!pustUser) return res.status(400).json({ erro: "Falha ao fazer upload, verifique a requisição"})

    res.status(200).json(pustUser);
  }
}
