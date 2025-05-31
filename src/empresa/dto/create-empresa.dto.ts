import { IsString } from 'class-validator';

//objeto que vai ser trafegado no payload das requisições

export class CreateEmpresaDto {
  @IsString()
  fantasia: string;
  
  @IsString()
  cnpj: string;
}
