import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { PostFeedComponent } from './post-feed/post-feed.component';
import { AppConfigService } from './_service/app-config.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appInitializerFn = (appConfig: AppConfigService) => () =>
  appConfig.loadAppConfig();

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SubscriptionComponent,
    UserProfilComponent,
    PostFeedComponent,
  ],
  imports: [
    HttpClientModule,
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
    FontAwesomeModule,
  ],
  providers: [
    MatNativeDateModule,
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService, HttpClient],
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
