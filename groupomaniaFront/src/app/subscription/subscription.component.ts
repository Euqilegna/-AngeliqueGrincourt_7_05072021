import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  hide = true;
  userSubscription!: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userSubscription = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required],
    })
  }

  onSubmitSub() {
    const formValue = this.userSubscription.value;
    const newUser: User = {
      lastName: formValue['lastName'],
      firstName: formValue['firstName'],
      email: formValue['email'],
      password: formValue['password'],
      birthday: formValue['birthday']
    }

    console.log(formValue)
  }
}
