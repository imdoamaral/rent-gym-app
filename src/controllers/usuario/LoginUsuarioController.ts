/**
* 
* Arquivo: src/controllers/LoginUsuarioController.ts
* Descrição: método responsável LOGAR um usuário
*
*/

import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import { UserRepository } from '../../repositories/UserRepository';

export class LoginUsuarioController {

    async handle(request: Request, response: Response) {

        const userRepository = UserRepository.getInstance()
        const { email, password } = request.body;

        const usuario = await userRepository.login(email)

        if (!usuario) {
            return response.status(403).send({
                message: "Usuário e/ou senha inválidos"
            });
        }

        if (usuario.senha !== password) {
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