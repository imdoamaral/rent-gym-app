/**
* 
* Arquivo: src/routes/equipamentos.ts
* Descrição: arquivo responsável pelas rotas relacionadas à entidade Equipamento
*
*/

import { Router } from "express";
import { CreateEquipamentoController } from "../controllers/equipamentos/CreateEquipamentoController";

const equipamentoRouter = Router();

const createEquipamentoController = new CreateEquipamentoController();

equipamentoRouter.post('/equipamentos', createEquipamentoController.handle);

export { equipamentoRouter }