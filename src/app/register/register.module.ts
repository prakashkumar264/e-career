import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UserRegisterComponent } from './user-register/user-register.component';
import { CoyRegisterComponent } from './coy-register/coy-register.component';
import { TagInputModule } from 'ngx-chips'

import { RouterModule } from '@angular/router';

const ROUTES = [
  {
    path: 'user', component: UserRegisterComponent
  },

  {
    path: 'company', component: CoyRegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    TagInputModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserRegisterComponent, CoyRegisterComponent]
})
export class RegisterModule { }
