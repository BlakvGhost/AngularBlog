import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { GuestGuard } from '../guest.guard';

const authRoutes: Routes = [
  {path: 'auth/connectez-vous', component: LoginComponent, canActivate: [GuestGuard]},
  {path: 'auth/creer-un-compte', component: SigninComponent, canActivate: [GuestGuard]}
];

@NgModule({
  declarations: [
    AlertComponent,
    LoginComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [AlertComponent]
})
export class AuthModule { }
