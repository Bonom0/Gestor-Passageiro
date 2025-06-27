import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateConfPresencaDto } from './dto/create-confPresenca.dto';
import { UpdateConfPresencaDto } from './dto/update-confPresenca.dto';

@Injectable()
export class ConfPresencaService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateConfPresencaDto) {
    return this.prisma.confirmacaoPresenca.create({
      data: {
        passageiroId: dto.passageiroId,
        presenca: dto.presenca ?? false, // padrão false se não enviado
      },
    });
  }

  findAll() {
    return this.prisma.confirmacaoPresenca.findMany({
      include: { passageiro: true },
    });
  }

  findOne(id: string) {
    return this.prisma.confirmacaoPresenca.findUnique({
      where: { id },
      include: { passageiro: true },
    });
  }

  update(id: string, dto: UpdateConfPresencaDto) {
    return this.prisma.confirmacaoPresenca.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.confirmacaoPresenca.delete({
      where: { id },
    });
  }
}
