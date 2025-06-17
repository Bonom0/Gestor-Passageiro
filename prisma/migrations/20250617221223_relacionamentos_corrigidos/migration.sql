/*
  Warnings:

  - You are about to drop the column `empresa` on the `Operador` table. All the data in the column will be lost.
  - Added the required column `empresa_id` to the `Operador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Operador" DROP COLUMN "empresa",
ADD COLUMN     "empresa_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Operador" ADD CONSTRAINT "Operador_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
