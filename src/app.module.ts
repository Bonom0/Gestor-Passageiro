import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassageiroModule } from './passageiro/passageiro.module';

@Module({
  imports: [PassageiroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
