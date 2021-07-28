import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;
  loggedInUser = null;

  constructor(
    private axios: AxiosClientService,
    private router: Router, 
  ) {}

  // async login(login: string, password: string) {
  //   const data = await this.axios.post({
  //     path: `/login`,
  //     params: { login: login, password: password },
  //   });
  //   this.loggedInUser = data;
  //   this.isAuth = true;
  //   this.router.navigate(['/dashboard']);
  // }

  // async logOut() {
  //   const data = await this.axios.get({ path: `/Logout` });
  //   this.isAuth = false;
  //   this.loggedInUser = null;
  //   this.router.navigate(['']);
  // }
}
