import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/_models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  showModal = false;
  reviews: Review[];
  max = 5;
  rate = 0;

  overStar: number | undefined;

  constructor() { }

  ngOnInit() {
    this.reviews = [
      {
        name: 'Shaun White',
        title: 'This thing is a monster!',
        dateReviewed: '08/20/2013',
        rating: 4,
        review: `I picked up this jacket in San Francisco and the surrounding Bay Area
        (Lake Tahoe included). I use this jacket for everything. It is often cloudy/drizzly
        /cold in SF and this jacket deals with it all. I have not tried in heavy rain, but
        in drizzly conditions, the DWR treatment definitely makes small drops bead right off.
        It also has a nice fleece-like liner inside and keeps me really warm down to 40 degrees
        or so. In Tahoe, I have used this with a shirt or base layer, mid later fleece, and then
        this jacket. I don't get cold too easily but in temps 20's - 30's I felt great (with
          some gloves and a beanie of course). I have not tried it skiing yet because I snowboard
          and to be honest it wouldn't be quite large enough (I like baggier snowboard clothing).
          But I have seen people who wear softshells skiing all the time. I also use this when I
          go to work and want a jacket that dresses up nice. With slacks, nice shoes, and a button
          up it looks great. I am 6' and about 190 lbs (34 in arms) and the large fits perfect. The
          pockets are well designed as well. The soft shell is the new 'do-everything' jacket; wind/water
          resistant, but also maleable and comfy for wearing anywhere. I highly recommend this jacket.`,
        photoUrl: '../../../assets/reviewer1.png',

      },
      {
        name: 'Jennie Loren',
        title: 'Luv it so much I bought 2!',
        dateReviewed: '01/12/2013',
        rating: 3,
        review: `Loved this jacket so much from previous years I decided to buy a second in a different
        color. I'm tall and fairly slender and its tailored silhouette fits me nicely. For perspective
        I'm around 6'3 - 150 lbs, and a large does the trick. I'll wear this for all of fall and into the
        winter. Despite not being bulky or baggy I find it good and warm for anything down to 40 degrees
        and perhaps lower if you're keeping up on your layering. For weather at freezing or below you should consider
        something heavier.`,
        photoUrl: '../../../assets/reviewer2.png',
      }
    ];

    this.reviews.forEach(element => {
      element.starsArray = [];
      for (let i = 0; i < element.rating; i++) {
        element.starsArray.push('star');
      }
    });
  }

  hoveringOver(value: number): void {
    this.overStar = value;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

}
