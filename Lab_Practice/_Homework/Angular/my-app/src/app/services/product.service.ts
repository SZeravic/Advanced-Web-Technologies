import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Observable<ProductInterface[]>;
  public wishlist: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.products = this.http.get<ProductInterface[]>('../../assets/products.json')
    .pipe(
      map(data => {
        const newProducts = data;
        const initialWL = newProducts
        .filter(product => product.favorit === true)
        .map(product => {
          return {id: product.id, naziv: product.naziv};
        });

        this.wishlist.next(initialWL);
        return data;
      })
    );
 }

  fetchProducts(): Observable<ProductInterface[]> {
    return this.products;
  }

  fetchProduct(id: number): Observable<ProductInterface> {
    return this.products.pipe(
      map(products => products.find((specificProduct) => specificProduct.id === id))
    );
  }
}
