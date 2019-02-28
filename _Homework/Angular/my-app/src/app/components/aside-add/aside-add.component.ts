import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductInterface } from '../../models/Product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-aside-add',
  templateUrl: './aside-add.component.html',
  styleUrls: ['./aside-add.component.css']
})
export class AsideAddComponent implements OnInit {
  @Input() product: ProductInterface;
  currentWishlist: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.wishlist.subscribe( (data) => this.currentWishlist = data);
  }

  onWishlistAddClick() {
    this.product.favorit = !this.product.favorit;
    if (this.product.favorit) {
      this.currentWishlist.push({id: this.product.id, naziv: this.product.naziv, image_name: this.product.image_name});
      this.productService.wishlist.next(this.currentWishlist);
    } else {
      this.currentWishlist = this.currentWishlist.filter(item => item.id !== this.product.id );
      this.productService.wishlist.next(this.currentWishlist);
    }
  }
}
