import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../models/Product.model';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: Observable<ProductInterface[]>;
  product: Observable<ProductInterface>;
  id: number;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private productService: ProductService
    ) {
      this.id = router.snapshot.params['id'];
  }

  ngOnInit() {
    this.productService.getJSON().subscribe(data => {
         this.products = data;
     });
     console.log(this.products);
  }

  // ngOnInit() {
  //   this.router.params.subscribe(params => { this.id = +params['id']; });
  //   // console.log(this.router.params['id']);
  //   this.productService.getJSON().subscribe(data => { this.products = data; });
  // }


  //  constructor(private router: Router, private route: ActivatedRoute) {
  //   this.id = route.snapshot.params['id'];
  // }

  // returnToList(): void {
  //   this.route.navigate([`/`]);
  // }

  // ngOnInit() {

  // }
}
