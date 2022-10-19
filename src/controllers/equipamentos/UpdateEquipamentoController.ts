import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/GetEquipamentoByIdController.ts
* Descrição: método responsável ATUALIZAR um Equipamento
*
*/

import { Request, Response } from "express";
import prismaClient from "../../repositories/PrismaClient";
export class UpdateEquipamentoController {

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness()

        const equipamento = await equipamentoBusiness.updateEquipamento(request.body)

        return response.json(equipamento);
    }
}