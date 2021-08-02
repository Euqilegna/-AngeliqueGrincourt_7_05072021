import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { SubscriptionService } from '../_service/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {
  hide = true;
  userSubscription!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userSubscription = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  async onSubmitSub() {
    const formValue = this.userSubscription.value;

    let date = formValue['birthday'];
    const formatDate = this.datepipe.transform(date, 'yyyy-MM-dd');

    const newUser: User = new User(
      formValue['lastName'],
      formValue['firstName'],
      formValue['email'],
      formValue['password'],
      formatDate
    );

    console.log(newUser);
    const result = await this.subscriptionService.addUser(newUser.getApiData());
  }
}
