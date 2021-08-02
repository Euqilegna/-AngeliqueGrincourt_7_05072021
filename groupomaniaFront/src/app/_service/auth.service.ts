import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  loggedInUser: any;
  baseUrl: any;

  constructor(
    private axios: AxiosClientService,
    private router: Router,
    private appConfig: AppConfigService
  ) {
    this.baseUrl = `${this.appConfig.config.baseUrl}`;
  }

  async login(mail: string, pwd: string) {
    const data = await this.axios.post({
      path: `/login`,
      params: { users_mail: mail, users_pwd: pwd},
    });
    this.loggedInUser = data
    this.isAuth = true;
    this.router.navigate(['/home']);
    return data;
  }

  // async logOut() {
  //   const data = await this.axios.get({ path: `/Logout` });
  //   this.isAuth = false;
  //   this.loggedInUser = null;
  //   this.router.navigate(['']);
  // }
}
