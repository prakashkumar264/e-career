import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoyLoginComponent } from './coy-login/coy-login.component';

import { RouterModule } from '@angular/router'
import { AngularFireAuthModule } from "angularfire2/auth";

const ROUTES = [
  {
    path: 'user', component: UserLoginComponent
  },

  {
    path: 'company', component: CoyLoginComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserLoginComponent, CoyLoginComponent]
})
export class LoginModule { }
