import { Component, OnInit, Input } from '@angular/core';
import { ReviewInterface } from '../../models/Review.model';

@Component({
  selector: 'app-product-stars',
  templateUrl: './product-stars.component.html',
  styleUrls: ['./product-stars.component.css']
})
export class ProductStarsComponent implements OnInit {
  @Input() reviews: ReviewInterface[];
  stars: number[] = [];

  constructor() { }

  ngOnInit() {
    this.stars = this.reviews.map(review => review.ocjena);
  }

  getGrade(): number {
    const grade = this.stars.reduce((total, currentValue) => total + currentValue);
    return Math.round((grade / this.stars.length));
  }

  onStarClick(grade: number) {
    this.stars.push(grade);
  }

}
