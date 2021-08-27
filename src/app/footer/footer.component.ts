import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  versionString: string = "1.0.0";
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = "FoodPlate logo";
  isCurrent: boolean = false;
  subscription: Subscription;
  goal: any;

  moreInfo() {
    alert('for more info see choosemyplate.gov');
  }

  clearGoal(): void {
    this.todaysGoalService.clearGoal();
  }

  constructor(private todaysGoalService: TodaysGoalService) { 
    this.subscription = this.todaysGoalService.getGoal().subscribe(goal => {
      this.goal = goal;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
