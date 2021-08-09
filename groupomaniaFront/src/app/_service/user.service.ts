import { Injectable } from '@angular/core';
import { ApiUser, User } from '../model/user.model';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUsers: any;
  constructor(
    private axios: AxiosClientService,
    private appConfig: AppConfigService
  ) {
    this.baseUsers = `${this.appConfig.config.baseUsers}`;
  }

  async getAllUsers(): Promise<Array<User>> {
    const data: Array<ApiUser> = await this.axios.get({ path: this.baseUsers });
    return data.map(
      (e) =>
        new User(
          e.users_id,
          e.users_lastName,
          e.users_firstName,
          e.users_mail,
          e.users_pwd,
          e.users_birthday
        )
    );
  }

  async getUserById(id: number) {
    const data = await this.axios.get({ path: `${this.baseUsers}/${id}` });
    return data;
  }

  async updateUser(userData: any) {
    const data = await this.axios.put({
      path: this.baseUsers,
      params: userData,
    });
    console.log(data);
    return data;
  }

  async deleteUser(userId: number) {
    const data = await this.axios.delete({ path: this.baseUsers, params: { id: userId } });
    return data;
  }
}
