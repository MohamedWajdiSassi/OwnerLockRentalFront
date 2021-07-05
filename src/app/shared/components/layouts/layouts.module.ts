import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [
    AuthComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
