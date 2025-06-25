import { Controller, Get } from '@nestjs/common';
import { MotoristaService } from '../motorista/motorista.service';
import { PassageiroService } from '../passageiro/passageiro.service';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly motoristaService: MotoristaService,
    private readonly passageiroService: PassageiroService,
  ) {}

  @Get('resumo')
  async getResumo() {
    const totalMotoristas = await this.motoristaService.countAll();
    const totalPassageiros = await this.passageiroService.countAll();

    return {
      totalMotoristas,
      totalPassageiros,
    };
  }
}
