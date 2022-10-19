import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

const aluguelBusiness = new AluguelBusiness()

export class CreateAluguelController {
  async handle(request: Request, response: Response){
    const { idUser, idEquipamento } = request.body

    const res = await aluguelBusiness.createAluguel(idUser, idEquipamento)

    return response.json(`Voce alugou ${res.nome} por ${res.valor}`)
  }
}