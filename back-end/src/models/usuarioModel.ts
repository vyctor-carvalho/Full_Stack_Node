import { openDb } from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export class UsuarioModel {
  
  static async listarTodos() {
    const db = await openDb();
    return db.all('SELECT * FROM usuarios');
  }

  static async pegarPorId(id: string) {
    const db = await openDb();
    return db.all('SELECT * FROM usuarios WHERE id = ?', [id]);
  }

  static async criar(nome: string, email: string, senha: string) {
    const db = await openDb();
    await db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      id TEXT PRIMARY KEY,
      nome TEXT,
      email TEXT UNIQUE,
      senha TEXT
    )`);
    const id = uuidv4();
    const result = await db.run(`INSERT INTO usuarios (id, nome, email, senha) VALUES (?, ?, ?, ?)`, [id, nome, email, senha]);
    return { id: result.lastID, nome, email, senha };
  }

  static async deletar(id: string) {
    const db = await openDb();
    await db.run(`DELETE FROM usuarios WHERE id = ?`, [id]);
  }

  static async atualizar(id: string, nome: string, email: string, senha: string) {
    const db = await openDb();
    const alterado = await db.run(`UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?`, [nome, email, senha, id])
    return { id, nome, email, senha }
  }

}
