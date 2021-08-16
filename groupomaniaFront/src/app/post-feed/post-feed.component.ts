import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faThumbsUp, faTrashAlt, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { Post } from '../model/post.model';
import { User } from '../model/user.model';
import { AppConfigService } from '../_service/app-config.service';
import { AuthService } from '../_service/auth.service';
import { PostService } from '../_service/post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit {

  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  faTrashAlt = faTrashAlt

  createAPost: FormGroup

  posts: Array<Post> = []

  constructor(
    public appConfigService: AppConfigService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public datepipe: DatePipe,
    private postService: PostService
  ) { }



  ngOnInit() {
    this.createAPost = this.formBuilder.group({
      title: [''],
      photo: ['']
    });
    this.initForm()
  }

  async initForm() {
    this.posts = await this.postService.getAllPost()
    this.posts.reverse()
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createAPost.get('photo').setValue(file);
    }
  }

  async onSubmitNewPost() {
    const formValue = this.createAPost.value

    let date = formValue['dateOfPublish']
    const today = new Date()
    const dateOfPostPublish = this.datepipe.transform(today, 'yyyy-MM-dd');

    const newPost: Post = new Post(
      0,
      new User(this.authService.loggedInUser.users_id),
      formValue['title'],
      formValue['photo'],
      dateOfPostPublish,
      0,
      0,
      0,
    )


    const apiData = newPost.getApiData()
    const formData = new FormData();
    for(let [key, value] of Object.entries(apiData)) {
      console.log('key', key, 'value', value)
      formData.append(key, value)
    }
    console.log(formData)
    const result = await this.postService.createAPost(formData)
  }

}
