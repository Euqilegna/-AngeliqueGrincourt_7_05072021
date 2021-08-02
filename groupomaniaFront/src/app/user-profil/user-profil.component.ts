import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core'; 
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  form : string = ''

  lastName : string = ''
  firstName : string = ''
  mail : string = ''
  birthday : any = ''
  constructor(private authService: AuthService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    let date = this.authService.loggedInUser.user[0].users_birthday
    const formatDate = this.datepipe.transform(date, 'dd-MM-yyyy');

    this.lastName = this.authService.loggedInUser.user[0].users_lastName
    this.firstName = this.authService.loggedInUser.user[0].users_firstName
    this.mail = this.authService.loggedInUser.user[0].users_mail
    this.birthday = formatDate
  }
 

  setForm(form : string){
    this.form = form
  }
}



  

