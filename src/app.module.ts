import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassageiroModule } from './passageiro/passageiro.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TipoUsuarioModule } from './tipousuario/tipousuario.module';
import { OperadorModule } from './operador/operador.module';
import { MotoristaModule } from './motorista/motorista.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PassageiroModule,
    EmpresaModule,
    TipoUsuarioModule,
    OperadorModule,
    EmpresaModule,
    MotoristaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
