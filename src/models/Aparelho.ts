class Aparelho {
  id?: number
  nome: string
  valor: number
  dimensoes: string
  peso_produto: number
  grupo_muscular: string

  constructor(id: number = 0, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number){
    this.id = id
    this.nome = nome
    this.valor = valor
    this.dimensoes = dimensoes
    this.peso_produto = peso_produto
    this.grupo_muscular = grupo_muscular
  }

  toString(): string{
    return ""
  }
}

class Esteira extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }

  toString(): string {
    return `O valor dessa esteira é R$ ${this.valor}` 
  }
}

class Halter extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }

  toString(): string {
    return `O valor desse halter é R$ ${this.valor}` 
  }
}

class BarraReta extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto)
  }

  toString(): string {
    return `O valor dessa barra reta é R$ ${this.valor}` 
  }
}