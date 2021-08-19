import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../_ui/snack-bar/snack-bar.component';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: any;
  loggedInUser: any;
  static loggedInUser: any;
  constructor(
    private axios: AxiosClientService,
    private router: Router,
    private snackBar : MatSnackBar
  ) {
  }

  get isAuth() { return !(localStorage.getItem('token') === null) }

  async login(mail: string, pwd: string) {
    const data: any = await this.axios.post({path: `/login`, params: { users_mail: mail, users_pwd: pwd},});
    if(data.status === 200){
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('userId', data.user.users_id)
      this.loggedInUser = data.user
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['']);
    }
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['']);
  }
}
