import { Component } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    title = 'Register User';

    //Constructor Injection
    constructor(private userService: UserService) { }

    //For data binding
    public user: User = new User(0,'','');

    //To message the user
    public clientMessage: ClientMessage = new ClientMessage('');

    public registerUser(): void {
      this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage = data,
        responseError => this.clientMessage = responseError.error
      );
    }
}