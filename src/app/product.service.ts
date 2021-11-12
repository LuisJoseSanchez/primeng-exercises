import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/assets/data/products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS;

  constructor() { }

  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find(p => p.id === id);
  }
}
