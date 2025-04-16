import express from 'express';
import UsersRoutes from './routes/UsersRoutes';
import cors from 'cors'

const app = express();

// usado para permitir reuisiçoes de qualquer domínio, bom para testes, que é o meu caso
app.use(cors());

/* pode usar para permitir requisiçoes de um domínio apenas, bom para garantir maior segurança
app.use(cors({
  origin: "http://localhost:3000"
}))
*/

app.use(express.json());
app.use('/usuarios', UsersRoutes);

export default app;
