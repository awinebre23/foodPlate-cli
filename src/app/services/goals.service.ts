import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Goal } from '../models/Goal';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  goalUrl = 'http://localhost:3006/goals';
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  errorMessage: string;

  constructor(private http: HttpClient) {
  }

  getGoals(): Observable<Goal> {
    const results: Observable<Goal> = this.http.get<Goal>(this.goalUrl);
    console.log(`getGoals() returned ${results}`);
    return results;
  }

  getGoalById(goalId: string): Observable<Goal> {
    const results: Observable<Goal> =
      this.http.get<Goal>(`${this.goalUrl}/${goalId}`);
    console.log(`getGoals(${goalId}) returned ${results}`);
    return results;
  }

  addGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> =
      this.http.post<Goal>(this.goalUrl, goal, this.jsonContentTypeHeaders);
    console.log(`addGoal(${goal}) returned ${results}`);
    console.log(typeof goal.id);
    return results;
  }

  updateGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> =
      this.http.put<Goal>(`${this.goalUrl}/${goal.id}`, goal,
        this.jsonContentTypeHeaders);
    console.log(`updateGoal(${goal}) returned ${results}`);
    return results;
  }

  deleteGoalById(goalId: string): Observable<Goal> {
    const results: Observable<Goal> =
      this.http.delete<Goal>(`${this.goalUrl}/${goalId}`);
    console.log(`deleteGoalById(${goalId}) returned ${results}`);
    return results;
  }

}
