import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OperadorService } from './operador.service';
import { CreateOperadorDto } from './dto/create-operador.dto';
import { UpdateOperadorDto } from './dto/update-operador.dto';

@Controller('operador')
export class OperadorController {
  constructor(private readonly operadorService: OperadorService) {}

  @Post()
  create(@Body() createOperadorDto: CreateOperadorDto) {
    return this.operadorService.create(createOperadorDto);
  }

  @Get()
  findAll(
    @Query('nome') nome?: string,
    @Query('email') email?: string,
    @Query('sort') sort: 'nome' | 'email' = 'nome',
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.operadorService.findAll(nome, email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operadorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOperadorDto: UpdateOperadorDto,
  ) {
    return this.operadorService.update(id, updateOperadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operadorService.remove(id);
  }
}
