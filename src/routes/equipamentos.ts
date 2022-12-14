/**
* 
* Arquivo: src/routes/equipamentos.ts
* Descrição: arquivo responsável pelas rotas relacionadas à entidade Equipamento
*
*/

import { Router } from "express";
import { CreateEquipamentoController } from "../controllers/equipamentos/CreateEquipamentoController";
import { GetAllEquipamentosController } from "../controllers/equipamentos/GetAllEquipamentosController";
import { GetEquipamentoByIdController } from "../controllers/equipamentos/GetEquipamentoByIdController";
import { UpdateEquipamentoController } from "../controllers/equipamentos/UpdateEquipamentoController";
import { DeleteEquipamentoController } from "../controllers/equipamentos/DeleteEquipamentoController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const equipamentoRouter = Router();

const createEquipamentoController = new CreateEquipamentoController();
const getAllEquipamentosController = new GetAllEquipamentosController();
const getEquipamentoByIdController = new GetEquipamentoByIdController();
const updateEquipamentoController = new UpdateEquipamentoController();
const deleteEquipamentoController = new DeleteEquipamentoController();
const authMiddleware = new AuthMiddleware();

// Rotas que não precisam de autenticação
equipamentoRouter.get('/equipamentos', getAllEquipamentosController.handle);
equipamentoRouter.get('/equipamentos/:id', getEquipamentoByIdController.handle);

// Rotas que precisam de autenticação
equipamentoRouter.post('/equipamentos',
    authMiddleware.handle,
    createEquipamentoController.handle
);

equipamentoRouter.put('/equipamentos',
    authMiddleware.handle,
    updateEquipamentoController.handle
);

equipamentoRouter.delete('/equipamentos',
    authMiddleware.handle,
    deleteEquipamentoController.handle
);

export { equipamentoRouter }