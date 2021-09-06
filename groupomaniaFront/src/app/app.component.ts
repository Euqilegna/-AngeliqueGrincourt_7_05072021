import { Component } from '@angular/core';
import { User } from './model/user.model';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService) {
    if (authService.isAuth) {
      const test = localStorage.getItem('user');
      authService.loggedInUser = JSON.parse(
        localStorage.getItem('user') as string
      );
      authService.currentUser = new User(
        authService.loggedInUser.users_id,
        authService.loggedInUser.users_lastName,
        authService.loggedInUser.users_firstName,
        authService.loggedInUser.users_mail,
        authService.loggedInUser.users_pwd,
        authService.loggedInUser.users_birthday
      )
    }
  }
}
