import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.listUsers);
router.get('/:id', UserController.getById);
router.post('/', UserController.postUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.putUser);

export default router;
