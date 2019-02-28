import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../models/Product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductInterface;
  message: string;
  id: number;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private productService: ProductService
    ) {
      this.message = '';
    }

    ngOnInit() {
      this.router.params.subscribe(params => {
        this.id = +params['id'];
        this.productService.fetchProduct(this.id).subscribe(resp => {
          this.product = resp;
        });
      });
    }

    onMessage(value: string) {
      this.message = value;
    }

    onReturn() {
      this.route.navigate([`/products`]);
    }

    createRange(no) {
      const range = [];
      for (let i = 0; i < no; i++) {
        range.push(i);
      }
      return range;
    }
  }
