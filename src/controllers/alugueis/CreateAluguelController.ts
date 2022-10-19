import { UserRepository } from './../../repositories/UserRepository';
import { AluguelRepository } from './../../repositories/AluguelRepository';
import { EquipamentoRepository } from './../../repositories/EquipamentoRepository';
import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

const equipamentoRepository: EquipamentoRepository = new EquipamentoRepository()
const aluguelRepository: AluguelRepository = new AluguelRepository()
const userRepository: UserRepository = UserRepository.getInstance()

const aluguelBusiness = new AluguelBusiness(equipamentoRepository, aluguelRepository, userRepository)

export class CreateAluguelController {
  async handle(request: Request, response: Response){
    const { idUser, idEquipamento } = request.body

    const res = await aluguelBusiness.createAluguel(idUser, idEquipamento)

    return response.json(`Voce alugou ${res.nome} por ${res.valor}`)
  }
}