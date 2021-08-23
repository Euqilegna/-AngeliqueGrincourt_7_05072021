import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit, OnChanges {
  @Input() user: User;

  constructor(
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
   }
   

  ngOnChanges(change: SimpleChanges) {
  }
}
