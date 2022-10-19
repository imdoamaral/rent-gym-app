export class Aparelho {
  id: number
  nome: string
  valor: number
  dimensoes: string
  peso_produto: number
  grupo_muscular: string
  categoria: string
  created_at: Date

  constructor(id: number = 0, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    this.id = id
    this.nome = nome
    this.valor = valor
    this.dimensoes = dimensoes
    this.peso_produto = peso_produto
    this.grupo_muscular = grupo_muscular
    this.categoria = categoria
    this.created_at = created_at
  }

  toString(): string {
    return `O valor desse aparelho é R$ ${this.valor}` 
  }
}

export class Esteira extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }
}

export class Eliptico extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }
}

export class Bicicleta extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }
}

export class Acessorio extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }
}

export class Musculacao extends Aparelho {
  constructor(id: number, nome: string, valor: number, dimensoes: string, grupo_muscular: string, peso_produto: number, categoria: string, created_at: Date){
    super(id, nome, valor, dimensoes, grupo_muscular, peso_produto, categoria, created_at)
  }
}