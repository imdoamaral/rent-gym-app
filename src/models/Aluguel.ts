import { Equipamento } from '@prisma/client';

export class Aluguel {
  userName: string
  equipamentos: Equipamento[]

  constructor(userName: string, equipamentos: Equipamento[]){
    this.userName = userName
    this.equipamentos = equipamentos
  }
}