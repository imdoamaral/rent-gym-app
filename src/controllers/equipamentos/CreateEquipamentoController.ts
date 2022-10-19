/**
* 
* Arquivo: src/controllers/equipamentos/CreateEquipamentoController.ts
* Descrição: método responsável CRIAR um novo Equipamento
*
*/

import { Request, Response } from "express";
import { EquipamentoBusiness } from "../../business/EquipamentoBusiness";

export class CreateEquipamentoController {
    async handle(request : Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness()
        const equipamento = await equipamentoBusiness.createEquipamento(request.body)

        return response.json(equipamento);
    }
}