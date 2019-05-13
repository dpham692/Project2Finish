import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user.model';
import { ClientMessage } from '../models/client-message.model';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
    title = 'Login Page';

    constructor(private router: Router, private userService: UserService) {}

    //To capture user input
    public user: User = new User(0,'','');

    //To present received user
    public userData: User = new User(0,'','');

    //To message the user
    public clientMessage: ClientMessage = new ClientMessage('');

    public findUser(): void {
      this.userService.findUser(this.user)
      .subscribe(
        data => {
        this.userData = data;
        this.router.navigate(['/info']);
        },
        responseError => {
          this.userData = null;
          this.clientMessage = responseError.error;
        }
      );
    }
}