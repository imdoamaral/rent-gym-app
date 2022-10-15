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

const equipamentoRouter = Router();

const createEquipamentoController = new CreateEquipamentoController();
const getAllEquipamentosController = new GetAllEquipamentosController();
const getEquipamentoByIdController = new GetEquipamentoByIdController();
const updateEquipamentoController = new UpdateEquipamentoController();
const deleteEquipamentoController = new DeleteEquipamentoController();

equipamentoRouter.post('/equipamentos', createEquipamentoController.handle);
equipamentoRouter.get('/equipamentos', getAllEquipamentosController.handle);
equipamentoRouter.get('/equipamentos/:id', getEquipamentoByIdController.handle);
equipamentoRouter.put('/equipamentos', updateEquipamentoController.handle);
equipamentoRouter.delete('/equipamentos', deleteEquipamentoController.handle);

export { equipamentoRouter }