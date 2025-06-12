import { Test, TestingModule } from '@nestjs/testing';
import { OperadorController } from './operador.controller';
import { OperadorService } from './operador.service';

describe('OperadorController', () => {
  let controller: OperadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperadorController],
      providers: [OperadorService],
    }).compile();

    controller = module.get<OperadorController>(OperadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
