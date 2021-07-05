import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/components/layouts/auth/auth.component';
import { DashboardLayoutComponent } from './shared/components/layouts/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './views/auth/login/login.component';
const routes: Routes = [
  {
    path:'', 
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: ()=>import('./views/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
    
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path:'dashboard',
        loadChildren: ()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
