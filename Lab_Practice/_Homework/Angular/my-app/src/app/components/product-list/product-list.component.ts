import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../models/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products_Obs: Observable<ProductInterface[]>;
  products: ProductInterface[];
  allProducts: ProductInterface[];
  allProductsFiltered: ProductInterface[];
  specificProduct: ProductInterface;

  constructor(private productService: ProductService) {
    // this.products = this.allProducts;
  }

  ngOnInit(): void {
    // Testing version of accessing Observable object (async)
    this.products_Obs = this.productService.fetchProducts();
    console.log(this.products_Obs);

    // Testing version of accessing java objects
    this.productService.fetchProducts().subscribe((data) => {
      this.products = data;
      this.allProducts = data;
      this.specificProduct = data[1];
      console.log(data);
      console.log(this.allProducts);
      console.log(this.specificProduct);
     });

    }

    public onSearch(value) {
      if (value !== undefined) {
        this.products = this.allProducts.filter(product => {
          return product.naziv.toLowerCase().includes(value.toLowerCase());
        });
        console.log(value);
        console.log(this.allProducts);
        console.log(this.allProductsFiltered);
      }
    }

    public onClick() {
      console.log('Search');
    }
}
