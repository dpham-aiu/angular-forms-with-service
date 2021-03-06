import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productInfo: Product[];
  flag: boolean = false;
  msg: string = 'Show Data';
  constructor(private productService: ProductService) {} //DI for ProductService

  ngOnInit(): void {}

  loadProduct(): void {
    this.flag = true;
    this.productService.loadProduct().subscribe((data) => {
      this.productInfo = data;
    });
  }
}
