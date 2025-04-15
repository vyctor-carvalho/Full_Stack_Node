import { Router } from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const router = Router();

router.get('/', UsuarioController.listarUsuarios);
router.get('/:id', UsuarioController.pegarPorid);
router.post('/', UsuarioController.criarUsuario);
router.delete('/:id', UsuarioController.deletarUsuario);
router.put('/:id', UsuarioController.atualizarUsuario);

export default router;
