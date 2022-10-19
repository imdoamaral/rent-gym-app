import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/CreateEquipamentoController.ts
* Descrição: método responsável DELETAR um Equipamento
*
*/

import { Request, Response } from "express";
import prismaClient from '../../repositories/PrismaClient';

export class DeleteEquipamentoController {

  equipamentoRepository = new EquipamentoBusiness()

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness()
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