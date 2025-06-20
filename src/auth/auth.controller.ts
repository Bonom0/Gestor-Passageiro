import { Controller, Post, Body, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    try {
      const token = await this.authService.validateUser(
        loginDto.userType,
        loginDto.email,
        loginDto.password,
      );

      return { access_token: token };
    } catch (error) {
      throw new UnauthorizedException(error.message || "E-mail ou senha inválidos",)
    }
  }
}