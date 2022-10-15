/**
* 
* Arquivo: src/routes/equipamentos.ts
* Descrição: arquivo responsável pelas rotas relacionadas à entidade Equipamento
*
*/

import { Router } from "express";
import { CreateEquipamentoController } from "../controllers/equipamentos/CreateEquipamentoController";
import { GetAllEquipamentosController } from "../controllers/equipamentos/GetAllEquipamentosController";

const equipamentoRouter = Router();

const createEquipamentoController = new CreateEquipamentoController();
const getAllEquipamentosController = new GetAllEquipamentosController();

equipamentoRouter.post('/equipamentos', createEquipamentoController.handle);
equipamentoRouter.get('/equipamentos', getAllEquipamentosController.handle);

export { equipamentoRouter }