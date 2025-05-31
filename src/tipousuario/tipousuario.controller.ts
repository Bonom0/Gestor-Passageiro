import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoUsuarioService } from './tipousuario.service';
import { CreateTipoUsuarioDto } from './dto/create-tipousuario.dto';
import { UpdateTipoUsuarioDto } from './dto/update-tipousuario.dto';

@Controller('tipousuario')
export class TipoUsuarioController {
  constructor(private readonly tipousuarioService: TipoUsuarioService) {}

  @Post()
  create(@Body() createTipoUsuarioDto: CreateTipoUsuarioDto) {
    return this.tipousuarioService.create(createTipoUsuarioDto);
  }

  @Get()
  findAll() {
    return this.tipousuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipousuarioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoUsuarioDto: UpdateTipoUsuarioDto,
  ) {
    return this.tipousuarioService.update(id, updateTipoUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipousuarioService.remove(id);
  }
}
