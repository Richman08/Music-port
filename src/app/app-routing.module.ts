import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  // , canActivate: [AuthGuard]
  {path: 'faq', component: FaqComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-profile', component: UserProfileComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
