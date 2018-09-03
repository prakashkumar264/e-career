import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
},
{
  path: 'login', loadChildren: './login/login.module#LoginModule'
},
{
  path: 'register', loadChildren: './register/register.module#RegisterModule'
},
{
  path: 'home', loadChildren: './home/home.module#HomeModule'
}
];
