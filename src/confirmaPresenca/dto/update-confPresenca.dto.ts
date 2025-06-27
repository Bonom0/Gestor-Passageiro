import { PartialType } from '@nestjs/mapped-types';
import { CreateConfPresencaDto } from './create-confPresenca.dto';

export class UpdateConfPresencaDto extends PartialType(CreateConfPresencaDto) {}
