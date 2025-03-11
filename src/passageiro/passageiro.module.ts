import { Module } from '@nestjs/common';
import { PassageiroService } from './passageiro.service';
import { PassageiroController } from './passageiro.controller';

@Module({
  controllers: [PassageiroController],
  providers: [PassageiroService],
})
export class PassageiroModule {}
