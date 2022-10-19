import { Factory } from './../models/factories/Factory';
import { Equipamento } from "@prisma/client";
import prismaClient from "./PrismaClient"

const factory = new Factory()

export class EquipamentoRepository {

  async getEquipamento(id: number): Promise<Equipamento>{
    const response = await prismaClient.equipamento.findUnique({
      where: {
        id: id
      }
    })

    return response != null ? factory.createEquipamento(
      response.id, 
      response.nome, 
      response.valor,
      response.dimensoes,
      response.grupo_muscular,
      response.peso_produto,
      response.categoria,
      response.created_at
    )
    : factory.createEquipamento(0, "", 0, "", "", 0, "", new Date())
  }

  async getEquipamentos(ids: number[]): Promise<Equipamento[]> {
    const response = await prismaClient.equipamento.findMany({
      where: {
        id: { in: ids }
      }
    })

    return response.map(equip => factory.createEquipamento(equip.id, equip.nome, equip.valor, equip.dimensoes, equip.grupo_muscular, equip.peso_produto, equip.categoria, equip.created_at))
  }

  async createEquipamento(
    nome: string, 
    valor: number, 
    grupo_muscular: string,
    categoria: string,
    dimensoes: string,
    peso_produto: number
  ) {
    const response = await prismaClient.equipamento.create({
      data: {
        nome: nome,
        valor: valor,
        grupo_muscular: grupo_muscular,
        categoria: categoria,
        dimensoes: dimensoes,
        peso_produto: peso_produto
      }
    })

    return factory.createEquipamento(response.id, response.nome, response.valor, response. dimensoes, response.grupo_muscular, response.peso_produto, response. categoria, response.created_at)
  }

  async deleteEquipamento(id: number){
    const response = await prismaClient.equipamento.delete({
      where: {
        id: id
      }
    })

    return factory.createEquipamento(response.id, response.nome, response.valor, response. dimensoes, response.grupo_muscular, response.peso_produto, response. categoria, response.created_at)
  }

  async updateEquipamento(
    id: number,
    nome: string, 
    valor: number, 
    grupo_muscular: string,
    categoria: string,
    dimensoes: string,
    peso_produto: number
  ){
    const response = await prismaClient.equipamento.update({
      where: {
        id: id
      },
      data: {
        nome: nome,
        valor: valor,
        grupo_muscular: grupo_muscular,
        categoria: categoria,
        dimensoes: dimensoes,
        peso_produto: peso_produto
      }
    })

    return factory.createEquipamento(response.id, response.nome, response.valor, response. dimensoes, response.grupo_muscular, response.peso_produto, response. categoria, response.created_at)
  }

  async listAllEquipamentos(): Promise<Equipamento[]> {
    const equipamentos = await prismaClient.equipamento.findMany()
    return equipamentos
  }

}
