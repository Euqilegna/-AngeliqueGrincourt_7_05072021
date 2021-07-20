import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, AuthComponent, HomeComponent, SubscriptionComponent, UserProfilComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    MatNativeDateModule,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
