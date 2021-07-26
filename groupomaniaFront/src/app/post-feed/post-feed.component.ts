import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit {

  faThumbsUp = faThumbsUp
  faTrashAlt = faTrashAlt
  
  constructor() { }

  ngOnInit(): void {
  }

}
