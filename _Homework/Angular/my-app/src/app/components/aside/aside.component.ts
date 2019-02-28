import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) {
    // this.productService.wishlist.subscribe( (data) => { console.log(data); });
    console.log(this.products);
   }

  ngOnInit() {
    this.productService.wishlist.subscribe( (data) => { this.products = data; });
  }

}
