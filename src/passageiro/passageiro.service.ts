import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';
import { Passageiro } from './entities/passageiro.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PassageiroService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(passageiro: any): Passageiro {
    //pega o obj do banco e faz um parse para o modelo do nest
    return {
      id: passageiro.id,
      nome: passageiro.nome,
      cpf: passageiro.cpf,
      senha: passageiro.senha,
      cep: passageiro.cep,
      rua: passageiro.rua,
      contato: passageiro.contato,
      horario_embarque: passageiro.horario_embarque,
      id_motorista: passageiro.id_motorista,
      ativo: passageiro.ativo,
      dta_insert: passageiro.dta_insert,
      tipo: passageiro.tipo,
      email: passageiro.email,
    };
  }

  async create(createPassageiroDto: CreatePassageiroDto): Promise<Passageiro> {
    const passageiro = await this.prisma.passageiro.create({
      data: {
        nome: createPassageiroDto.nome,
        cpf: createPassageiroDto.cpf,
        senha: createPassageiroDto.senha,
        cep: createPassageiroDto.cep,
        rua: createPassageiroDto.rua,
        contato: createPassageiroDto.contato,
        horario_embarque: new Date(createPassageiroDto.horario_embarque),
        dta_insert: new Date(),
        email: createPassageiroDto.email,
        tipo: {
          connect: {
            id: createPassageiroDto.tipo,
          },
        },
        motorista: {
          connect: {
            id: createPassageiroDto.id_motorista,
          },
        },
      },
    });

    return this.mapToEntity(passageiro);
  }

  async findAll(
    nome?: string,
    email?: string,
    sort: 'nome' | 'email' = 'nome',
    direction: 'asc' | 'desc' = 'asc',
  ): Promise<Passageiro[]> {
    //faz a busca de todos os passageiros no banco de dados
    const passageiro = await this.prisma.passageiro.findMany({
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
    return passageiro.map((passageiro) => this.mapToEntity(passageiro)); //map faz o parse do obj
  }

  async findOne(id: string): Promise<Passageiro> {
    const passageiro = await this.prisma.passageiro.findUnique({
      where: { id },
    });

    if (!passageiro) {
      throw new NotFoundException(`Passageiro com ID${id} não encontrado`);
    }

    return this.mapToEntity(passageiro);
  }

  async update(
    id: string,
    updatePassageiroDto: UpdatePassageiroDto,
  ): Promise<Passageiro> {
    const { tipo, id_motorista, ...restoDosCampos } = updatePassageiroDto;

    const passageiro = await this.prisma.passageiro.update({
      where: { id },
      data: {
        ...restoDosCampos,
        ...(tipo && {
          tipo: {
            connect: { id: tipo },
          },
        }),
        ...(id_motorista && {
          motorista: {
            connect: { id: id_motorista },
          },
        }),
      },
    });

    return this.mapToEntity(passageiro);
  }

  async remove(id: string): Promise<Passageiro> {
    const passageiroExistente = await this.prisma.passageiro.findUnique({
      where: { id },
    });

    if (!passageiroExistente) {
      throw new NotFoundException(`Passageiro com ID ${id} não encontrado`);
    }

    const passageiroRemovido = await this.prisma.passageiro.delete({
      where: { id },
    });

    return this.mapToEntity(passageiroRemovido);
  }

  async findByEmail(email: string): Promise<Passageiro | null> {
      const passageiro = await this.prisma.passageiro.findFirst({
        where: { email },
      })
  
      return passageiro ? this.mapToEntity(passageiro) : null;
    }
}
