import { IsString } from 'class-validator';

//objeto que vai ser trafegado no payload das requisições

export class CreateMotoristaDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  senha: string;

  @IsString()
  contato: string;

  @IsString()
  tipo: string;

  @IsString()
  email: string;
}
