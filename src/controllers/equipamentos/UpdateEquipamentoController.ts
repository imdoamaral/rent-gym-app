/**
* 
* Arquivo: src/controllers/equipamentos/UpdateEquipamentoByIdController.ts
* Descrição: método responsável ATUALIZAR um Equipamento
*
*/

import { Request, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

export class UpdateEquipamentoController {

    async handle(request: Request, response: Response) {

        const { id, 
                nome,
                valor,
                grupo_muscular,
                categoria,
                dimensoes,
                peso_produto

        } = request.body;

        const equipamento = await prismaClient.equipamento.update({
            where: {
                id: id
            },
            data: {
                nome,
                valor,
                grupo_muscular,
                categoria,
                dimensoes,
                peso_produto
            }
        });

        return response.json(equipamento);
    }
}