import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum UserType {
  Operador = 'Operador',
  Motorista = 'Motorista',
  Passageiro = 'Passageiro',
}

export class LoginDto {
  @IsEnum(UserType, { message: 'Tipo de usuário inválido' })
  userType: UserType;

  @IsNotEmpty({ message: 'Email é obrigatório' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsString()
  password: string;
}
