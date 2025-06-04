import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassageiroModule } from './passageiro/passageiro.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TipoUsuarioModule } from './tipousuario/tipousuario.module';

@Module({
  imports: [PassageiroModule, EmpresaModule, TipoUsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
