import { Injectable } from '@nestjs/common';
import { PRODUCTS } from './products.constant';

@Injectable()
export class ProductService {
  findAll() {
    return PRODUCTS;
  }
}
