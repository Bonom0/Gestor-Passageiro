import { PartialType } from '@nestjs/mapped-types';
import { CreateOperadorDto } from './create-operador.dto';

export class UpdateOperadorDto extends PartialType(CreateOperadorDto) {}
