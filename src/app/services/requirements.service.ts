import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirement } from '../models/requirement';


@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private requirementsUrl: string = 'assets/server/requirements.json'

  getRequirements(): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.requirementsUrl);
  }

  constructor(private http: HttpClient) { }
}
