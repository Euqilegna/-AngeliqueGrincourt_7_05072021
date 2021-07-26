import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



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

  witchCompo : string = ''

  constructor(
    public router: Router
  ) { }



  ngOnInit(): void {
    
  }

  setWitchCompo(compo : string){
    this.witchCompo = compo
  } 



}

