import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoUsuarioDto } from './create-tipousuario.dto';

export class UpdateTipoUsuarioDto extends PartialType(CreateTipoUsuarioDto) {}
