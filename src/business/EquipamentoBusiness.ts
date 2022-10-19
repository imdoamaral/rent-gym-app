import { UserRepository } from './../repositories/UserRepository';
import { Factory } from './../models/factories/Factory';
import { EquipamentoRepository } from './../repositories/EquipamentoRepository';

export class EquipamentoBusiness {
  equipamentoRepository: EquipamentoRepository
  factory = new Factory()
  userRepository: UserRepository

  constructor(equipamentoRepository: EquipamentoRepository, userRepository: UserRepository){
    this.equipamentoRepository = equipamentoRepository
    this.userRepository = userRepository
  }

  getEquipamento(id: number){
    return this.equipamentoRepository.getEquipamento(id)
  }

  async getAllEquipamentos(){
    return await this.equipamentoRepository.listAllEquipamentos()
  }

  async createEquipamento(requestBody: any){
    const { nome, valor, grupo_muscular, categoria, dimensoes, peso_produto } = requestBody

    const equipamento = await this.equipamentoRepository.createEquipamento(nome, valor, grupo_muscular, categoria, dimensoes, peso_produto)
    return equipamento
  }

  async updateEquipamento(requestBody: any){
    const {
      id,
      nome, 
      valor, 
      grupo_muscular, 
      categoria, 
      dimensoes, 
      peso_produto,
    } = requestBody


    const equipamento = await this.equipamentoRepository.updateEquipamento(id, nome, valor, grupo_muscular, categoria, dimensoes, peso_produto)
    return equipamento
  }

  async deleteEquipamento(id: number){
    const equipamento = await this.equipamentoRepository.deleteEquipamento(id)
    return equipamento
  }
}