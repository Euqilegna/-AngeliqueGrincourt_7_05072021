import { Component } from '@angular/core';
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
    }
  }
}
