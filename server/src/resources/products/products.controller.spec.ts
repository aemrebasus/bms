import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../database/database.module';
import { ProductRepository } from './product.repository';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [ProductsController],
      providers: [ProductsService, ProductRepository],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', async () => {
    expect(controller).toBeDefined();
  });
});
