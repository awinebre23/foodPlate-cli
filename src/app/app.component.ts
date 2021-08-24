import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title: string = 'foodPlate-cli';
  user: User;

  constructor(private titleService: Title, private userService: UserService) {}

  ngOnInit() {
    this.titleService.setTitle('Welcome to FoodPlate');
    this.user = this.userService.getUser();
    console.log(this.user);
  }
}
