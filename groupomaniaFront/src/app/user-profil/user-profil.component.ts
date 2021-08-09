import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {
  form: string = '';
  lastName: string = '';
  firstName: string = '';
  mail: string = '';
  birthday: any = '';
  updateUserForm!: FormGroup;

  constructor(
    private authService: AuthService,
    public datepipe: DatePipe,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let date = this.authService.loggedInUser.users_birthday;
    const formatDate = this.datepipe.transform(date, 'dd-MM-yyyy');

    this.lastName = this.authService.loggedInUser.users_lastName;
    this.firstName = this.authService.loggedInUser.users_firstName;
    this.mail = this.authService.loggedInUser.users_mail;
    this.birthday = formatDate;
  }

//   async onSubmitForm() {
//     const formValue = this.updateUserForm.value;
// //     const lastName = this.userService.
// //     const firstName = this.userService
//     console.log(formValue)

//     await this.userService.updateUser(formValue);
//   }

  setForm(form: string) {
    this.form = form;
  }
}
