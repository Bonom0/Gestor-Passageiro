import { Injectable, UnauthorizedException } from "@nestjs/common";
import { OperadorService } from "src/operador/operador.service";
import { MotoristaService } from "src/motorista/motorista.service";
import { PassageiroService } from "src/passageiro/passageiro.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly operadorService: OperadorService,
    private readonly motoristaService: MotoristaService,
    private readonly passageiroService: PassageiroService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(
    userType: string,
    email: string,
    password: string,
  ): Promise<any> {
    let user;

    switch (userType) {
      case 'Operador':
        user = await this.operadorService.findByEmail(email);
        break;
      case 'Motorista':
        user = await this.motoristaService.findByEmail(email);
        break;
      case 'Passageiro':
        user = await this.passageiroService.findByEmail(email);
        break;
      default:
        throw new UnauthorizedException('Tipo de usuário inválido');
    }

    if (user && user.senha === password ) {
      const payload = { sub: user.id, email: user.email, userType };
      return this.jwtService.sign(payload);
    }

    throw new UnauthorizedException('E-mail ou senha inválidos');
  }
}