import { UserRepository } from './../../repositories/UserRepository';
import { AluguelRepository } from './../../repositories/AluguelRepository';
import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()
const aluguelRepository: AluguelRepository = new AluguelRepository()
const userRepository: UserRepository = UserRepository.getInstance()

const aluguelBusiness = new AluguelBusiness(equipamentoRepository, aluguelRepository, userRepository)

export class DeleteAluguelController {
  async handle(request: Request, response: Response){
    const { idUser, idEquipamento } = request.body

    try{

      await aluguelBusiness.deleteAluguel(idUser, idEquipamento)

      return response.status(200).json({
        message: 'Alguel excluído com sucesso'
      })

    }catch(error){
      console.error(`[DeleteAluguelController] Algum ID informado é inválido`)

      return response.status(400).json({
        message: 'ID(s) fornecido(s) invalido(s)'
      })
    }

    

  }
}