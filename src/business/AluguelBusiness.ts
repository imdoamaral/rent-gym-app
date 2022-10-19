import { Equipamento } from '@prisma/client';
import { Factory } from './../models/factories/Factory';
import { AluguelRepository } from './../repositories/AluguelRepository';
import { EquipamentoRepository } from './../repositories/EquipamentoRepository';
import { UserRepository } from './../repositories/UserRepository';

const factory = new Factory()

export class AluguelBusiness {

  private equipamentoRepository: EquipamentoRepository
  private aluguelRepository: AluguelRepository
  private userRepository: UserRepository

  constructor(equipamentoRepository: EquipamentoRepository, aluguelRepository: AluguelRepository, userRepository: UserRepository){
    this.equipamentoRepository = equipamentoRepository
    this.aluguelRepository = aluguelRepository
    this.userRepository = userRepository
  }

  async getAluguelLista(idUser: number) {
    const user = await this.userRepository.getUserById(idUser)

    if(user){
      const relUserEquipamentos = await this.aluguelRepository.getAllAlgueisByID(user.id)

      const idEquipamentos = relUserEquipamentos.map(el => el.equipamento_id)

      const equipamentos = await this.equipamentoRepository.getEquipamentos(idEquipamentos)

      return factory.createAluguel(user.nome, equipamentos)
    } 
  }

  async createAluguel(idUser: number, idEquipamento: number): Promise<Equipamento>{
    const user = await this.userRepository.getUserById(idUser)

    if(user){
      const equipamento = await this.equipamentoRepository.getEquipamento(idEquipamento)

      if(!equipamento)
        throw "Este equipamento nao existe, insira-o ou tente outro ID"

      await this.aluguelRepository.createNewAluguel(user.id, equipamento.id)

      return equipamento
    }
    throw "Voce precisa fornecer um usuário válido"
  }

  async deleteAluguel(idUser: number, idEquipamento: number){
    await this.aluguelRepository.deleteAluguel(idUser, idEquipamento)
  }
}