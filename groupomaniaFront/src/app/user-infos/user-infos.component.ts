import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit, OnChanges {
  @Input() user: User;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges) {
    console.log(change)
  }
}
