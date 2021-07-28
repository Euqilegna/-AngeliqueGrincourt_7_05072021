import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  baseUrl: any;
  constructor(
    private axios: AxiosClientService,
    private appConfig: AppConfigService
  ) {
    this.baseUrl = `${this.appConfig.config.baseUser}`;
  }
  async addUser(userData: Object) {
    const data = await this.axios.put({ path: this.baseUrl, params: userData });
    return data;
  }
}
