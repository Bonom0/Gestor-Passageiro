import { Module } from '@nestjs/common';
import { TipoUsuarioService } from './tipousuario.service';
import { TipoUsuarioController } from './tipousuario.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TipoUsuarioController],
  providers: [TipoUsuarioService, PrismaService],
})
export class TipoUsuarioModule {}
