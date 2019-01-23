import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ProductInterface } from '../../models/Product.model';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  allProducts: Observable<ProductInterface[]>;
  products: Observable<ProductInterface[]>;
  subscription: any;
  message: string;
  typing = new Subject();

  constructor(private productService: ProductService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.allProducts = this.productService.fetchProducts();
    this.products = this.allProducts;

    console.log(this.products[0]);

    // this.subscription = this.typing
    // .pipe(
    //   debounceTime(500),
    //   distinctUntilChanged()
    // )
    // .subscribe((pojam: string) => {
    //   const searched_value = pojam.toUpperCase();
    //   if (pojam === '') {
    //     this.products = this.allProducts;
    //   } else {
    //     this.products = this.allProducts.pipe(
    //       map(items =>
    //         items.filter(item =>
    //           item.naziv
    //           .toUpperCase()
    //           .includes(searched_value) ||
    //           item.opis
    //           .toUpperCase()
    //           .includes(searched_value)))
    //     );
    //   }
    // });
  }

  onSearch(value: string) {
    // this.typing.next(value);


  }

  // onMessage(value: string) {
  //   this.message = value;
  // }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
