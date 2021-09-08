import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Goal } from '../models/Goal';
import { GoalsService } from '../services/goals.service';


@Component({
  selector: 'fp-goals',
  templateUrl: 'goals.component.html',
  styleUrls: ['goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  goal: Goal;
  allGoals;
  errorMessage;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalView = false;

  constructor(private fb: FormBuilder, private goalsService: GoalsService) {
    this.createForm();
  }

  ngOnInit() {
    this.getAllGoals();
  }

  getAllGoals() {
    this.goalsService.getGoals()
      .subscribe((res: any) => {
        this.allGoals = res;
        console.log(this.allGoals);
        this.isLoading = false;
      }, err => {
        this.errorMessage = err;
        console.log(this.errorMessage = err.message);
        this.isLoading = false;
      });
  }

  createForm() {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    });
  }

  showEditGoalForm(goal: Goal) {
    this.newGoalView = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  toggleGoalComplete(goal: Goal) {
    goal.didIt = !goal.didIt;
  }

  showAddGoalForm(): void {
    this.showGoalAddEditForm(true);
    this.resetGoalService();
  }

  showGoalAddEditForm(showForm: boolean) {
    this.newGoalView = showForm;
  }

  getGoal(id): void {
    this.goalsService.getGoalById(id)
      .subscribe(
        goal => this.goalRetrieved(goal),
        error => console.log(error)
      );
  }

  deleteGoal(goal): void {
    this.goalsService.deleteGoalById(goal.id)
      .subscribe();
  }

  goalRetrieved(goal): void {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      deadline: this.goal.deadline,
      didIt: this.goal.didIt,
      goalTitle: this.goal.goalTitle
    });
  }

  resetGoalService(): void {
    this.goalForm.reset();
  }

  deleteCompleted(): void {
    const completedGoals = this.allGoals.filter(goals => goals.didIt ===
      true).map(goals => this.deleteGoal(goals));
    console.log(completedGoals);
  }

  insertGoal(goal: Goal): void {
    this.goalsService.addGoal(goal)
      .subscribe(goal => {
        this.getAllGoals();
      },
        (error) => console.log(error)
      );
  }

  updateGoal(goal: Goal): void {
    this.goalsService.updateGoal(goal)
      .subscribe(goal => this.getAllGoals());
  }

  toggleAccomplished(): void {
    console.log(`toggleAccomplished called`);
    this.goalForm.patchValue({ didIt: true });
  }

  submitGoal(goal): void {
    console.log(`submitGoal() called`);
    if (this.goalForm.invalid) {
      console.log("submitGoal(): this.goalForm.invalid = true");
      return;
    }
    this.showGoalAddEditForm(false);
    // Insert
    if (goal.id === null || goal.id < 1) {
      this.insertGoal(goal);
    }
    // Update
    else {
      this.updateGoal(goal);
    }
  }
}
