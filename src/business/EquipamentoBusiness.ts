import { EquipamentoRepository } from './../repositories/EquipamentoRepository';

export class EquipamentoBusiness {
  private equipamentoRepository: EquipamentoRepository

  constructor(equipamentoRepository: EquipamentoRepository){
    this.equipamentoRepository = equipamentoRepository
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