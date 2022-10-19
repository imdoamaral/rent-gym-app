import { UserRepository } from './../../repositories/UserRepository';
import { Request, Response } from "express";
/**
* 
* Arquivo: src/controllers/usuario/CreateUsuarioController.ts
* Descrição: método responsável CRIAR um novo usuário no Banco de Dados
*
*/


export class CreateUsuarioController {

    async handle(request: Request, response: Response) {

        const userRepository = UserRepository.getInstance()
        const { nome, email, password } = request.body;

        try {
            const usuario = await userRepository.createUser(nome, email, password)

            return response.json({
                id: usuario.id,
                nome
            });

        } catch (error:?) {
            console.error('Erro ao incluir o usuário.');

            return response.status(400).json({
                message: "Erro na inclusão do usuário.",
                error: error.message
            });
        }
    }
}