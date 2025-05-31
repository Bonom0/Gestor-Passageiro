import { IsString } from 'class-validator';

//objeto que vai ser trafegado no payload das requisições

export class CreateTipoUsuarioDto {
  @IsString()
  descricao: string;
}
