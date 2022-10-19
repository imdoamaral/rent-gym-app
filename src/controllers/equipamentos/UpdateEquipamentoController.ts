import { UserRepository } from './../../repositories/UserRepository';
import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { EquipamentoBusiness } from './../../business/EquipamentoBusiness';
/**
* 
* Arquivo: src/controllers/equipamentos/UpdateEquipamentoByIdController.ts
* Descrição: método responsável ATUALIZAR um Equipamento
*
*/

import { Request, Response } from "express";

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()
const userRepository: UserRepository = UserRepository.getInstance()

export class UpdateEquipamentoController {

    async handle(request: Request, response: Response) {
        const equipamentoBusiness = new EquipamentoBusiness(equipamentoRepository, userRepository)

        const equipamento = await equipamentoBusiness.updateEquipamento(request.body)

        return response.json(equipamento);
    }
}