import { Equipamento } from '@prisma/client';
import { Factory } from './../models/factories/Factory';
import { AluguelRepository } from './../repositories/AluguelRepository';
import { EquipamentoRepository } from './../repositories/EquipamentoRepository';
import { UserRepository } from './../repositories/UserRepository';

const userRepository = UserRepository.getInstance()
const equipamentoRepository = new EquipamentoRepository()
const aluguelRepository = new AluguelRepository()
const factory = new Factory()

export class AluguelBusiness {
  async getAluguelLista(idUser: number) {
    const user = await userRepository.getUserById(idUser)

    if(user){
      const relUserEquipamentos = await aluguelRepository.getAllAlgueisByID(user.id)

      const idEquipamentos = relUserEquipamentos.map(el => el.equipamento_id)

      const equipamentos = await equipamentoRepository.getEquipamentos(idEquipamentos)

      return factory.createAluguel(user.nome, equipamentos)
    } 
  }

  async createAluguel(idUser: number, idEquipamento: number): Promise<Equipamento>{
    const user = await userRepository.getUserById(idUser)

    if(user){
      const equipamento = await equipamentoRepository.getEquipamento(idEquipamento)

      if(!equipamento)
        throw "Este equipamento nao existe, insira-o ou tente outro ID"

      await aluguelRepository.createNewAluguel(user.id, equipamento.id)

      return equipamento
    }
    throw "Voce precisa fornecer um usuário válido"
  }

  async deleteAluguel(idUser: number, idEquipamento: number){
    await aluguelRepository.deleteAluguel(idUser, idEquipamento)
  }
}