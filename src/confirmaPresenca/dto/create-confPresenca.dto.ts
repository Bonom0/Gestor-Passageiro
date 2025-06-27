import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateConfPresencaDto {
  @IsString()
  passageiroId: string;

  @IsBoolean()
  @IsOptional()
  presenca?: boolean; // opcional na criação, padrão false
}
