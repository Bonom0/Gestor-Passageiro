import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { MotoristaModule } from '../motorista/motorista.module';
import { PassageiroModule } from '../passageiro/passageiro.module';

@Module({
  imports: [MotoristaModule, PassageiroModule],
  controllers: [DashboardController],
})
export class DashboardModule {}
