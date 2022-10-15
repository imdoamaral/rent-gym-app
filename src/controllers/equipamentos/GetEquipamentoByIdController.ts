import { Request, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

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