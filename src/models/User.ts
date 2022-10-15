export class User {
  id: number
  nome: string
  email: string
  senha: string
  data_criacao: Date

  constructor(id: number, nome: string, email: string, senha: string, data_criacao: Date){
    this.id = id
    this.nome = nome
    this.email = email
    this.senha = senha
    this.data_criacao = data_criacao
  }
}