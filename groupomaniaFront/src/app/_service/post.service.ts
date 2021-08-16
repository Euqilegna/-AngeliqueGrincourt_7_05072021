import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ApiPost, Post } from '../model/post.model';
import { User } from '../model/user.model';
import { AppConfigService } from './app-config.service';
import { AxiosClientService } from './axios-client.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  basePosts: any;

  constructor(
    private axios: AxiosClientService,
    private appConfig: AppConfigService,
    public datepipe: DatePipe,
  ) {
    this.basePosts = `${this.appConfig.config.basePosts}`
  }
  async getAllPost(): Promise<Array<Post>> {
    const data: Array<ApiPost> = await this.axios.get({ path: this.basePosts });
    return data.map(
      (e) => {
        const user = new User(
          e.users_id,
          e.users_lastName,
          e.users_firstName,
          e.users_mail,
          e.users_pwd,
          e.users_birthday
        )
        return new Post(
          e.posts_id,
          user,
          e.posts_title,
          e.posts_file,
          this.datepipe.transform( e.posts_dateOfPublish , 'dd-MM-yyyy'),
          e.posts_likes,
          e.posts_unlikes,
          e.posts_numberOfComments
        )
      }
    )

  }

  async uploadPostImg(file) {
    const formData = new FormData();
    formData.append('postImg', file);
    console.log('formData', formData)
    const data = await this.axios.post({
      path: `${this.basePosts}/upload`,
      params: formData
    })
  }

  async createAPost(postData: any) {
    const data = await this.axios.post({
      path: this.basePosts,
      params: postData
    })
    console.log(data)
  }

  async getPostById() { }

  async updatePost() { }

  async deletePost() { }
}
