/**
* 
* Arquivo: src/controllers/CreateUsuarioController.ts
* Descrição: arquivo responsável CRIAR um novo usuário
*
*/

import { Request, Response } from "express";
import { prismaClient } from "../../repositories/UserRepository";

export class CreateUsuarioController {

    async handle(request: Request, response: Response) {

        const { nome, email, password } = request.body;

        try {
            const usuario = await prismaClient.usuario.create({
                data: {
                    nome,
                    email,
                    password
                }
            });

            return response.json({
                id: usuario.id,
                nome
            });

        } catch (error:?) {
            console.error('Erro ao incluir o usuário.');

            return response.status(400).json({
                message: "Erro na inclusão do usuário.",
                error: error.message
            })
        }
    }
}