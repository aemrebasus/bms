import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../base-resource/base.service';
import { Product } from './entities/product.entity';
import { PRODUCT_REPOSITORY } from './product.repository';

@Injectable()
export class ProductsService extends BaseService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) public productRepository: typeof Product,
  ) {
    super(productRepository);
  }
}
