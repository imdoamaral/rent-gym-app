import { UserRepository } from './../../repositories/UserRepository';
import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/equipamentos/GetAllEquipamentosController.ts
* Descrição: método responsável LISTAR todos Equipamentos
*
*/

import { Request, Response } from "express";

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()
const userRepository: UserRepository = UserRepository.getInstance()

export class GetAllEquipamentosController {

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness(equipamentoRepository, userRepository)
        const equipamentos = await equipamentoBusiness.getAllEquipamentos()
        
        return response.json(equipamentos);
    }

}