/**
* 
* Arquivo: src/repositories/UserRepository.ts
* Descrição: arquivo responsável pela conexão da aplicação com o SQLite.
*
*/

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export { prismaClient }