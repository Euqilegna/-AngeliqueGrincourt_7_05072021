import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(
    private authService : AuthService
  ) { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void { }

  async onSubmit(form: NgForm) {
    const login = form.value.email;
    const password = form.value.password;
    // await this.authService.login(login, password)
  }

}


