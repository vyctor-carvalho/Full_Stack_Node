import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

export async function openDb() {
  const dbPath = path.resolve(__dirname, '../../database/dbase.sqlite');

  if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  }

  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, '');
  }

  return open({
    filename: dbPath,
    driver: sqlite3.Database
  });
}
