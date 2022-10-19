import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/GetAllEquipamentosController.ts
* Descrição: método responsável LISTAR todos Equipamentos
*
*/

import { Request, Response } from "express";
import prismaClient from "../../repositories/PrismaClient";

export class GetAllEquipamentosController {

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness()
        const equipamentos = await equipamentoBusiness.getAllEquipamentos()
        
        return response.json(equipamentos);
    }

}