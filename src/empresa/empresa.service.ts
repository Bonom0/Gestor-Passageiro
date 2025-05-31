import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(empresa: any): Empresa {
    //pega o obj do banco e faz um parse para o modelo do nest
    return {
      id: empresa.id,
      fantasia: empresa.fantasia,
      cnpj: empresa.cnpj
    };
  }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const empresa = await this.prisma.empresa.create({
      data: {
        fantasia: createEmpresaDto.fantasia,
        cnpj: createEmpresaDto.cnpj
      },
    });
    return this.mapToEntity(empresa);
  }

  async findAll(): Promise<Empresa[]> {
    //faz a busca de todas as empresas no banco de dados
    const empresa = await this.prisma.empresa.findMany(); //faz a busca de todos os objs no banco
    return empresa.map((empresa) => this.mapToEntity(empresa)); //map faz o parse do obj
  }

  async findOne(id: string): Promise<Empresa> {
    const empresa = await this.prisma.empresa.findUnique({
      where: { id },
    });

    if (!empresa) {
      throw new NotFoundException(`Empresa com ID${id} não encontrado`);
    }

    return this.mapToEntity(empresa);
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.prisma.empresa.update({
      where: { id },
      data: updateEmpresaDto,
    });
    return this.mapToEntity(empresa);
  }

  async remove(id: string): Promise<Empresa> {
    const empresaExistente = await this.prisma.empresa.findUnique({
      where: { id },
    });

    if (!empresaExistente) {
      throw new NotFoundException(`Empresa com ID ${id} não encontrado`);
    }

    const empresaRemovido = await this.prisma.empresa.delete({
      where: { id },
    });

    return this.mapToEntity(empresaRemovido);
  }
}
