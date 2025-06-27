import { IsString, IsUUID, IsEmail } from 'class-validator';

export class CreateMotoristaDto {
  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  senha: string;

  @IsString()
  contato: string;

  @IsEmail()
  email: string;

  @IsUUID()
  tipo_usuario_id: string;
}
