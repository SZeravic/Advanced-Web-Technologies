import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductInterface } from '../../models/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Observable<ProductInterface[]>;

  // observer = {
  //   next: function(data) {
  //     this.allProducts = data;
  //   },
  //   error: function(error) {
  //     console.log(error);
  //   },
  // };

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getJSON().subscribe(data => {
         this.products = data;
     });
     console.log(this.products);
  }

  ngOnDestroy() {

  }

  // ngOnInit() {
  //   this.productService.fetchProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }

}
