/**
* 
* Arquivo: src/controllers/equipamentos/GetEquipamentoByIdController.ts
* Descrição: método responsável LISTAR 1 (um) Equipamento pelo seu ID
*
*/

import { Request, Response } from "express";
import prismaClient from "../../repositories/PrismaClient";

export class GetEquipamentoByIdController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const equipamento = await prismaClient.equipamento.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(equipamento);
    }
}