import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Merci de remplir ce champ';
    }

    return this.email.hasError('email') ? 'email non valide' : '';
  }
}
