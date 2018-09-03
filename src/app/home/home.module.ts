import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router'


const ROUTES = [
  {
    path: '/', component: HomeComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
