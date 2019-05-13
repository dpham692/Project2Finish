import 'rxjs/add/operator/map';
import { USER_URL } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StarshipList } from '../models/starship-list.model';
import 'rxjs/Rx';
@Injectable()
export class StarshipService {
  constructor(private http: HttpClient) { }
  public findStarshipById(): Observable<StarshipList> {
    return this.http
            .get<any>(`${USER_URL}/findStarship`)
            .catch(this.handleError);
  }
  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
 