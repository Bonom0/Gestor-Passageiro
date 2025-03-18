import { Injectable } from '@nestjs/common';
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
    };
  }

  create(createPassageiroDto: CreatePassageiroDto) {
    return 'This action adds a new passageiro';
  }

  async findAll(): Promise<Passageiro[]> {
    //faz a busca de todos os passageiros no banco de dados
    const passageiro = await this.prisma.passageiro.findMany(); //faz a busca de todos os objs no banco
    return passageiro.map((passageiro) => this.mapToEntity(passageiro)); //map faz o parse do obj
  }

  findOne(id: number) {
    return `This action returns a #${id} passageiro`;
  }

  update(id: number, updatePassageiroDto: UpdatePassageiroDto) {
    return `This action updates a #${id} passageiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} passageiro`;
  }
}
