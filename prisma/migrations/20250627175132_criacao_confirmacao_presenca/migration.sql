-- CreateTable
CREATE TABLE "ConfirmacaoPresenca" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "passageiroId" TEXT NOT NULL,

    CONSTRAINT "ConfirmacaoPresenca_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ConfirmacaoPresenca" ADD CONSTRAINT "ConfirmacaoPresenca_passageiroId_fkey" FOREIGN KEY ("passageiroId") REFERENCES "Passageiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
