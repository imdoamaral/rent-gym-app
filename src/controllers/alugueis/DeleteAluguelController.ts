import { AluguelBusiness } from './../../business/AluguelBusiness';
import { Request, Response } from 'express';

const aluguelBusiness = new AluguelBusiness()

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