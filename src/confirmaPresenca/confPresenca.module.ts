import { Module } from '@nestjs/common';
import { ConfPresencaService } from './confPresenca.service';
import { ConfPresencaController } from './confPresenca.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ConfPresencaController],
  providers: [ConfPresencaService, PrismaService],
})
export class ConfPresencaModule {}
