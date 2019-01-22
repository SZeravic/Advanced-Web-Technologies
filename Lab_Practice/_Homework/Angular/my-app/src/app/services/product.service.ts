import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<ProductInterface[]>;

  // constructor(private http: HttpClient) {
  //   // this.products = this.http.get<ProductInterface[]>('../../assets/products.json');
  // }

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //     console.log(data);
    // });
  }

  getJSON(): Observable<any> {
    return this.http.get('../../assets/products.json');
  }

  // fetchProducts(): Observable<ProductInterface[]> {
  //   return this.http.get<ProductInterface[]>('/assets/students.json');
  // }

  fetchProducts(): Observable<ProductInterface[]> {
    console.log(this.products);
    return this.products;
  }

  fetchProduct(id: number): Observable<ProductInterface> {
    return this.products[id];
  }

}
