import { DeleteAluguelController } from './../controllers/alugueis/DeleteAluguelController';
import { AuthMiddleware } from './../middlewares/AuthMiddleware';
import { CreateAluguelController } from './../controllers/alugueis/CreateAluguelController';
import { GetAlugueisController } from './../controllers/alugueis/GetAlugueisController';
import { Router } from 'express';
import { equipamentoRouter } from './equipamentos';

const aluguelRouter = Router()

const getAlugueisController = new GetAlugueisController()
const createAluguelController = new CreateAluguelController()
const deleteAluguelController = new DeleteAluguelController()
const authMiddleware = new AuthMiddleware();

equipamentoRouter.get(
  '/alugueis/:idUser', 
  authMiddleware.handle,
  getAlugueisController.handle
)
equipamentoRouter.post(
  '/alugueis', 
  authMiddleware.handle,
  createAluguelController.handle
)
equipamentoRouter.delete(
  '/alugueis',
  authMiddleware.handle,
  deleteAluguelController.handle
)

export { aluguelRouter }