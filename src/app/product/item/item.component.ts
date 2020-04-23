import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  sizes: string[] = ['small', 'medium', 'large', 'x-large'];
  colors: string[] = ['red', 'blue', 'white', 'yellow', 'orange'];

  constructor() { }

  ngOnInit() {
  }

}
