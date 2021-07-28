import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profil', component: UserProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
