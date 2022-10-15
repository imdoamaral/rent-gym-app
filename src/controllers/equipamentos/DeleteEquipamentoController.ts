/**
* 
* Arquivo: src/controllers/CreateEquipamentoController.ts
* Descrição: arquivo responsável DELETAR um Equipamento
*
*/

import { Request, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

export class DeleteEquipamentoController {

    async handle(request: Request, response: Response) {

        const { id } = request.body;

        try {
            const equipamento = await prismaClient.equipamento.delete({
                where: {
                    id: id
                }
            });

            return response.json(equipamento);

        } catch (error) {
            console.error(`[DeleteEquipamentoController] O ID ${id} não existe.`)
            
            return response.status(400).json({
                message: 'O ID não existe.'
            })
        }
    }
}