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
import { PassageiroService } from './passageiro.service';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';

@Controller('passageiro')
export class PassageiroController {
  constructor(private readonly passageiroService: PassageiroService) {}

  @Post()
  create(@Body() createPassageiroDto: CreatePassageiroDto) {
    return this.passageiroService.create(createPassageiroDto);
  }

  @Get()
  findAll(
    @Query('nome') nome?: string,
    @Query('email') email?: string,
    @Query('sort') sort: 'nome' | 'email' = 'nome',
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.passageiroService.findAll(nome, email);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passageiroService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassageiroDto: UpdatePassageiroDto,
  ) {
    return this.passageiroService.update(id, updatePassageiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passageiroService.remove(id);
  }
}
