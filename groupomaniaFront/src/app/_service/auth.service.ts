import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
  }

  get isAuth() { return !(localStorage.getItem('token') === null) }

  async login(mail: string, pwd: string) {
    const data: any = await this.axios.post({path: `/login`, params: { users_mail: mail, users_pwd: pwd},});
    console.log('login', data)
    if(data.status === 200){
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('userId', data.user.users_id)
      this.loggedInUser = data.user
      this.router.navigate(['/home']);
    } else {
      console.log("non")
    }
  }

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['']);
  }
}
