import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ConfPresencaService } from './confPresenca.service';
import { CreateConfPresencaDto } from './dto/create-confPresenca.dto';
import { UpdateConfPresencaDto } from './dto/update-confPresenca.dto';

@Controller('confirma-presenca')
export class ConfPresencaController {
  constructor(private readonly service: ConfPresencaService) {}

  @Post()
  create(@Body() dto: CreateConfPresencaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateConfPresencaDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
