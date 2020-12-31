import { createRepository } from 'src/utils';
import { Product } from './entities/product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';
export const ProductRepository = createRepository(PRODUCT_REPOSITORY, Product);
