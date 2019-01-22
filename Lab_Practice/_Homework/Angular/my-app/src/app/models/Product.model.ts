import { ReviewInterface } from './Review.model';

export interface ProductInterface {
  id: number;
  naziv: string;
  image_name: string;
  cijena: number;
  opis: string;
  favorit: boolean;
  recenzije: ReviewInterface[];
}
