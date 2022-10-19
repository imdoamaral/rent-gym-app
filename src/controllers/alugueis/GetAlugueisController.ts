import { UserRepository } from './../../repositories/UserRepository';
import { AluguelRepository } from './../../repositories/AluguelRepository';
import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()
const aluguelRepository: AluguelRepository = new AluguelRepository()
const userRepository: UserRepository = UserRepository.getInstance()

const aluguelBusiness = new AluguelBusiness(equipamentoRepository, aluguelRepository, userRepository)

export class GetAlugueisController {
  async handle(request: Request, response: Response){
    const { idUser } = request.params
    const alugueis = await aluguelBusiness.getAluguelLista(parseInt(idUser))

    return response.json(alugueis)
  }
}