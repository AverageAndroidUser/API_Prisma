/*
  Warnings:

  - Added the required column `TipoIEgreso` to the `CategoriaIEGreso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoriaIEGreso" ADD COLUMN     "TipoIEgreso" BOOLEAN NOT NULL;
