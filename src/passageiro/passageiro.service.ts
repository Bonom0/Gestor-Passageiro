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
        cep: createPassageiroDto.senha,
        rua: createPassageiroDto.rua,
        contato: createPassageiroDto.contato,
        horario_embarque: createPassageiroDto.horario_embarque,
        id_motorista: createPassageiroDto.id_motorista,
        ativo: createPassageiroDto.ativo,
        dta_insert: createPassageiroDto.dta_insert,
        tipo: createPassageiroDto.tipo,
        email: createPassageiroDto.email,
      },
    });
    return this.mapToEntity(passageiro);
  }

  async findAll(): Promise<Passageiro[]> {
    //faz a busca de todos os passageiros no banco de dados
    const passageiro = await this.prisma.passageiro.findMany(); //faz a busca de todos os objs no banco
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

  async update(id: string, updatePassageiroDto: UpdatePassageiroDto) {
    const passageiro = await this.prisma.passageiro.update({
      where: { id },
      data: updatePassageiroDto,
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
}
