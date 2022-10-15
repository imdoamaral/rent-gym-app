import { Request, response, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

export class GetAllEquipamentosController {

    async handle(request: Request, response: Response) {

        const equipamentos = await prismaClient.equipamento.findMany();
        
        return response.json(equipamentos);
    }

}