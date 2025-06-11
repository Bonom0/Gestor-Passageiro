-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_id_motorista_fkey" FOREIGN KEY ("id_motorista") REFERENCES "Motorista"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passageiro" ADD CONSTRAINT "Passageiro_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operador" ADD CONSTRAINT "Operador_empresa_fkey" FOREIGN KEY ("empresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operador" ADD CONSTRAINT "Operador_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
