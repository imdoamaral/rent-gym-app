import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export class GetUsuarioIdByToken {

    async handle(request: Request, response: Response) {

        try {
            const authorization = request.headers['authorization']!.split(' ');
            const token = authorization[1];

            const decodedToken = jwt.decode(token);

            return response.json(decodedToken);

        } catch (error) {
            return response.send(error);
        }
    }
}