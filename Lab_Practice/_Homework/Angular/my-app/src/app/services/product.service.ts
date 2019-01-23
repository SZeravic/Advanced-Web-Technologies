import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<ProductInterface[]>;

  constructor(private http: HttpClient) {
    this.products = this.http.get<ProductInterface[]>('../../assets/products.json');
  }

  fetchProducts(): Observable<ProductInterface[]> {
    return this.products;
  }

  fetchProduct(id: number): Observable<ProductInterface> {
    return this.products.pipe(
      map(products => products.find((prod) => prod.id === id))
    );
  }
}
