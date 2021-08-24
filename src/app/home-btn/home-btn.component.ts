import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fp-home-btn',
  templateUrl: './home-btn.component.html',
  styleUrls: ['./home-btn.component.css']
})
export class HomeBtnComponent implements OnInit {

  @Input()
  user;

  constructor() { }

  ngOnInit(): void {
  }

}
