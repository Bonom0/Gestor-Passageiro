import { IsString } from 'class-validator';

//objeto que vai ser trafegado no payload das requisições

export class CreateOperadorDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  senha: string;

  @IsString()
  empresa: string;

  @IsString()
  tipo: string;
}
