import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

export class GetAlugueisController {
  async handle(request: Request, response: Response){
    const aluguelBusiness = new AluguelBusiness()
    const { idUser } = request.params
    const alugueis = await aluguelBusiness.getAluguelLista(parseInt(idUser))

    return response.json(alugueis)
  }
}