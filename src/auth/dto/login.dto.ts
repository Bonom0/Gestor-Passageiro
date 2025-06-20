export class LoginDto {
  userType: 'Operador' | 'Motorista' | 'Passageiro';
  email: string;
  password: string;
}