import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMotoristaDto } from './dto/create-motorista.dto';
import { UpdateMotoristaDto } from './dto/update-motorista.dto';
import { Motorista } from './entities/motorista.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MotoristaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(motorista: any): Motorista {
    //pega o obj do banco e faz um parse para o modelo do nest
    return {
      id: motorista.id,
      nome: motorista.nome,
      cpf: motorista.cpf,
      senha: motorista.senha,
      contato: motorista.contato,
      tipo: motorista.tipo,
      email: motorista.email,
    };
  }

  async create(createMotoristaDto: CreateMotoristaDto): Promise<Motorista> {
    const motorista = await this.prisma.motorista.create({
      data: {
        nome: createMotoristaDto.nome,
        cpf: createMotoristaDto.cpf,
        senha: createMotoristaDto.senha,
        contato: createMotoristaDto.contato,
        tipo: createMotoristaDto.tipo,
        email: createMotoristaDto.email,
      },
    });
    return this.mapToEntity(motorista);
  }

  async findAll(
    nome?: string,
    email?: string,
    sort: 'nome' | 'email' = 'nome',
    direction: 'asc' | 'desc' = 'asc',
  ): Promise<Motorista[]> {
    //faz a busca de todos os motoristas no banco de dados
    const motorista = await this.prisma.motorista.findMany({
      where: {
        ...(nome?.trim() && {
          nome: { contains: nome, mode: 'insensitive' },
        }),
        ...(email?.trim() && {
          email: { contains: email, mode: 'insensitive' },
        }),
      },
      orderBy: { [sort]: direction },
    }); //faz a busca de todos os objs no banco
    return motorista.map((motorista) => this.mapToEntity(motorista)); //map faz o parse do obj
  }

  async findOne(id: string): Promise<Motorista> {
    const motorista = await this.prisma.motorista.findUnique({
      where: { id },
    });

    if (!motorista) {
      throw new NotFoundException(`Motorista com ID${id} não encontrado`);
    }

    return this.mapToEntity(motorista);
  }

  async update(id: string, updateMotoristaDto: UpdateMotoristaDto) {
    const motorista = await this.prisma.motorista.update({
      where: { id },
      data: updateMotoristaDto,
    });
    return this.mapToEntity(motorista);
  }

  async remove(id: string): Promise<Motorista> {
    const motoristaExistente = await this.prisma.motorista.findUnique({
      where: { id },
    });

    if (!motoristaExistente) {
      throw new NotFoundException(`Motorista com ID ${id} não encontrado`);
    }

    const motoristaRemovido = await this.prisma.motorista.delete({
      where: { id },
    });

    return this.mapToEntity(motoristaRemovido);
  }
}
