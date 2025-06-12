import { Module } from '@nestjs/common';
import { OperadorService } from './operador.service';
import { OperadorController } from './operador.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [OperadorController],
  providers: [OperadorService, PrismaService],
})
export class OperadorModule {}
