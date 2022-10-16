/**
* 
* Arquivo: src/controllers/LoginUsuarioController.ts
* Descrição: método responsável LOGAR um usuário
*
*/

import { prismaClient } from "../../repositories/UserRepository";
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";

export class LoginUsuarioController {

    async handle(request: Request, response: Response) {

        const { email, password } = request.body;

        const usuario = await prismaClient.usuario.findUnique({
            where: {
                email: email
            }
        });

        if (!usuario) {
            return response.status(403).send({
                message: "Usuário e/ou senha inválidos"
            });
        }

        if (usuario.password !== password) {
            return response.status(403).send({
                message: "Usuário e/ou senha inválidos"
            });
        }

        // JWT - Token
        const data = {
            id: usuario.id,
            email,
            loginDate: Date()
        }
        
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY!, { expiresIn: '1h' });

        response.send({
            nome: usuario.nome,
            token,
            header: process.env.JWT_HEADER_KEY
        });
    }
}