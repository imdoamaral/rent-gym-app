/*
  Warnings:

  - Added the required column `categoria` to the `equipamentos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grupo_muscular` to the `equipamentos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_equipamentos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "grupo_muscular" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "dimensoes" TEXT NOT NULL,
    "peso_produto" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_equipamentos" ("created_at", "dimensoes", "id", "nome", "peso_produto", "valor") SELECT "created_at", "dimensoes", "id", "nome", "peso_produto", "valor" FROM "equipamentos";
DROP TABLE "equipamentos";
ALTER TABLE "new_equipamentos" RENAME TO "equipamentos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
