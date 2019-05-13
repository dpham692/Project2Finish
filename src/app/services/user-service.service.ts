import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';
import { USER_URL } from '../../environments/environment';
import { UserList } from '../models/user-list.model';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<ClientMessage> {
    return this.http
            .post<any>(`${USER_URL}/register`, user)
            .catch(this.handleError);
  }

  public findUser(user: User): Observable<User> {
    return this.http
            .post<any>(`${USER_URL}/find`, user)
            .catch(this.handleError);
  }

  public findAllUsers(): Observable<UserList> {
    return this.http
            .get<any>(`${USER_URL}/all`)
            .catch(this.handleError);
  }

  private handleError(response: Response) {
    return Observable.throw(response);
  }
}