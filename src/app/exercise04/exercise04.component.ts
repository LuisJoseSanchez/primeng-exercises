import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-exercise04',
  templateUrl: './exercise04.component.html',
  styleUrls: ['./exercise04.component.scss']
})
export class Exercise04Component implements OnInit {

  products: Product[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
