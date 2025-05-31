import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipoUsuarioDto } from './dto/create-tipousuario.dto';
import { UpdateTipoUsuarioDto } from './dto/update-tipousuario.dto';
import { TipoUsuario } from './entities/tipousuario.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TipoUsuarioService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(tipousuario: any): TipoUsuario {
    //pega o obj do banco e faz um parse para o modelo do nest
    return {
      id: tipousuario.id,
      descricao: tipousuario.descricao
    };
  }

  async create(createTipoUsuarioDto: CreateTipoUsuarioDto): Promise<TipoUsuario> {
    const tipousuario = await this.prisma.tipousuario.create({
      data: {
        descricao: createTipoUsuarioDto.descricao
      },
    });
    return this.mapToEntity(tipousuario);
  }

  async findAll(): Promise<TipoUsuario[]> {
    //faz a busca de todas os tipos de usuário no banco de dados
    const tipousuario = await this.prisma.tipousuario.findMany(); //faz a busca de todos os objs no banco
    return tipousuario.map((tipousuario) => this.mapToEntity(tipousuario)); //map faz o parse do obj
  }

  async findOne(id: string): Promise<TipoUsuario> {
    const tipousuario = await this.prisma.tipousuario.findUnique({
      where: { id },
    });

    if (!tipousuario) {
      throw new NotFoundException(`Tipo de usuário com ID${id} não encontrado`);
    }

    return this.mapToEntity(tipousuario);
  }

  async update(id: string, updateTipoUsuarioDto: UpdateTipoUsuarioDto) {
    const tipousuario = await this.prisma.tipousuario.update({
      where: { id },
      data: updateTipoUsuarioDto,
    });
    return this.mapToEntity(tipousuario);
  }

  async remove(id: string): Promise<TipoUsuario> {
    const tipousuarioExistente = await this.prisma.tipousuario.findUnique({
      where: { id },
    });

    if (!tipousuarioExistente) {
      throw new NotFoundException(`Tipo de usuário com ID ${id} não encontrado`);
    }

    const tipousuarioRemovido = await this.prisma.tipousuario.delete({
      where: { id },
    });

    return this.mapToEntity(tipousuarioRemovido);
  }
}
