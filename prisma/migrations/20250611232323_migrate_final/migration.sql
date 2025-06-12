/*
  Warnings:

  - You are about to drop the column `tipo` on the `Motorista` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Operador` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `Passageiro` table. All the data in the column will be lost.
  - Added the required column `tipo_usuario_id` to the `Motorista` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_usuario_id` to the `Operador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_usuario_id` to the `Passageiro` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Operador" DROP CONSTRAINT "Operador_empresa_fkey";

-- DropForeignKey
ALTER TABLE "Operador" DROP CONSTRAINT "Operador_tipo_fkey";

-- DropForeignKey
ALTER TABLE "Passageiro" DROP CONSTRAINT "Passageiro_tipo_fkey";

-- AlterTable
ALTER TABLE "Motorista" DROP COLUMN "tipo",
ADD COLUMN     "tipo_usuario_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Operador" DROP COLUMN "tipo",
ADD COLUMN     "tipo_usuario_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Passageiro" DROP COLUMN "tipo",
ADD COLUMN     "tipo_usuario_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operador" ADD CONSTRAINT "Operador_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motorista" ADD CONSTRAINT "Motorista_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
