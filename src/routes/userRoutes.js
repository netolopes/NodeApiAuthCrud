import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Descomentar se for usar SEED
// router.get('/:id', userController.show); // Lista usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update); // nao precisa setar ID, pois apos logado, usuario sera identificado pelo token
router.delete('/', loginRequired, userController.delete); // setar uma flag no sistema para ativar/destivar

export default router;
