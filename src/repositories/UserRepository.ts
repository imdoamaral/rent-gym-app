/**
 * 
 * Arquivo: src/repositories/UserRepository.ts
 * Descrição: arquivo responsável pela conexão da aplicação com o SQLite.
 *
 */


import { User } from "../models/User"
import prismaClient from "./PrismaClient"
export class UserRepository {
  private loggedUser: User | null = null
  private static instance: UserRepository | null = null

  private constructor(){

  }

  static getInstance() {
    if(UserRepository.instance != null)
      return UserRepository.instance
    
    return new UserRepository();
  }

  async login(email: string): Promise<User | null> {
    const response = await prismaClient.usuario.findUnique({
      where: {
          email: email
      }
    });

    const user = response ? new User(response.id, response.nome, response.email, response.password, response.created_at) : null

    this.setLoggedUser(user)

    return user
  }

  async getUserById(idUser: number): Promise<User | null>{
    const response = await prismaClient.usuario.findUnique({
      where: {
        id: idUser
      }
    })

    return response ? new User(response.id, response.nome, response.email, response.password, response.created_at) : null
  }

  async createUser(nome: string, email: string, senha: string): Promise<User>{
    const usuario = await prismaClient.usuario.create({
      data: {
        nome: nome,
        email: email,
        password: senha 
      }
    })

    return new User(usuario.id, usuario.nome, usuario.email, usuario.password, usuario.created_at)
  }

  private setLoggedUser(user: User | null) {
    console.log(user)
    this.loggedUser = user
  }

  getLoggedUser(): User | null {
    return this.loggedUser
  }


}