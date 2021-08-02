import { Injectable } from '@angular/core';
import { ApiUser } from '../model/user.model';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  baseUsers: any;
  constructor(
    private axios: AxiosClientService,
    private appConfig: AppConfigService
  ) {
    this.baseUsers = `${this.appConfig.config.baseUsers}`;
  }

  async addUser(userData: ApiUser) {
    const data = await this.axios.post({
      path: this.baseUsers,
      params: userData
    });
    return data;
  }
}
