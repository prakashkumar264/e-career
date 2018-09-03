import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoyProfileComponent } from './coy-profile/coy-profile.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { CoyDashComponent } from './coy-dash/coy-dash.component';
import { UserSkillSuggestionComponent } from './user-skill-suggestion/user-skill-suggestion.component';
import { CoyPostJobComponent } from './coy-post-job/coy-post-job.component';

import { MaterialModule } from '@angular/material';

import { RatingModule } from "ngx-rating";

import { RouterModule } from '@angular/router'

import { TagInputModule } from 'ngx-chips';


const ROUTES = [
  {
    path: 'coy-dash', component: UserDashComponent
  },

  {
    path: 'coy-post-job', component: CoyPostJobComponent
  },

  {
    path: 'coy-profile', component: CoyProfileComponent
  },

  {
    path: 'user-dash', component: UserDashComponent
  },
  {
    path: 'user-profile/:uid', component: UserProfileComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },

  {
    path: 'user-skill-suggestion', component: UserSkillSuggestionComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RatingModule,
    FormsModule,
    MaterialModule,
    TagInputModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [UserProfileComponent, CoyProfileComponent, UserDashComponent, CoyDashComponent, UserSkillSuggestionComponent, CoyPostJobComponent]
})
export class DashboardModule { }
