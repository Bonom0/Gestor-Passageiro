import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';

@Injectable()
export class MotoristaService {
  constructor(private prisma: PrismaService) {}

  async create(createMotoristaDto: CreateMotoristaDto) {
    const motorista = await this.prisma.motorista.create({
      data: {
        nome: createMotoristaDto.nome,
        cpf: createMotoristaDto.cpf,
        senha: createMotoristaDto.senha,
        contato: createMotoristaDto.contato,
        email: createMotoristaDto.email,
        tipo: {
          connect: {
            id: createMotoristaDto.tipo_usuario_id,
          },
        },
      },
    });

    return motorista;
  }

  async findAll(nome?: string, email?: string) {
    const where: any = {};
    if (nome) where.nome = { contains: nome, mode: 'insensitive' };
    if (email) where.email = { contains: email, mode: 'insensitive' };
    return this.prisma.motorista.findMany({
      where,
      include: {
        tipo: true,
      },
    });
  }

  async findOne(id: string) {
    const motorista = await this.prisma.motorista.findUnique({
      where: { id },
      include: {
        tipo: true,
      },
    });

    if (!motorista) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
    }

    return motorista;
  }

  async update(id: string, updateMotoristaDto: UpdateMotoristaDto) {
    const { tipo_usuario_id, ...dadosRestantes } = updateMotoristaDto;

    const motorista = await this.prisma.motorista.update({
      where: { id },
      data: {
        ...dadosRestantes,
        ...(tipo_usuario_id && {
          tipo: {
            connect: { id: tipo_usuario_id },
          },
        }),
      },
    });

    return motorista;
  }

  async remove(id: string) {
    const motoristaExistente = await this.prisma.motorista.findUnique({
      where: { id },
    });

    if (!motoristaExistente) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
    }

    return this.prisma.motorista.delete({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.motorista.findUnique({
      where: { email },
      include: { tipo: true },
    });
  }

  async countAll() {
    return this.prisma.motorista.count();
  }
}
