// src/repositories/UserRepository.ts
import { AppDataSource } from '../data_source/data_source';
import { User } from '../entity/User';
import { Repository } from 'typeorm';

export class UserRepository {
  private repo!: Repository<User>;

  constructor() {}

  async initializer() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    this.repo = AppDataSource.getRepository(User);
  }

  async listAll() {
    return this.repo.find();
  }

  async getById(id: string) {
    return this.repo.findOneBy({ id });
  }

  async postUser(name: string, email: string, password: string) {
    if (!name || !email || !password) return null;
    const user = this.repo.create({ id: crypto.randomUUID(), name: name, email: email, password: password });
    return this.repo.save(user);
  }

  async deleteUser(id: string) {
    return this.repo.delete(id);
  }

  async updateUser(id: string, name: string, email: string, password: string) {

    if (!name || !email || !password) return null;
    
    const user = await this.repo.findOneBy({ id });

    if (!user) return null;

    user.name = name;
    user.email = email;
    user.password = password;

    return this.repo.save(user);
  }
}
