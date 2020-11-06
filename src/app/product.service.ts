import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root', //It is equal to providers : [ProductService]
})
export class ProductService {
  //DI for HttpClient
  constructor(private http: HttpClient) {}

  loadProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
}
