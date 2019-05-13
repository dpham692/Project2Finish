import { PeopleList } from '../models/people-list.model';
import { USER_URL } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class PeopleService {
  constructor(private http: HttpClient) { }
  public findPeopleById(): Observable<PeopleList> {
    console.log("Inservice");
    return this.http
            .get<any>(`${USER_URL}/findPeople`)
            .catch(this.handleError);
  }
  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
 
 
  // getPeoples(): People[]{
  //   return peopleList;
  // }


