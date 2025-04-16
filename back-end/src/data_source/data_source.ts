import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/User';
import path from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(__dirname, '../../database/dbase.sqlite'),
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});