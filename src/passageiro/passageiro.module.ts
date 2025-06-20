import { Module } from '@nestjs/common';
import { PassageiroService } from './passageiro.service';
import { PassageiroController } from './passageiro.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [PassageiroController],
  providers: [PassageiroService, PrismaService],
  exports: [PassageiroService],
})
export class PassageiroModule {}
