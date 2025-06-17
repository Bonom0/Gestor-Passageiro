import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { UpdateOperadorDto } from './dto/update-operador.dto';
import { Operador } from './entities/operador.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OperadorService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(operador: any): Operador {
    //pega o obj do banco e faz um parse para o modelo do nest
    return {
      id: operador.id,
      nome: operador.nome,
      email: operador.email,
      senha: operador.senha,
      empresa: operador.empresa,
      tipo: operador.tipo,
    };
  }

  async create(createOperadorDto: CreateOperadorDto): Promise<Operador> {
    const operador = await this.prisma.operador.create({
      data: {
        nome: createOperadorDto.nome,
        email: createOperadorDto.email,
        senha: createOperadorDto.senha,
        empresa: {
          connect: { id: createOperadorDto.empresa }, // <-- aqui o connect correto
        },
        tipo: {
          connect: {
            id: createOperadorDto.tipo,
          },
        },
      },
    });
    return this.mapToEntity(operador);
  }

  async findAll(
    nome?: string,
    email?: string,
    sort: 'nome' | 'email' = 'nome',
    direction: 'asc' | 'desc' = 'asc',
  ): Promise<Operador[]> {
    //faz a busca de todos os operadores no banco de dados
    const operador = await this.prisma.operador.findMany({
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
    return operador.map((operador) => this.mapToEntity(operador)); //map faz o parse do obj
  }

  async findOne(id: string): Promise<Operador> {
    const operador = await this.prisma.operador.findUnique({
      where: { id },
    });

    if (!operador) {
      throw new NotFoundException(`Operador com ID${id} não encontrado`);
    }

    return this.mapToEntity(operador);
  }

  async update(
    id: string,
    updateOperadorDto: UpdateOperadorDto,
  ): Promise<Operador> {
    const { tipo, empresa, ...restoDosCampos } = updateOperadorDto;

    const operador = await this.prisma.operador.update({
      where: { id },
      data: {
        ...restoDosCampos,
        ...(tipo && {
          tipo: {
            connect: { id: tipo },
          },
        }),
        ...(empresa && {
          empresa: {
            connect: { id: empresa },
          },
        }),
      },
    });
    return this.mapToEntity(operador);
  }

  async remove(id: string): Promise<Operador> {
    const operadorExistente = await this.prisma.operador.findUnique({
      where: { id },
    });

    if (!operadorExistente) {
      throw new NotFoundException(`Operador com ID ${id} não encontrado`);
    }

    const operadorRemovido = await this.prisma.operador.delete({
      where: { id },
    });

    return this.mapToEntity(operadorRemovido);
  }
}
