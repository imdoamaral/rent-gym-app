import { Aluguel } from './../Aluguel';
import { Esteira, Eliptico, Bicicleta, Acessorio, Musculacao, Aparelho } from './../Aparelho';
import { Equipamento } from "@prisma/client"

interface AbstractFactory {
  createEsteira(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Esteira
  createEliptico(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Eliptico
  createBicicleta(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Bicicleta
  createAcessorio(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Acessorio
  createMusculacao(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Musculacao
  createEquipamento(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Aparelho
  createAluguel(userName: string, equipamentos: Equipamento[]): Aluguel
}

export class Factory implements AbstractFactory {
  public createEsteira(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Esteira {
    return new Esteira(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }

  public createEliptico(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Eliptico {
    return new Eliptico(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }

  public createBicicleta(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Bicicleta {
    return new Bicicleta(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }

  public createAcessorio(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Acessorio {
    return new Acessorio(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }

  public createMusculacao(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Musculacao {
    return new Musculacao(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }

  createEquipamento(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date): Aparelho {
    switch(categoria){
      case "esteira":
        return this.createEsteira(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
      case "eliptico":
        return this.createEliptico(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
      case "bicicleta":
        return this.createBicicleta(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
      case "acessorio":
        return this.createAcessorio(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
      case "musculacao":
        return this.createMusculacao(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
      default: return this.createEsteira(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
    }
  }

  createAluguel(userName: string, equipamentos: Equipamento[]): Aluguel{
    return new Aluguel(userName, equipamentos)
  }
}