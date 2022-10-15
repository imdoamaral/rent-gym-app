/**
* 
* Arquivo: src/controllers/CreateEquipamentoController.ts
* Descrição: arquivo responsável CRIAR um novo Equipamento
*
*/

import { Request, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

export class CreateEquipamentoController {

    async handle(request : Request, response: Response) {

        const { nome,
            valor,
            grupo_muscular,
            categoria,
            dimensoes,
            peso_produto

        } = request.body;

        const equipamento = await prismaClient.equipamento.create({
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