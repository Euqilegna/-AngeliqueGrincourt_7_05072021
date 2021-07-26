import { Component, Injectable, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  form : string = ''
  constructor() { }

  ngOnInit(): void {
  }

  setForm(form : string){
    this.form = form
  }
}
