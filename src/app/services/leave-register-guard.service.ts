import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveRegisterGuardService implements CanDeactivate<RegisterComponent> {

  constructor() { }

  canDeactivate(component: RegisterComponent): boolean {
    return component.canDeactivate() || window.confirm('Are you sure you want to leave the form?');
  }
}
