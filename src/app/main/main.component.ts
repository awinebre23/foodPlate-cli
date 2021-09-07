import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser: User;
  routerLink: string;
  router: Router;

  constructor(private userService: UserService, private _router: Router) { 
    this.router = _router;
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

  getRoute() {
    if (!this.currentUser.registered) {
      this.routerLink = 'register';
    }
    else if (this.currentUser.registered) {
      this.routerLink = 'myPlate';
    }
    return this.routerLink;
   }

}
