/**
 * 
 * Para importar e utilizar o módulo de conexão com o BD em qualquer arquivo, faça:
 * import { prismaClient } from "../../repositories/UserRepository.ts";
 * 
 */

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export { PrismaClient }