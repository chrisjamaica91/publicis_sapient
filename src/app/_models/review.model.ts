export interface Review {
  name: string;
  title: string;
  dateReviewed: string;
  rating: number;
  review: string;
  photoUrl: string;
  starsArray?: Array<any>;
}
