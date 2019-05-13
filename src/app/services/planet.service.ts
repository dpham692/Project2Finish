import { PlanetList } from '../models/planet-list.model';
import { USER_URL } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class PlanetService {
  constructor(private http: HttpClient) { }
  public findPlanetById(): Observable<PlanetList> {
    return this.http
            .get<any>(`${USER_URL}/findPlanet`)
            .catch(this.handleError);
  }
  private handleError(response: Response) {
    return Observable.throw(response);
  }
}
 
  