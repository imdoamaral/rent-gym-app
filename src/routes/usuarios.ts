/**
* 
* Arquivo: src/routes/usuarios.ts
* Descrição: arquivo responsável pelas rotas relacionadas à entidade Usuário
*
*/

import { Router } from 'express';
import { CreateUsuarioController } from '../controllers/usuario/CreateUsuarioController';
import { LoginUsuarioController } from '../controllers/usuario/LoginUsuarioController';
import { GetUsuarioIdByToken } from '../controllers/usuario/GetUsuarioIdByToken';
const usuarioRouter = Router();

const createUsuarioController = new CreateUsuarioController();
const loginUsuarioController = new LoginUsuarioController();
const getUsuarioIdByToken = new GetUsuarioIdByToken();

usuarioRouter.post('/usuarios', createUsuarioController.handle);
usuarioRouter.post('/usuarios/login', loginUsuarioController.handle);
usuarioRouter.get('/usuarios', getUsuarioIdByToken.handle);

export { usuarioRouter }