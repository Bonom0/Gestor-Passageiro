-- CreateTable
CREATE TABLE "Passageiro" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "horario_embarque" TIMESTAMP(3) NOT NULL,
    "id_motorista" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "dta_insert" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Passageiro_pkey" PRIMARY KEY ("id")
);
