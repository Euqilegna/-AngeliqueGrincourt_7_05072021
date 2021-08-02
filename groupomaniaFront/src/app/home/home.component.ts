import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../_service/auth.service';

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
  name: string = ''
  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.name = this.authService.loggedInUser.user[0].users_firstName;
  }

  setWitchCompo(compo: string) {
    this.witchCompo = compo;
  }
}
