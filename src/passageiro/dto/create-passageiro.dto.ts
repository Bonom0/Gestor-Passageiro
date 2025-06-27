import { IsBoolean, IsString, IsDate, IsDateString } from 'class-validator';

//objeto que vai ser trafegado no payload das requisições

export class CreatePassageiroDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  senha: string;

  @IsString()
  cep: string;

  @IsString()
  rua: string;

  @IsString()
  contato: string;

  @IsDateString()
  horario_embarque: Date;

  @IsString()
  id_motorista: string;

  @IsBoolean()
  ativo: boolean;

  @IsDateString()
  dta_insert: Date;

  @IsString()
  tipo: string;

  @IsString()
  email: string;
}
