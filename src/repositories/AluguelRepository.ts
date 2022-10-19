import { Factory } from './../models/factories/Factory';
import prismaClient from "./PrismaClient";

const factory = new Factory()

export class AluguelRepository {
  async createNewAluguel(idUser: number, idEquipamento: number){
    await prismaClient.rel_equipamento_usuario.create({
      data: {
        usuario_id: idUser,
        equipamento_id: idEquipamento
      }
    })
  }

  async getAllAlgueisByID(idUser: number){
    const alugueis = await prismaClient.rel_equipamento_usuario.findMany({
      where: {
        usuario_id: idUser
      }
    })
    return alugueis
  }

  async insertNewAluguel(idUser: number, idEquipamento: number){
    await prismaClient.rel_equipamento_usuario.create({
      data: {
        usuario_id: idUser,
        equipamento_id: idEquipamento
      }
    })
  }

  async deleteAluguel(idUser: number, idEquipamento: number){
    const rel = await prismaClient.rel_equipamento_usuario.findFirst({
      where: {
        equipamento_id: idEquipamento,
        usuario_id: idUser
      }
    })

    if(!rel)
      throw "Não foi encontrado este aluguel"
    
    await prismaClient.rel_equipamento_usuario.delete({
      where: {
        id: rel.id
      }
    })
  }
}