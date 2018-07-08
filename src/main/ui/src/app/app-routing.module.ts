import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', 
    component: UserComponent
  }
  ,
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'signin', 
    component: SignupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
