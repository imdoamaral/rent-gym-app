import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/equipamentos/DeleteEquipamentoController.ts
* Descrição: método responsável DELETAR um Equipamento
*
*/

import { Request, Response } from "express";

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()

export class DeleteEquipamentoController {

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness(equipamentoRepository)
        const { id } = request.body;

        try {
            const equipamento = equipamentoBusiness.deleteEquipamento(id)

            return response.json(equipamento);

        } catch (error) {
            console.error(`[DeleteEquipamentoController] O ID ${id} não existe.`)
            
            return response.status(400).json({
                message: 'O ID não existe.'
            })
        }
    }
}