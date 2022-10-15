/**
 * 
 * Arquivo: server.js
 * Descrição: arquivo responsável por iniciar o servidor. 
 * 
 * Para inciá-lo, basta abrir a pasta raiz do projeto num terminal e digitar o comando "npm start"
 * 
 */

import express from 'express';

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
    console.log(`[SERVER] Servidor rodando na porta ${PORT}`);
});