import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'foodPlate-cli';

  constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate');
  }
}
