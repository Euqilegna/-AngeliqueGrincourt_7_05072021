import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/user.model';
import { AuthService } from '../_service/auth.service';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faCogs = faCogs;
  faBell = faBell;
  faPowerOff = faPowerOff;
  faSearch = faSearch;
  faTrashAlt = faTrashAlt;

  witchCompo: string = '';
  firstName: string = '';

  users: Array<User> = [];
  collaborateur: any;
  selectedCollaborateur: User;
  userId: number = 0;
  constructor(
    public router: Router,
    public authService: AuthService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.firstName = this.authService.loggedInUser.users_firstName;

    this.users = await this.userService.getAllUsers();
  }

  onClick(user: User) {
    this.setWitchCompo('userInfos');
    this.selectedCollaborateur = user;
  }

  setWitchCompo(compo: string) {
    this.witchCompo = compo;
  }
}
